import type { Meta, StoryObj } from '@storybook/react';
import { type Account, GlobalMenuButton } from '../';
import { defaultAccounts } from '../../../examples';

const meta = {
  title: 'Layout/GlobalMenuButton',
  component: GlobalMenuButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    currentAccount: defaultAccounts[0] as Account,
  },
} satisfies Meta<typeof GlobalMenuButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    currentAccount: undefined,
  },
};

export const Person: Story = {
  args: {
    currentAccount: defaultAccounts[0] as Account,
  },
};

export const Company: Story = {
  args: {
    currentAccount: defaultAccounts[1] as Account,
    badge: {
      color: 'alert',
      label: '2',
    },
  },
};

export const Expanded: Story = {
  args: {
    expanded: true,
  },
};
