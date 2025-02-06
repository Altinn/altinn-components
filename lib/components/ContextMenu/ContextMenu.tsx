'use client';
import { MenuElipsisHorizontalIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { useMemo, useRef } from 'react';
import { DropdownBase, type DropdownPlacement, IconButton, type MenuItemProps } from '../';
import { type MenuItemGroups, MenuItems } from '../';
import { useClickOutside } from '../../hooks';
import { useRootContext } from '../RootProvider';
import styles from './contextMenu.module.css';

export type ContextMenuSize = 'sm' | 'md';

export interface ContextMenuProps {
  id: string;
  items: MenuItemProps[];
  placement?: DropdownPlacement;
  size?: ContextMenuSize;
  groups?: MenuItemGroups;
  className?: string;
}

export const ContextMenu = ({
  id = 'context-menu',
  placement = 'right',
  size,
  groups = {},
  className,
  items,
}: ContextMenuProps) => {
  const { currentId, toggleId, closeAll } = useRootContext();
  const ref = useRef<HTMLDivElement>(null);
  useClickOutside(ref, () => closeAll());
  const onToggle = () => toggleId(id);
  const expanded = currentId === id;

  const itemsWithToggle = useMemo(() => {
    return items.map((item) => {
      return {
        ...item,
        onClick: () => {
          item.onClick?.();
          closeAll();
        },
      };
    });
  }, [items, closeAll]);

  return (
    <div className={cx(styles.toggle, className)} data-color="neutral" ref={ref}>
      <IconButton
        className={styles.button}
        size={size}
        icon={MenuElipsisHorizontalIcon}
        iconSize="md"
        variant="text"
        color="neutral"
        onClick={onToggle}
        iconAltText={`Open ${id}`}
      />
      <DropdownBase placement={placement} open={expanded}>
        <MenuItems groups={groups} items={itemsWithToggle} />
      </DropdownBase>
    </div>
  );
};
