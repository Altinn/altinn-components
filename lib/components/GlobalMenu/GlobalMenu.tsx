'use client';
import { useMemo, useState } from 'react';
import { Menu, type MenuItemGroups, type MenuItemProps, MenuListItem } from '../Menu';
import { type Account, AccountButton } from './AccountButton';
import { AccountMenu, type AccountMenuProps } from './AccountMenu';
import { BackButton } from './BackButton';
import { GlobalMenuBase, GlobalMenuFooter, GlobalMenuHeader } from './GlobalMenuBase';
import { LogoutButton, type LogoutButtonProps } from './LogoutButton';

export interface GlobalMenuProps extends AccountMenuProps {
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  menuLabel?: string;
  backLabel?: string;
  logoutButton?: LogoutButtonProps;
  changeLabel?: string;
  className?: string;
  currentAccount?: Account;
  onSelectAccount?: (id: string) => void;
  onClose?: () => void;
}

export const GlobalMenu = ({
  accounts = [],
  accountGroups = {},
  accountSearch,
  items = [],
  groups,
  changeLabel = 'Change',
  backLabel = 'Back',
  currentAccount,
  onSelectAccount,
  onClose,
  logoutButton,
}: GlobalMenuProps) => {
  const [selectingAccount, setSelectingAccount] = useState<boolean>(false);

  const onToggleAccounts = () => {
    setSelectingAccount((prevState) => !prevState);
  };

  const handleSelectAccount = (id: string) => {
    onToggleAccounts();
    onClose?.();
    onSelectAccount?.(id);
  };

  const itemsWithToggle = useMemo(() => {
    return items.map((item) => {
      return {
        ...item,
        onClick: () => {
          item.onClick?.();
          onClose?.();
        },
      };
    });
  }, [items, onClose]);

  if (selectingAccount) {
    return (
      <GlobalMenuBase>
        <GlobalMenuHeader>
          <BackButton onClick={onToggleAccounts} label={backLabel} />
        </GlobalMenuHeader>
        <MenuListItem as="div" role="separator" />
        <AccountMenu
          currentAccount={currentAccount}
          accounts={accounts}
          accountGroups={accountGroups}
          accountSearch={accountSearch}
          onSelectAccount={handleSelectAccount}
        />
      </GlobalMenuBase>
    );
  }

  if (currentAccount) {
    return (
      <GlobalMenuBase>
        <GlobalMenuHeader>
          <AccountButton
            account={currentAccount}
            linkText={changeLabel}
            multipleAccounts={accounts.length > 1}
            onClick={onToggleAccounts}
          />
        </GlobalMenuHeader>
        <MenuListItem as="div" role="separator" />
        <Menu groups={groups} items={itemsWithToggle} theme="default" />
        {logoutButton && (
          <>
            <MenuListItem as="div" role="separator" />
            <GlobalMenuFooter>
              <LogoutButton {...logoutButton} />
            </GlobalMenuFooter>
          </>
        )}
      </GlobalMenuBase>
    );
  }

  return (
    <GlobalMenuBase>
      <Menu groups={groups} items={itemsWithToggle} />
      {logoutButton && (
        <>
          <MenuListItem as="div" role="separator" />
          <GlobalMenuFooter>
            <LogoutButton {...logoutButton} />
          </GlobalMenuFooter>
        </>
      )}
    </GlobalMenuBase>
  );
};
