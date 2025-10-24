import type { Meta, StoryObj } from '@storybook/react-vite';
import { GlobalMenuButton } from './GlobalMenuButton';

const meta = {
  title: 'Layout/GlobalMenuButton',
  component: GlobalMenuButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof GlobalMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {
  args: {},
};

export const Open: Story = {
  args: {
    expanded: true,
  },
};

export const WithBadge: Story = {
  args: {
    badge: {
      variant: 'base',
      color: 'alert',
      label: '2',
    },
  },
};
