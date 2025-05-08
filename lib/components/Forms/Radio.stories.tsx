import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
  title: 'Forms/Radio',
  component: Radio,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'radio',
    value: '1',
    label: 'Radio',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
