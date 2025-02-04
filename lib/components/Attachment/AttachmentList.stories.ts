import type { Meta, StoryObj } from '@storybook/react';
import { attachments } from '../../../examples/attachments.ts';
import { AttachmentList } from './AttachmentList';

const meta = {
  title: 'Typography/AttachmentList',
  component: AttachmentList,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    items: attachments,
  },
} satisfies Meta<typeof AttachmentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
