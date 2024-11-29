import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MenuSearch } from './MenuSearch';

const meta = {
  title: 'Menu/MenuSearch',
  component: MenuSearch,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof MenuSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onClear: fn(),
  },
};
