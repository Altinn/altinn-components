import type { Meta, StoryObj } from '@storybook/react-vite';
import { skatt } from '../../../examples/avatar';
import { DialogByline } from './DialogByline';

const meta = {
  title: 'Inbox/Dialog/DialogByline',
  component: DialogByline,
  tags: ['autodocsi', 'beta'],
  args: {
    sender: skatt,
    recipient: {
      type: 'person',
      name: 'Per Person',
    },
  },
} satisfies Meta<typeof DialogByline>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Grouped: Story = {
  args: {
    grouped: true,
  },
};

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
