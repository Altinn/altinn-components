import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Badge } from './Badge';

const meta = {
  title: 'Atoms/Badge/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {},
  args: {
    label: 'Badge',
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Alert: Story = {
  args: {
    color: 'alert',
  },
};

export const UnreadCount: Story = {
  args: {
    label: '2',
    color: 'alert',
  },
};
