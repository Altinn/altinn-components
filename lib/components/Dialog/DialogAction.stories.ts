import type { Meta, StoryObj } from '@storybook/react';
import { DialogAction } from './DialogAction';

const meta = {
  title: 'Dialog/Sections/DialogAction',
  component: DialogAction,
  tags: ['autodocs'],
  args: {
    items: [
      {
        label: 'Primary',
        priority: 'primary',
      },
      {
        label: 'Secondary',
        priority: 'secondary',
      },
    ],
  },
} satisfies Meta<typeof DialogAction>;

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
        label: 'Primary',
        priority: 'primary',
      },
      {
        label: 'Secondary',
        priority: 'secondary',
      },
      {
        label: 'Third action',
        priority: 'tertiary',
      },
      {
        label: 'Fourth action',
        priority: 'tertiary',
      },
    ],
  },
};
