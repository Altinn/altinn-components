'use client';
import type { MouseEventHandler } from 'react';
import { useEffect, useRef } from 'react';
import { useClickOutside, useMenu } from '../../hooks';
import { ButtonBase, ButtonIcon } from '../Button';
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
  dataTestId?: string;
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
  dataTestId,
}: FloatingDropdownProps) => {
  const { currentId, toggleId } = useRootContext();
  const expanded = currentId === id;
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClose = () => {
    buttonRef.current?.focus();
  };

  const handleItemClick = (itemOnClick: MouseEventHandler<HTMLButtonElement>) => {
    return (e: React.MouseEvent<HTMLButtonElement>) => {
      itemOnClick(e);
      toggleId(id);
      handleClose();
    };
  };

  const { menu, setActiveIndex } = useMenu({
    items,
    groups: { ungrouped: {} },
    keyboardEvents: expanded,
    onSelect: handleClose,
    ref: dropdownRef,
  });

  useEffect(() => {
    if (expanded) {
      setActiveIndex(0);
    }
  }, [expanded, setActiveIndex]);

  useClickOutside(dropdownRef, () => {
    if (expanded) {
      toggleId(id);
    }
  });

  const currentIcon = expanded && iconOpen ? iconOpen : icon;

  return (
    <div className={styles.container} ref={dropdownRef}>
      {expanded && (
        <div className={styles.dropdown} data-color={color} role="menu" aria-labelledby="floating-dropdown-button">
          {menu[0]?.items.map((menuItem, index) => {
            const item = menuItem.props as FloatingDropdownItem;
            return (
              <button
                key={index}
                className={styles.dropdownItem}
                onClick={handleItemClick(item.onClick)}
                type="button"
                role="menuitem"
                tabIndex={menuItem.active ? 0 : -1}
                data-active={menuItem.active}
                onMouseEnter={menuItem.onMouseEnter}
                onMouseLeave={menuItem.onMouseLeave}
              >
                <Icon svgElement={item.icon} size="md" color="inherit" />
                <span className={styles.itemTitle}>{item.title}</span>
              </button>
            );
          })}
        </div>
      )}
      <ButtonBase
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
      >
        {currentIcon && <ButtonIcon icon={currentIcon} size={iconSize} />}
      </ButtonBase>
    </div>
  );
};
