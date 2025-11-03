import type { Meta, StoryObj } from '@storybook/react-vite';
import { type Account, GlobalMenuButton_old } from '..';
import { defaultAccounts } from '../../../examples';

const meta = {
  title: 'Layout/GlobalMenuButton_old',
  component: GlobalMenuButton_old,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    currentAccount: defaultAccounts[0] as Account,
  },
} satisfies Meta<typeof GlobalMenuButton_old>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Login: Story = {
  args: {
    currentAccount: undefined,
  },
};

export const Person: Story = {
  args: {
    currentAccount: {
      id: '1',
      name: 'Mathias Dyngeland',
      type: 'person',
      icon: {
        type: 'person',
        name: 'Mathias Dyngeland',
      },
    },
  },
};

export const Company: Story = {
  args: {
    currentAccount: {
      id: '1',
      name: 'Diaspora Bergensis',
      type: 'company',
      icon: {
        type: 'company',
        name: 'Diaspora Bergensis',
      },
    },
    badge: {
      variant: 'base',
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
