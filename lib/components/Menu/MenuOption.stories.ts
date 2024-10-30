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

export const Checkbox: Story = {
  args: {
    type: 'checkbox',
    title: 'Title',
    size: 'sm',
    checked: false,
  },
};

export const CheckboxChecked: Story = {
  args: {
    type: 'checkbox',
    title: 'Title',
    size: 'sm',
    checked: true,
  },
};

export const Radio: Story = {
  args: {
    type: 'radio',
    title: 'Title',
    size: 'sm',
    checked: false,
  },
};

export const RadioChecked: Story = {
  args: {
    type: 'radio',
    title: 'Title',
    size: 'sm',
    checked: true,
  },
};
