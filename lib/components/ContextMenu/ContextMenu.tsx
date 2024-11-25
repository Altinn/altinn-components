'use client';
import type { DropdownPlacement, MenuItemProps } from '../';
import { type MenuItemGroups, MenuItems } from '../';
import { useRootContext } from '../RootProvider';
import { ContextMenuBase, type ContextMenuSize } from './ContextMenuBase';

export interface ContextMenuProps {
  id: string;
  items: MenuItemProps[];
  placement?: DropdownPlacement;
  size?: ContextMenuSize;
  groups?: MenuItemGroups;
}

export const ContextMenu = ({
  id = 'context-menu',
  placement = 'right',
  size,
  groups = {},
  items,
}: ContextMenuProps) => {
  const { currentId, toggleId } = useRootContext();
  return (
    <ContextMenuBase size={size} placement={placement} expanded={currentId === id} onToggle={() => toggleId(id)}>
      <MenuItems groups={groups} items={items} />
    </ContextMenuBase>
  );
};
