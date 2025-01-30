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
      },
      {
        id: 'secondary-1',
        label: 'Secondary',
        priority: 'secondary',
      },
      {
        id: 'tertiary-1',
        label: 'Third action',
        priority: 'tertiary',
      },
      {
        id: 'tertiary-2',
        label: 'Fourth action',
        priority: 'tertiary',
      },
    ],
  },
};
