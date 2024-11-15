import type { Meta, StoryObj } from '@storybook/react';
import { AttachmentLink } from './AttachmentLink';

const meta = {
  title: 'Atoms/Attachment/AttachmentLink',
  component: AttachmentLink,
  tags: ['autodocs'],
  parameters: {},
  args: {
    label: 'Document.pdf',
  },
} satisfies Meta<typeof AttachmentLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
