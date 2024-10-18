import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxIcon } from './CheckboxIcon';
import { fn } from '@storybook/test';

const meta = {
  title: 'Checkbox/CheckboxIcon',
  component: CheckboxIcon,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof CheckboxIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
