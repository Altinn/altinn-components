import { DrawerOrDropdown, useRootContext } from '../';
import { Menu, type MenuItemGroups, type MenuItemProps, type MenuSearchProps } from '../Menu';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarFilterBase } from './ToolbarFilterBase';

export interface ToolbarMenuProps {
  label: string;
  value: string | number;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  search?: MenuSearchProps;
  id?: string;
  className?: string;
}

export const ToolbarMenu = ({ label, value, groups, search, items, id = 'toolbar-menu' }: ToolbarMenuProps) => {
  const { currentId, toggleId, closeAll } = useRootContext();
  const onToggle = () => toggleId(id);
  const expanded = currentId === id;

  return (
    <ToolbarFilterBase expanded={expanded}>
      <ToolbarButton type="switch" onToggle={onToggle} active={!!value}>
        {label}
      </ToolbarButton>
      <DrawerOrDropdown open={expanded} drawerTitle="Endre konto" onClose={closeAll}>
        <Menu theme="global" defaultItemColor="subtle" groups={groups} search={search} items={items} />
      </DrawerOrDropdown>
    </ToolbarFilterBase>
  );
};
