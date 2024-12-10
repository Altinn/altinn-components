import type { Meta, StoryObj } from '@storybook/react';

import { MenuSearch } from './MenuSearch';

const meta = {
  title: 'Menu/MenuSearch',
  component: MenuSearch,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'search',
  },
} satisfies Meta<typeof MenuSearch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
