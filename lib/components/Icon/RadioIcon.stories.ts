import type { Meta, StoryObj } from '@storybook/react';
import { RadioIcon } from './RadioIcon';

const meta = {
  title: 'Atoms/Icon/RadioIcon',
  component: RadioIcon,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof RadioIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
  },
};

export const Hover: Story = {
  args: {
    checked: false,
    hover: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};
