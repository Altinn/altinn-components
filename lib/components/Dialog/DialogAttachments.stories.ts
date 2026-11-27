import type { Meta, StoryObj } from '@storybook/react-vite';
import { attachments } from '../../../examples/attachments.tsx';
import { DialogAttachments } from './DialogAttachments.tsx';

const meta = {
  title: 'Inbox/Dialog/DialogAttachments',
  component: DialogAttachments,
  tags: ['autodocs'],
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

/** The title counts only the attachments the user can see. */
export const WithHiddenItems: Story = {
  args: {
    title: `${attachments.length} vedlegg`,
    hiddenItemsLabel: '+ 3 vedlegg du ikke har tilgang til å se.',
    hiddenItemsTooltip: 'Avsender har skjult disse fordi du ikke har tilgang.',
  },
};
