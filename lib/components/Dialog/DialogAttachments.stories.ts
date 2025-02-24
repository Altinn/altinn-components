import type { Meta, StoryObj } from '@storybook/react';
import { attachments } from '../../../examples/attachments.ts';
import { DialogAttachments } from './DialogAttachments';

const meta = {
  title: 'Dialog/Atoms/DialogAttachments',
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
