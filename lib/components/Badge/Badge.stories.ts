import type { Meta, StoryObj } from '@storybook/react-vite';
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
    variant: 'base',
  },
};

export const AlertXs: Story = {
  args: {
    ...Alert.args,
    size: 'xs',
    variant: 'base',
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

export const TextBadge: Story = {
  args: {
    label: 'Text badge',
    variant: 'text',
  },
};
