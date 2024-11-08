import type { Meta, StoryObj } from '@storybook/react';
import { DialogTitle } from './DialogTitle';

const meta = {
  title: 'Dialog/DialogTitle',
  component: DialogTitle,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: 'Title',
  },
} satisfies Meta<typeof DialogTitle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Seen: Story = {
  args: {
    variant: 'seen',
  },
};

export const Trash: Story = {
  args: {
    variant: 'trash',
  },
};
