import type { Meta, StoryObj } from '@storybook/react';
import { attachments } from '../../examples/attachments.ts';
import { AttachmentSection } from './AttachmentSection';

const meta = {
  title: 'Attachment/AttachmentSection',
  component: AttachmentSection,
  tags: ['autodocs'],
  args: {
    title: '6 vedlegg',
    items: attachments,
  },
} satisfies Meta<typeof AttachmentSection>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
