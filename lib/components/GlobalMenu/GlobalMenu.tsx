'use client';
import { type MouseEventHandler, useState } from 'react';
import { Menu, type MenuItemGroups, type MenuItemProps } from '../Menu';
import { type Account, AccountButton } from './AccountButton';
import { AccountMenu, type AccountMenuProps } from './AccountMenu';
import { BackButton } from './BackButton';
import { GlobalMenuBase, GlobalMenuFooter, GlobalMenuHeader } from './GlobalMenuBase';
import { LogoutButton } from './LogoutButton';

export interface GlobalMenuProps extends AccountMenuProps {
  expanded: boolean;
  onToggle: MouseEventHandler;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  menuLabel?: string;
  backLabel?: string;
  changeLabel?: string;
  logoutLabel?: string;
  className?: string;
  currentAccount?: Account;
  changeCurrentAccount?: (id: string) => void;
}

export const GlobalMenu = ({
  accounts = [],
  accountGroups = {},
  accountSearch,
  items = [],
  groups,
  changeLabel = 'Change',
  logoutLabel = 'Logout',
  backLabel = 'Back',
  currentAccount,
  changeCurrentAccount,
}: GlobalMenuProps) => {
  const [selectingAccount, setSelectingAccount] = useState<boolean>(false);

  const onToggleAccounts = () => {
    setSelectingAccount((prevState) => !prevState);
  };

  const onSelectAccount = (id: string) => {
    onToggleAccounts();
    changeCurrentAccount?.(id);
  };

  if (selectingAccount) {
    return (
      <GlobalMenuBase>
        <BackButton onClick={onToggleAccounts} label={backLabel} />
        <AccountMenu
          currentAccount={currentAccount}
          accounts={accounts}
          accountGroups={accountGroups}
          accountSearch={accountSearch}
          onSelectAccount={onSelectAccount}
        />
      </GlobalMenuBase>
    );
  }

  if (currentAccount) {
    return (
      <GlobalMenuBase>
        <GlobalMenuHeader>
          <AccountButton account={currentAccount} linkText={changeLabel} onClick={onToggleAccounts} />
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
