import type { MouseEventHandler } from 'react';
import { DrawerOrDropdown } from '../';
import { Menu, type MenuItemGroups, type MenuItemProps, type MenuSearchProps } from '../Menu';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarFilterBase } from './ToolbarFilterBase';

export interface ToolbarMenuProps {
  onToggle?: MouseEventHandler;
  label: string;
  value: string | number;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  search?: MenuSearchProps;
  expanded?: boolean;
  className?: string;
}

export const ToolbarMenu = ({ expanded = false, onToggle, label, value, groups, search, items }: ToolbarMenuProps) => {
  return (
    <ToolbarFilterBase expanded={expanded}>
      <ToolbarButton type="switch" onToggle={onToggle} active={!!value}>
        {label}
      </ToolbarButton>
      <DrawerOrDropdown expanded={expanded} title="Endre konto" onClose={onToggle}>
        <Menu theme="global" defaultItemColor="subtle" groups={groups} search={search} items={items} />
      </DrawerOrDropdown>
    </ToolbarFilterBase>
  );
};
