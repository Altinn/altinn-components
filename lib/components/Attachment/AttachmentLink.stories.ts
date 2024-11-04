import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { AttachmentLink } from './AttachmentLink';

const meta = {
  title: 'Attachment/AttachmentLink',
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
