import type { Meta, StoryObj } from '@storybook/react';
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
    theme: 'base',
  },
};

export const AlertXs: Story = {
  args: {
    ...Alert.args,
    size: 'xs',
    theme: 'base',
  },
};

export const UnreadCount: Story = {
  args: {
    label: '2',
    color: 'neutral',
  },
};

export const UnreadCountXs: Story = {
  args: {
    ...UnreadCount.args,
    size: 'xs',
    theme: 'base',
  },
};
