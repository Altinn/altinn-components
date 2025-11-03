import { InformationSquareIcon, LeaveIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { Account } from '..';
import { type GlobalMenuProps_old, GlobalMenu_old, type MenuProps } from '..';
import { globalMenu, loginMenu, mobileMenu, useAccountMenu } from '../../../examples';

const meta = {
  title: 'Layout/GlobalMenu_old',
  component: GlobalMenu_old,
  tags: ['autodocs'],
  parameters: {},
  args: {
    ...globalMenu,
  },
} satisfies Meta<typeof GlobalMenu_old>;

export default meta;
type Story = StoryObj<typeof meta>;

export const CurrentAccount = (args: GlobalMenuProps_old) => {
  const accountMenu = useAccountMenu({ accountId: 'diaspora' });
  const accounts = accountMenu?.items!;
  const [currentAccount, setCurrentAccount] = useState<Account>(accountMenu.currentAccount as Account);

  const onSelectAccount = (id: string) => {
    const account = accounts?.find((item) => item.id === id);
    if (account) {
      setCurrentAccount(account as Account);
    }
  };

  return <GlobalMenu_old {...args} currentAccount={{ ...currentAccount }} onSelectAccount={onSelectAccount} />;
};

export const CompanyAccount = (args: GlobalMenuProps_old) => {
  const accountMenu = useAccountMenu({ accountId: 'diaspora' });
  const accounts = accountMenu?.items!;
  const [currentAccount, setCurrentAccount] = useState<Account>(accountMenu.currentAccount as Account);

  const onSelectAccount = (id: string) => {
    const account = accounts?.find((item) => item.id === id);
    if (account) {
      setCurrentAccount(account as Account);
    }
  };

  return <GlobalMenu_old {...args} currentAccount={currentAccount} onSelectAccount={onSelectAccount} />;
};

export const MobileMenu = (args: GlobalMenuProps_old) => {
  const accountMenu = useAccountMenu({ accountId: 'diaspora' });
  const accounts = accountMenu?.items!;
  const [currentAccount, setCurrentAccount] = useState<Account>(accountMenu.currentAccount as Account);

  const onSelectAccount = (id: string) => {
    const account = accounts?.find((item) => item.id === id);
    if (account) {
      setCurrentAccount(account as Account);
    }
  };

  return (
    <GlobalMenu_old {...args} menu={mobileMenu} currentAccount={currentAccount} onSelectAccount={onSelectAccount} />
  );
};

export const SingleAccount = (args: GlobalMenuProps_old) => {
  const accountMenu = useAccountMenu({ accountId: 'user' });
  const currentAccount = accountMenu?.currentAccount as Account;

  return (
    <GlobalMenu_old
      {...args}
      ariaLabel="Menu Single Account"
      accountMenu={{ ...accountMenu, items: [currentAccount] }}
      currentAccount={{ ...currentAccount }}
    />
  );
};

export const Login: Story = {
  args: {
    menu: loginMenu,
    logoutButton: undefined,
  },
};

export const InterimMenu = (args: GlobalMenuProps_old) => {
  const accountMenu = useAccountMenu({ accountId: 'user' });
  const accounts = accountMenu?.items!;
  const [currentAccount, setCurrentAccount] = useState<Account>(accountMenu.currentAccount as Account);

  const onSelectAccount = (id: string) => {
    const account = accounts?.find((item) => item.id === id);
    if (account) {
      setCurrentAccount(account as Account);
    }
  };

  const inboxMenuItem = args?.menu?.items?.find((item) => item.id === 'inbox');

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
    <GlobalMenu_old
      {...args}
      menu={
        {
          ...args?.menu,
          items: items,
        } as MenuProps
      }
      currentAccount={currentAccount}
      onSelectAccount={onSelectAccount}
    />
  );
};
