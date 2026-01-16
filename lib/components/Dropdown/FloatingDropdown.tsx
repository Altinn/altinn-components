'use client';
import type { MouseEventHandler } from 'react';
import { useEffect, useRef } from 'react';
import { useClickOutside, useMenu } from '../../hooks';
import { Button, ButtonIcon } from '../Button';
import type { ButtonColor, ButtonIconProps, ButtonSize, ButtonVariant } from '../Button';
import { Icon } from '../Icon';
import type { SvgElement } from '../Icon';

import { useRootContext } from '../RootProvider';
import styles from './floatingDropdown.module.css';

export interface FloatingDropdownItem {
  icon: SvgElement;
  title: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export interface FloatingDropdownProps {
  icon: ButtonIconProps['icon'];
  iconOpen?: ButtonIconProps['icon'];
  iconSize?: ButtonSize;
  iconAltText: string;
  items: FloatingDropdownItem[];
  color?: ButtonColor;
  size?: ButtonSize;
  variant?: ButtonVariant;
  'data-testid'?: string;
  id?: string;
}

export const FloatingDropdown = ({
  variant = 'solid',
  size,
  icon,
  iconOpen,
  iconSize,
  iconAltText,
  id = 'floatingDropdown',
  color = 'company',
  items,
  'data-testid': dataTestId,
}: FloatingDropdownProps) => {
  const { currentId, toggleId } = useRootContext();
  const expanded = currentId === id;
  const prevOpenRef = useRef(expanded);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleItemClick = (itemOnClick: MouseEventHandler<HTMLButtonElement>) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      itemOnClick(e);
      toggleId(id);
    };
  };

  const { menu, setActiveIndex, activeIndex } = useMenu({
    items,
    groups: { ungrouped: {} },
    keyboardEvents: expanded,
    ref: dropdownRef,
  });

  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = expanded;

    if (wasOpen && !expanded) {
      buttonRef.current?.focus();
    }
  }, [expanded]);

  useEffect(() => {
    if (expanded) {
      setActiveIndex(0);
    }
  }, [expanded, setActiveIndex]);

  useEffect(() => {
    if (!expanded) return;
    const raf = requestAnimationFrame(() => {
      menuRef.current?.focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(raf);
  }, [expanded]);

  // Focus trap inside the menu when open
  useEffect(() => {
    if (!expanded) return;
    const root = menuRef.current;
    if (!root) return;

    const getFocusable = () =>
      Array.from(root.querySelectorAll<HTMLElement>('button:not([disabled]), [tabindex]:not([tabindex="-1"])')).filter(
        (el) => el.tabIndex !== -1,
      );

    const focusFirst = () => {
      const focusables = getFocusable();
      focusables[0]?.focus({ preventScroll: true });
    };

    const onFocusIn = (e: FocusEvent) => {
      const target = e.target as Node | null;
      if (target && !root.contains(target)) {
        focusFirst();
      }
    };

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      const focusables = getFocusable();
      if (focusables.length === 0) {
        e.preventDefault();
        root.focus({ preventScroll: true });
        return;
      }

      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (e.shiftKey && active === first) {
        e.preventDefault();
        last.focus({ preventScroll: true });
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus({ preventScroll: true });
      }
    };

    document.addEventListener('focusin', onFocusIn);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('focusin', onFocusIn);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [expanded]);

  useClickOutside(dropdownRef, () => {
    if (expanded) {
      toggleId(id);
    }
  });

  const currentIcon = expanded && iconOpen ? iconOpen : icon;
  const activeDescendantId = expanded && activeIndex >= 0 ? `floating-dropdown-button-${activeIndex}` : undefined;

  return (
    <div className={styles.container} ref={dropdownRef}>
      {expanded && (
        <div
          id="floating-dropdown-menu"
          className={styles.dropdown}
          data-color={color}
          role="menu"
          aria-labelledby="floating-dropdown-button"
          aria-activedescendant={activeDescendantId}
          tabIndex={-1}
          ref={menuRef}
        >
          {menu[0]?.items.map((menuItem, index) => {
            const item = menuItem.props as FloatingDropdownItem;
            return (
              <Button
                id={'floating-dropdown-button-' + index}
                key={index}
                className={styles.dropdownItem}
                onClick={handleItemClick(item.onClick)}
                type="button"
                role="menuitem"
                tabIndex={-1}
                data-active={menuItem.active}
                onMouseEnter={menuItem.onMouseEnter}
                onMouseLeave={menuItem.onMouseLeave}
              >
                <Icon svgElement={item.icon} size="md" color="inherit" />
                <span className={styles.itemTitle}>{item.title}</span>
              </Button>
            );
          })}
        </div>
      )}
      <Button
        className={styles.button}
        variant={variant}
        color={color}
        size={size}
        onClick={() => toggleId(id)}
        data-testid={dataTestId}
        aria-label={iconAltText}
        aria-expanded={expanded}
        aria-haspopup="menu"
        id="floating-dropdown-button"
        ref={buttonRef}
        autoFocus={false}
        aria-controls={expanded ? 'floating-dropdown-menu' : undefined}
      >
        {currentIcon && <ButtonIcon icon={currentIcon} size={iconSize} />}
      </Button>
    </div>
  );
};
