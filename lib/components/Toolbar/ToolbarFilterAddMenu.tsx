import { PlusIcon } from '@navikt/aksel-icons';
import { useEffect, useRef } from 'react';
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
  dropdownSize = 'sm',
}: ToolbarFilterAddMenuProps) => {
  const ctrl = useDropdownMenuController({ id: 'tool-filter-add' });
  const prevOpenRef = useRef(open);
  const lastCloseHadNestedOpenRef = useRef(false);
  const addItems = items?.map((filter) => ({
    linkIcon: true,
    ...filter,
    onClick: () => onAdd?.(filter?.name ?? ''),
  }));

  useEffect(() => {
    const wasOpen = prevOpenRef.current;
    prevOpenRef.current = open;

    if (wasOpen && !open) {
      ctrl?.triggerRef?.current?.focus();
    }
  }, [open, ctrl.triggerRef]);

  if (!addItems?.length) {
    return null;
  }

  const handleClose = () => {
    const root = document.getElementById(ctrl.menuId);
    lastCloseHadNestedOpenRef.current = Boolean(root?.querySelector('[aria-haspopup="menu"][aria-expanded="true"]'));
    onClose();
  };

  return (
    <Dropdown
      variant="drawer-dropdown"
      size={dropdownSize}
      trigger={
        <Button
          variant="secondary"
          style={{
            borderStyle: 'dashed',
          }}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-controls={open ? ctrl.menuId : undefined}
          onClick={onToggle}
          ref={ctrl.triggerRef as React.Ref<HTMLButtonElement>}
        >
          <PlusIcon aria-hidden="true" focusable="false" />
          <span>{label}</span>
        </Button>
      }
      open={open}
      onClose={handleClose}
      {...ctrl.dropdownA11yProps}
    >
      <Menu groups={groups} items={addItems} maxLevels={1} keyboardEvents={open} open={open} {...ctrl.menuA11yProps} />
    </Dropdown>
  );
};
