import type { Meta, StoryObj } from '@storybook/react';
import { AccountMenu } from './AccountMenu';
import { accountMenuProps } from '../../examples';

const meta = {
  title: 'GlobalMenu/AccountMenu',
  component: AccountMenu,
  tags: ['autodocs'],
  parameters: {},
  args: accountMenuProps,
} satisfies Meta<typeof AccountMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
