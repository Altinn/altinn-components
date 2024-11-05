import type { Meta, StoryObj } from '@storybook/react';
import { DialogHeadings } from './DialogHeadings';

const meta = {
  title: 'Dialog/DialogHeadings',
  component: DialogHeadings,
  tags: ['autodocs'],
  parameters: {},
  args: {
    sender: {
      name: 'Sender',
    },
    recipient: {
      type: 'person',
      name: 'Recipient',
    },
  },
} satisfies Meta<typeof DialogHeadings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Company: Story = {
  args: {
    grouped: true,
  },
};

export const Grouped: Story = {
  args: {
    grouped: true,
  },
};
