import type { Meta, StoryObj } from '@storybook/react';
import { localeSwitcher } from '../../../examples';
import { LocaleSwitcher } from './LocaleSwitcher';

const meta = {
  title: 'Layout/LocaleSwitcher',
  component: LocaleSwitcher,
  tags: ['autodocs', 'beta'],
  parameters: {},
  args: {
    ...localeSwitcher,
  },
} satisfies Meta<typeof LocaleSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
