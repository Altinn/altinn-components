import type { Meta, StoryObj } from '@storybook/react';
import { attachments } from '../../examples/attachments.ts';
import { AttachmentLink } from './AttachmentLink';

const meta = {
  title: 'Attachment/AttachmentLink',
  component: AttachmentLink,
  tags: ['autodocs'],
  parameters: {},
  args: attachments[0],
} satisfies Meta<typeof AttachmentLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
