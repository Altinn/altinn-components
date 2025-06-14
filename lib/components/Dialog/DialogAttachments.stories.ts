import type { Meta, StoryObj } from '@storybook/react-vite';
import { attachments } from '../../../examples/attachments.ts';
import { DialogAttachments } from './DialogAttachments.tsx';

const meta = {
  title: 'Inbox/Dialog/DialogAttachments',
  component: DialogAttachments,
  tags: ['autodocs', 'beta'],
  args: {
    title: '6 vedlegg',
    items: attachments,
  },
} satisfies Meta<typeof DialogAttachments>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
