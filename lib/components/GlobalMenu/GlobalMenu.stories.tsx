import { InformationSquareIcon, LeaveIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { Account } from '..';
import { globalMenu, loginMenu } from '../../../examples';
import { GlobalMenu, type GlobalMenuProps } from './GlobalMenu';

const meta = {
  title: 'Layout/GlobalMenu',
  component: GlobalMenu,
  tags: ['autodocs'],
  parameters: {},
  args: {
    ...globalMenu,
  },
} satisfies Meta<typeof GlobalMenu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentAccount = (args: GlobalMenuProps) => {
  const accounts = args?.accountMenu?.items!;
  const [currentAccount, setCurrentAccount] = useState<Account>(accounts[0] as Account);

  const onSelectAccount = (id: string) => {
    const account = accounts?.find((item) => item.id === id);
    if (account) {
      setCurrentAccount(account as Account);
    }
  };

  return <GlobalMenu {...args} currentAccount={{ ...currentAccount }} onSelectAccount={onSelectAccount} />;
};

export const CompanyAccount = (args: GlobalMenuProps) => {
  const accounts = args?.accountMenu?.items!;
  const [currentAccount, setCurrentAccount] = useState<Account>(accounts[1] as Account);

  const onSelectAccount = (id: string) => {
    const account = accounts?.find((item) => item.id === id);
    if (account) {
      setCurrentAccount(account as Account);
    }
  };

  return <GlobalMenu {...args} currentAccount={currentAccount} onSelectAccount={onSelectAccount} />;
};

export const SingleAccount = (args: GlobalMenuProps) => {
  const accountMenu = args?.accountMenu!;
  const currentAccount = accountMenu?.items[0] as Account;

  return (
    <GlobalMenu
      {...args}
      ariaLabel="Menu Single Account"
      accountMenu={{ ...accountMenu, items: [currentAccount] }}
      currentAccount={{ ...currentAccount }}
    />
  );
};

export const Login: Story = {
  args: {
    ...loginMenu,
    logoutButton: undefined,
  },
};

export const InterimMenu = (args: GlobalMenuProps) => {
  const accounts = args?.accountMenu?.items!;
  const [currentAccount, setCurrentAccount] = useState<Account>(accounts[1] as Account);

  const onSelectAccount = (id: string) => {
    const account = accounts?.find((item) => item.id === id);
    if (account) {
      setCurrentAccount(account as Account);
    }
  };

  const inboxMenuItem = args?.items?.find((item) => item.id === 'inbox');

  const items = [
    {
      ...inboxMenuItem,
      title: 'Innboks',
      badge: {
        label: 'Beta',
      },
    },
    {
      id: 'm2',
      icon: InformationSquareIcon,
      title: 'Om Innboks Beta',
    },
    {
      id: 'm2',
      icon: LeaveIcon,
      title: 'Avslutt beta',
    },
  ];

  return (
    <GlobalMenu
      {...args}
      items={items as GlobalMenuProps['items']}
      currentAccount={currentAccount}
      onSelectAccount={onSelectAccount}
    />
  );
};
