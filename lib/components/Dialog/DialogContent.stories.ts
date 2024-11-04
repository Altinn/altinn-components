import type { Meta, StoryObj } from '@storybook/react';
import { DialogContent } from './DialogContent';

const meta = {
  title: 'Dialog/DialogContent',
  component: DialogContent,
  tags: ['autodocs'],
  args: {
    updatedAt: '1999-05-26 22:59:00',
    summary: 'Summary',
    body: 'Body',
  },
} satisfies Meta<typeof DialogContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const UpdatedByName: Story = {
  args: {
    updatedByName: 'Ole Gunnar Solskjær',
  },
};
