import type { Meta, StoryObj } from '@storybook/react';
import { DialogHeader } from './DialogHeader';

const meta = {
  title: 'Dialog/Sections/DialogHeader',
  component: DialogHeader,
  tags: ['autodocs'],
  args: {
    title: 'Title',
    variant: 'neutral',
    sender: {
      name: 'Sender',
      type: 'company',
    },
    recipient: {
      name: 'Recipient',
      type: 'person',
    },
  },
} satisfies Meta<typeof DialogHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
