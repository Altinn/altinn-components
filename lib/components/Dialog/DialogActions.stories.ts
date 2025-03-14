import type { Meta, StoryObj } from '@storybook/react';
import { DialogActions } from './DialogActions';

const meta = {
  title: 'Dialog/Atoms/DialogActions',
  component: DialogActions,
  tags: ['autodocsi', 'beta'],
  args: {
    items: [
      {
        label: 'Primary',
        priority: 'primary',
        id: 'primary',
      },
      {
        label: 'Secondary',
        priority: 'secondary',
        id: 'secondary',
      },
    ],
  },
} satisfies Meta<typeof DialogActions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Secondary: Story = {
  args: {},
};

export const MultipleButtons: Story = {
  args: {
    items: [
      {
        id: 'primary',
        label: 'Primary',
        priority: 'primary',
        onClick: () => console.log('Primary clicked'),
      },
      {
        id: 'secondary-1',
        label: 'Secondary',
        priority: 'secondary',
        onClick: () => console.log('secondary clicked'),
      },
      {
        id: 'tertiary-1',
        label: 'Third action',
        priority: 'tertiary',
        onClick: () => console.log('tertiary clicked'),
      },
      {
        id: 'tertiary-2',
        label: 'Fourth action',
        priority: 'tertiary',
        onClick: () => console.log('Fourth clicked'),
      },
      {
        id: 'tertiary-3',
        label: 'Hidden action',
        priority: 'tertiary',
        onClick: () => console.log('Hidden clicked'),
        hidden: true,
      },
    ],
  },
};
