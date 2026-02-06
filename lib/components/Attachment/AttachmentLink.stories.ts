import type { Meta, StoryObj } from '@storybook/react-vite';
import { attachments } from '../../../examples/attachments.tsx';
import { AttachmentLink } from './AttachmentLink';

const meta = {
  title: 'Typography/AttachmentLink',
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
