import { ChevronUpDownIcon } from '@navikt/aksel-icons';
import { useId, useState } from 'react';
import { Button } from '../Button';
import { Dropdown } from '../Dropdown';
import { Menu, type MenuItemProps, type MenuProps } from '../Menu/';

export interface ToolbarMenuProps extends MenuProps {
  title?: string;
  label: string;
  onSelectId?: (id: string) => void;
}

export const ToolbarMenu = ({
  title = 'Title',
  label = 'Label',
  items = [],
  onSelectId,
  ...props
}: ToolbarMenuProps) => {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  const onClose = () => {
    setOpen(false);
  };

  const selectableItems = items.map((item: MenuItemProps) => {
    return {
      ...item,
      onClick: () => {
        onSelectId?.(item?.id || 'n/a');
        onClose();
      },
    };
  });

  const reactId = useId();
  const menuId = `toolbar-menu-${reactId}`;

  return (
    <Dropdown
      variant="drawer-dropdown"
      title={title}
      trigger={
        <Button variant="primary" onClick={onToggle} aria-expanded={open} aria-haspopup="menu" aria-controls={menuId}>
          <span>{label}</span>
          <ChevronUpDownIcon />
        </Button>
      }
      open={open}
      onClose={onClose}
    >
      <Menu {...props} items={selectableItems} keyboardEvents={open} id={menuId} />
    </Dropdown>
  );
};
