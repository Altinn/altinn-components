import { useState } from 'react';
import { Dropdown } from './Dropdown';
import { Menu, type MenuProps } from './Menu';
import { ToolbarButton } from './ToolbarButtons';

interface SelectMenuProps extends MenuProps {
  label: string;
}

const SelectMenu = ({ label = 'Meny', searchable, groups, items, size }: SelectMenuProps) => {
  const [open, setOpen] = useState(false);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Dropdown
      trigger={
        <ToolbarButton variant="primary" onClick={onToggle}>
          {label}
        </ToolbarButton>
      }
      open={open}
      onClose={onClose}
    >
      <Menu size={size} searchable={searchable} groups={groups} items={items} />
    </Dropdown>
  );
};

export interface ToolbarSelectProps {
  items: SelectMenuProps[];
}

export const ToolbarSelect = ({ items }: ToolbarSelectProps) => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      {items?.map((item, index) => (
        <SelectMenu key={index} {...item} />
      ))}
    </div>
  );
};
