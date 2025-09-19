'use client';
import { MenuElipsisHorizontalIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { useMemo, useRef } from 'react';
import { DropdownBase, type DropdownPlacement, IconButton, type MenuItemProps } from '../';
import { type MenuItemGroups, MenuItems } from '../';
import { useClickOutside } from '../../hooks';
import { useEnterKey } from '../../hooks/useEnterKey.ts';
import { useRootContext } from '../RootProvider';
import styles from './contextMenu.module.css';

export interface ContextMenuProps {
  id?: string;
  ariaLabel?: string;
  items: MenuItemProps[];
  placement?: DropdownPlacement;
  groups?: MenuItemGroups;
  className?: string;
}

export const ContextMenu = ({
  id = 'context-menu',
  ariaLabel,
  placement = 'right',
  groups = {},
  className,
  items,
}: ContextMenuProps) => {
  const { currentId, toggleId, closeAll } = useRootContext();
  const ref = useRef<HTMLDivElement>(null);
  const dataTestId = 'context-menu-' + id;
  const onToggle = () => toggleId(id);
  const expanded = currentId === id;

  useClickOutside(ref, () => {
    if (expanded) {
      toggleId(id);
    }
  });

  const itemsWithToggle = useMemo(() => {
    return items.map((item) => {
      return {
        ...item,
        tabIndex: -1,
        onClick: () => {
          item.onClick?.();
          closeAll();
        },
      };
    });
  }, [items, closeAll]);

  useEnterKey((e) => {
    if (expanded) {
      e.preventDefault();
      const activeItem = ref.current?.querySelector('[data-active="true"]') as HTMLElement | null;
      if (activeItem) {
        const isLink = activeItem.tagName === 'A' && activeItem.hasAttribute('href');
        if (!isLink) {
          activeItem.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
          activeItem.click();
        }
      }
      closeAll();
    }
  });

  const onBlurCapture = (e: React.FocusEvent<HTMLButtonElement>) => {
    const contextMenuParent = e?.relatedTarget?.closest(`[data-testid="${dataTestId}"]`);
    if (!contextMenuParent) {
      closeAll();
    }
  };

  return (
    <div className={cx(styles.toggle, className)} ref={ref} data-testid={dataTestId}>
      <IconButton
        size="xs"
        rounded
        icon={MenuElipsisHorizontalIcon}
        variant="text"
        onClick={onToggle}
        iconAltText={ariaLabel || `Open ${id}`}
        onBlurCapture={onBlurCapture}
      />
      {expanded && (
        <DropdownBase placement={placement} open={expanded}>
          <MenuItems groups={groups} items={itemsWithToggle} keyboardEvents />
        </DropdownBase>
      )}
    </div>
  );
};
