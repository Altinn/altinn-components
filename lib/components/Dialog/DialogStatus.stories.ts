import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { DialogStatus } from './DialogStatus';

const meta = {
  title: 'Dialog/DialogStatus',
  component: DialogStatus,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof DialogStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Draft: Story = {
  args: {
    value: 'draft',
    label: 'Utkast',
  },
};

export const Sent: Story = {
  args: {
    value: 'draft',
    label: 'Utkast',
  },
};

export const RequiresAttention: Story = {
  args: {
    value: 'requires-attention',
    label: 'Utkast',
  },
};

export const InProgress: Story = {
  args: {
    value: 'in-progress',
    label: 'Utkast',
  },
};

export const Completed: Story = {
  args: {
    value: 'completed',
    label: 'Utkast',
  },
};
