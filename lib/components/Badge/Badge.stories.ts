import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from './Badge';

const meta = {
  title: 'Components/Badge',
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

export const Notification: Story = {
  args: {
    color: 'alert',
    variant: 'base',
  },
};

export const Warning: Story = {
  args: {
    label: 'Warning badge',
    color: 'warning',
  },
};

export const Danger: Story = {
  args: {
    label: 'Danger badge',
    color: 'danger',
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
  },
};
