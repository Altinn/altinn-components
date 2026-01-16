import { ChevronUpDownIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button/Button';
import { Menu } from '../Menu/Menu';
import { Dropdown, type DropdownProps } from './Dropdown';

const dropdownMenu = {
  label: 'Velg status',
  groups: {
    1: {
      title: 'Velg status',
    },
  },
  items: [
    {
      id: '1',
      groupId: '1',
      role: 'checkbox',
      name: 'unread',
      value: 'true',
      title: 'Ulest',
    },
    {
      id: '2',
      groupId: '2',
      role: 'checkbox',
      name: 'status',
      value: 'requires-action',
      title: 'Krever handling',
    },
    {
      id: '3',
      groupId: '2',
      role: 'checkbox',
      name: 'status',
      value: 'awaiting',
      title: 'Avventer',
    },
    {
      id: '4',
      groupId: '2',
      role: 'checkbox',
      name: 'status',
      value: 'in-progress',
      title: 'Under arbeid',
    },
    {
      id: '5',
      groupId: '2',
      role: 'checkbox',
      name: 'status',
      value: 'completed',
      title: 'Avsluttet',
    },
    {
      id: '6',
      groupId: '3',
      role: 'checkbox',
      name: 'status',
      value: 'undefined',
      title: 'Ingen status',
    },
  ],
};

const meta = {
  title: 'Next/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  parameters: {},
  args: {
    placement: 'left',
  },
} satisfies Meta<typeof DropdownMenu>;

export default meta;

export const DropdownMenu = ({ title = 'Meny', placement }: DropdownProps) => {
  const [open, setOpen] = useState(true);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Dropdown
      trigger={
        <Button size="xs" variant="primary" onClick={onToggle}>
          <span>{title}</span>
          <ChevronUpDownIcon />
        </Button>
      }
      open={open}
      onClose={onClose}
      placement={placement}
    >
      <Menu {...dropdownMenu} size="sm" />
    </Dropdown>
  );
};

export const DrawerMenu = ({ title = 'Meny', placement }: DropdownProps) => {
  const [open, setOpen] = useState(true);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Dropdown
      trigger={
        <Button size="xs" variant="primary" onClick={onToggle}>
          <span>{title}</span>
          <ChevronUpDownIcon />
        </Button>
      }
      open={open}
      onClose={onClose}
      placement={placement}
      variant="drawer"
    >
      <Menu {...dropdownMenu} size="sm" />
    </Dropdown>
  );
};

export const DrawerOrDropdownMenu = ({ title = 'Meny', placement }: DropdownProps) => {
  const [open, setOpen] = useState(true);

  const onToggle = () => {
    setOpen((prev) => !prev);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <Dropdown
      trigger={
        <Button size="xs" variant="primary" onClick={onToggle}>
          <span>{title}</span>
          <ChevronUpDownIcon />
        </Button>
      }
      open={open}
      onClose={onClose}
      placement={placement}
      variant="drawer-dropdown"
    >
      <Menu {...dropdownMenu} size="sm" />
    </Dropdown>
  );
};
