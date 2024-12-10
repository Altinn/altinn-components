'use client';
import cx from 'classnames';
import { DropdownBase, type DropdownPlacement, IconButton, type MenuItemProps } from '../';
import { type MenuItemGroups, MenuItems } from '../';
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
  const onToggle = () => toggleId(id);
  return (
    <div className={cx(styles.toggle, className)} data-theme="neutral">
      <IconButton
        className={styles.button}
        size={size}
        icon="menu-elipsis-horizontal"
        iconSize="md"
        variant="text"
        color="secondary"
        onClick={onToggle}
      />
      <DropdownBase className={styles.dropdown} placement={placement} open={currentId === id} onClose={closeAll}>
        <MenuItems groups={groups} items={items} />
      </DropdownBase>
    </div>
  );
};
