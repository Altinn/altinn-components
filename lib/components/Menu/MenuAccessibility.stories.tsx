import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from './Menu';

const meta = {
  title: 'Menu/Accessibility',
  component: Menu,
  parameters: {
    a11y: { test: 'error' },
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const RadioOptions: Story = {
  args: {
    open: true,
    keyboardEvents: true,
    items: [
      { role: 'radio', name: 'partyScope', groupId: '1', title: 'Alle aktører', value: 'ALL_PARTIES', checked: true },
      { role: 'radio', name: 'partyScope', groupId: '2', title: 'Personer', value: 'PERSONS' },
      { role: 'radio', name: 'partyScope', groupId: '2', title: 'Virksomheter', value: 'COMPANIES' },
    ],
  },
};

export const CheckboxOptions: Story = {
  args: {
    open: true,
    keyboardEvents: true,
    items: [
      { role: 'checkbox', name: 'status', groupId: '1', title: 'Ulest', value: 'unread', checked: true },
      { role: 'checkbox', name: 'status', groupId: '1', title: 'Krever handling', value: 'requires-action' },
    ],
  },
};

export const LinkOptions: Story = {
  args: {
    open: true,
    keyboardEvents: true,
    items: [
      { id: 'inbox', title: 'Innboks', href: '#' },
      { id: 'drafts', title: 'Utkast', href: '#' },
    ],
  },
};

export const GroupHeading: Story = {
  args: {
    open: true,
    keyboardEvents: true,
    groups: { 1: { title: 'Velg status' } },
    items: [
      { role: 'checkbox', name: 'status', groupId: '1', title: 'Ulest', value: 'unread', checked: true },
      { role: 'checkbox', name: 'status', groupId: '1', title: 'Krever handling', value: 'requires-action' },
    ],
  },
};
