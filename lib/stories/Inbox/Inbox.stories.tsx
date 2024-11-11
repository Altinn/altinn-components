import type { Meta, StoryObj } from '@storybook/react';
import { Inbox } from './Inbox';

const meta = {
  title: 'Demo/Inbox/Inbox',
  component: Inbox,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    dialogs: [],
  },
} satisfies Meta<typeof Inbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const BulkMode: Story = {
  args: {
  },
};

export const DialogOpen: Story = {
  args: {
    dialogId: 'd1',
  },
};
