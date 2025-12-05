import { DrawerOrDropdown, useRootContext } from '../';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
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
  const { currentId, closeAll, toggleId } = useRootContext();
  const expanded = currentId === id;
  const onToggle = () => toggleId(id);
  const isDesktop = useIsDesktop();

  const onBlurCapture = (e: React.FocusEvent<HTMLElement>) => {
    const nextFocused = e.relatedTarget as HTMLElement | null;
    if (isDesktop && (!nextFocused || !e.currentTarget.contains(nextFocused))) {
      closeAll();
    }
  };

  return (
    <ToolbarFilterBase expanded={expanded} onBlurCapture={onBlurCapture}>
      <ToolbarButton type="add" onToggle={onToggle} aria-expanded={expanded}>
        {label}
      </ToolbarButton>
      <DrawerOrDropdown drawerTitle={label} open={expanded} onClose={closeAll}>
        <Menu color="neutral" items={items} keyboardEvents={expanded && isDesktop} />
      </DrawerOrDropdown>
    </ToolbarFilterBase>
  );
};
