import { PlusIcon } from '@navikt/aksel-icons';
import { Button } from '../Button';
import { Dropdown, type DropdownProps } from '../Dropdown';
import { Menu } from '../Menu';
import { useDropdownMenuController } from '../Menu/useDropdownMenuController.tsx';
import type { FilterProps } from './useFilter.tsx';

export interface ToolbarFilterAddMenuProps extends FilterProps {
  dropdownSize?: DropdownProps['size'];
  open: boolean;
  onToggle: () => void;
  onClose: () => void;
  onAdd?: (name: string) => void;
}

export const ToolbarFilterAddMenu = ({
  label = 'Legg til filter',
  items,
  groups = {},
  onAdd,
  onToggle,
  onClose,
  open,
  title,
  dropdownSize = 'sm',
}: ToolbarFilterAddMenuProps) => {
  const ctrl = useDropdownMenuController({ id: 'tool-filter-add', popup: 'menu', variant: 'drawer-dropdown', open });
  const addItems = items?.map(({ items: _options, ...filter }) => ({
    linkIcon: true,
    ...filter,
    onClick: () => onAdd?.(filter?.name ?? ''),
  }));

  if (!addItems?.length) {
    return null;
  }

  return (
    <Dropdown
      {...ctrl.dropdownProps}
      size={dropdownSize}
      title={title ?? label}
      trigger={
        <Button
          variant="secondary"
          style={{
            borderStyle: 'dashed',
          }}
          {...ctrl.triggerProps}
          onClick={onToggle}
          ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
        >
          <PlusIcon aria-hidden="true" focusable="false" />
          <span>{label}</span>
        </Button>
      }
      open={open}
      onClose={onClose}
    >
      <Menu
        groups={groups}
        items={addItems}
        maxLevels={1}
        keyboardEvents={open}
        open={open}
        a11yMode="menu"
        {...ctrl.listProps}
      />
    </Dropdown>
  );
};
