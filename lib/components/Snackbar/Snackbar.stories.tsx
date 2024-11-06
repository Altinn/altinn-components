import type { Meta, StoryObj } from '@storybook/react';
import { Snackbar } from './Snackbar';

const meta = {
  title: 'Snackbar/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
  parameters: {},
  args: {
    id: 'id',
    icon: 'bell',
    message: 'Message',
  },
} satisfies Meta<typeof Snackbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
