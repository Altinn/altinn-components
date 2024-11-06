import type { Meta, StoryObj } from '@storybook/react';
import { DialogHeader } from './DialogHeader';

const meta = {
  title: 'Dialog/Sections/DialogHeader',
  component: DialogHeader,
  tags: ['autodocs'],
  args: {
    title: 'Title',
    sender: {
      name: 'Sender',
    },
    recipient: {
      name: 'Recipient',
    },
  },
} satisfies Meta<typeof DialogHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
