import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogHeader } from './DialogHeader';

const meta = {
  title: 'Inbox/Dialog/DialogHeader',
  component: DialogHeader,
  tags: ['beta'],
  parameters: {},
  args: {
    title: 'Title',
    updatedAt: '1999-05-26',
    updatedAtLabel: '26. mai 1999',
    status: {
      value: 'requires-attention',
      label: 'Krever handling',
    },
  },
} satisfies Meta<typeof DialogHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    dueAt: '2025-04-01',
    dueAtLabel: 'Frist: 1. april 2025',
  },
};

export const InProgress: Story = {
  args: {
    status: {
      value: 'in-progress',
      label: 'Under arbeid',
    },
  },
};

export const Completed: Story = {
  args: {
    status: {
      value: 'completed',
      label: 'Avsluttet',
    },
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};
