import type { Meta, StoryObj } from '@storybook/react';

import { ActionHeader } from './ActionHeader';

const meta = {
  title: 'LayoutAction/ActionHeader',
  component: ActionHeader,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {},
} satisfies Meta<typeof ActionHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
  },
};
