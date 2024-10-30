import type { Meta, StoryObj } from '@storybook/react';
import { LayoutContent } from './LayoutContent';

const meta = {
  title: 'Layout/LayoutContent',
  component: LayoutContent,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof LayoutContent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
