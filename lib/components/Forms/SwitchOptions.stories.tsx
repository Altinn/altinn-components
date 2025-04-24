import type { Meta, StoryObj } from '@storybook/react';
import { SwitchOptions } from './SwitchOptions';

const meta = {
  title: 'Forms/SwitchOptions',
  component: SwitchOptions,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'Switch',
    options: [
      {
        value: '1',
        label: 'Switch 1',
      },
      {
        value: '2',
        label: 'Switch 2',
      },
    ],
  },
} satisfies Meta<typeof SwitchOptions>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Inline: Story = {
  args: {
    inline: true,
  },
};
