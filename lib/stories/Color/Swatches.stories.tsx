import type { Meta, StoryObj } from '@storybook/react';
import { Swatches } from './Swatches';

const meta = {
  title: 'Demo/Color/Swatches',
  component: Swatches,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
} satisfies Meta<typeof Swatches>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
