import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { MenuItemLabel } from './MenuItemLabel';

const meta = {
  title: 'Menu/MenuItemLabel',
  component: MenuItemLabel,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof MenuItemLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Icon: Story = {
  args: {
    title: 'Innboks',
  },
};

export const TitleDescription: Story = {
  args: {
    title: 'Ola Nordmann',
    description: 'Født: XX.XX.XXXX',
  },
};
