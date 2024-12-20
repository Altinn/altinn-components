import type { Meta, StoryObj } from '@storybook/react';
import { skatt } from '../../../examples/avatar';
import { DialogByline } from './DialogByline';

const meta = {
  title: 'Dialog/DialogByline',
  component: DialogByline,
  tags: ['autodocs'],
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

export const Large: Story = {
  args: {
    size: 'lg',
  },
};
