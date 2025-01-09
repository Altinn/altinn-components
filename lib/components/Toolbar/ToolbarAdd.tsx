import { DrawerOrDropdown, useRootContext } from '../';
import { Menu, type MenuItemProps } from '../Menu';
import { ToolbarButton } from './ToolbarButton';
import { ToolbarFilterBase } from './ToolbarFilterBase';

export interface ToolbarAddProps {
  items: MenuItemProps[];
  id: string;
  label?: string;
  className?: string;
}

export const ToolbarAdd = ({ label = 'Legg til', items, id }: ToolbarAddProps) => {
  const { closeAll, currentId, toggleId } = useRootContext();
  const expanded = currentId === id;
  const onToggle = () => toggleId(id);

  return (
    <ToolbarFilterBase expanded={expanded}>
      <ToolbarButton type="add" onToggle={onToggle}>
        {label}
      </ToolbarButton>
      <DrawerOrDropdown drawerTitle={label} onClose={closeAll} open={expanded}>
        <Menu color="neutral" items={items} />
      </DrawerOrDropdown>
    </ToolbarFilterBase>
  );
};
