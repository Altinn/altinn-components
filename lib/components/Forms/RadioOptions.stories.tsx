import type { Meta, StoryObj } from '@storybook/react-vite';
import { RadioOptions } from './RadioOptions';

const meta = {
  title: 'Forms/RadioOptions',
  component: RadioOptions,
  tags: ['autodocs'],
  parameters: {},
  args: {
    name: 'radio',
    options: [
      {
        value: '1',
        label: 'Option 1',
      },
      {
        value: '2',
        label: 'Option 2',
      },
    ],
  },
} satisfies Meta<typeof RadioOptions>;

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
