import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from './Heading';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {},
  args: {
    children: 'Heading',
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
