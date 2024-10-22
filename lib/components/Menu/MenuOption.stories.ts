import type { Meta, StoryObj } from '@storybook/react';

import { MenuOption } from './MenuOption';

const meta = {
  title: 'Menu/MenuOption',
  component: MenuOption,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof MenuOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    icon: 'inbox',
    title: 'Innboks',
  },
};

export const Account: Story = {
  args: {
    size: 'lg',
    avatar: {
      type: 'person',
      name: 'Eirik Horneland',
    },
    title: 'Eirik Horneland',
    description: 'Født: XX.XX.XXXX',
  },
};

export const Section: Story = {
  args: {
    size: 'lg',
    icon: 'inbox',
    title: 'Innboks',
  },
};
