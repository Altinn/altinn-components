import type { Meta, StoryObj } from '@storybook/react';
import { accountMenu } from '../../../examples';
import { AccountMenu } from './AccountMenu';

const meta = {
  title: 'GlobalMenu/AccountMenu',
  component: AccountMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    ...accountMenu,
  },
} satisfies Meta<typeof AccountMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
