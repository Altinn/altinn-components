'use client';
import { type MouseEventHandler, useState } from 'react';
import { Menu, type MenuItemGroups, type MenuItemProps } from '../Menu';
import { AccountButton } from './AccountButton';
import { AccountMenu, type AccountMenuProps } from './AccountMenu';
import { BackButton } from './BackButton';
import { GlobalMenuBase, GlobalMenuFooter, GlobalMenuHeader } from './GlobalMenuBase';
import { LogoutButton } from './LogoutButton';

export interface CurrentAccount {
  type: 'person' | 'company';
  name: string;
  description?: string;
}

export interface GlobalMenuProps extends AccountMenuProps {
  currentEndUser?: CurrentAccount;
  expanded: boolean;
  onToggle: MouseEventHandler;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  menuLabel?: string;
  backLabel?: string;
  changeLabel?: string;
  logoutLabel?: string;
  className?: string;
}

export const GlobalMenu = ({
  currentEndUser,
  accounts = [],
  accountGroups = {},
  accountSearch,
  items = [],
  groups,
  changeLabel = 'Change',
  logoutLabel = 'Logout',
  backLabel = 'Back',
}: GlobalMenuProps) => {
  const [selectAccount, setSelectAccount] = useState<boolean>(false);

  const onToggleAccounts = () => {
    setSelectAccount((prevState) => !prevState);
  };

  if (selectAccount) {
    return (
      <GlobalMenuBase>
        <BackButton onClick={onToggleAccounts} label={backLabel} />
        <AccountMenu accounts={accounts} accountGroups={accountGroups} accountSearch={accountSearch} />
      </GlobalMenuBase>
    );
  }

  if (currentEndUser) {
    return (
      <GlobalMenuBase>
        <GlobalMenuHeader>
          <AccountButton account={currentEndUser} linkText={changeLabel} onClick={onToggleAccounts} />
        </GlobalMenuHeader>
        <Menu groups={groups} items={items} />
        <GlobalMenuFooter>
          <LogoutButton label={logoutLabel} />
        </GlobalMenuFooter>
      </GlobalMenuBase>
    );
  }

  return (
    <GlobalMenuBase>
      <Menu groups={groups} items={items} />
    </GlobalMenuBase>
  );
};
