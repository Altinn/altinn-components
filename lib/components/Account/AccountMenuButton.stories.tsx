import type { Meta, StoryObj } from '@storybook/react-vite';
import type { Account } from '..';
import { defaultAccounts } from '../../../examples';
import { AccountMenuButton } from './AccountMenuButton';

const meta = {
  title: 'Account/AccountMenuButton',
  component: AccountMenuButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    currentAccount: defaultAccounts[0] as Account,
    minimized: false,
  },
  argTypes: {
    minimized: { control: 'boolean' },
  },
} satisfies Meta<typeof AccountMenuButton>;

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
      description: 'Født: 01.01.1990',
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
      description: 'Org.nr: 987654321',
      type: 'company',
      icon: {
        type: 'company',
        name: 'Diaspora Bergensis',
      },
    },
  },
};

export const Expanded: Story = {
  args: {
    expanded: true,
  },
};

export const MinimizedForMobile: Story = {
  args: {
    currentAccount: {
      id: '1',
      name: 'Diaspora Bergensis',
      description: 'Org.nr: 987654321',
      type: 'company',
      icon: {
        type: 'company',
        name: 'Diaspora Bergensis',
      },
    },
    minimized: true,
  },
};
