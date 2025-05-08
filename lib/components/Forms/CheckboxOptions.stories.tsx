import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxOptions } from './CheckboxOptions';

const meta = {
  title: 'Forms/CheckboxOptions',
  component: CheckboxOptions,
  tags: ['autodocs'],
  parameters: {},
  args: {
    options: [
      {
        name: 'checkbox-1',
        value: '1',
        label: 'Option 1',
      },
      {
        name: 'checkbox-2',
        value: '2',
        label: 'Option 2',
      },
    ],
  },
} satisfies Meta<typeof CheckboxOptions>;

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
