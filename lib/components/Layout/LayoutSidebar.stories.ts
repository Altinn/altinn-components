import type { Meta, StoryObj } from '@storybook/react';
import { LayoutSidebar } from './LayoutSidebar';

const meta = {
  title: 'Layout/LayoutSidebar',
  component: LayoutSidebar,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof LayoutSidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
