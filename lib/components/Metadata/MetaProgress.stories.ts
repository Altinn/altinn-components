import type { Meta, StoryObj } from '@storybook/react';
import { MetaProgress } from './MetaProgress';

const meta = {
  title: 'Metadata/MetaProgress',
  component: MetaProgress,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {},
} satisfies Meta<typeof MetaProgress>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InProgress: Story = {
  args: {
    progress: 75,
    children: 'Under arbeid',
  },
};

export const ProgressComplete: Story = {
  args: {
    progress: 100,
    children: 'Avsluttet',
  },
};
