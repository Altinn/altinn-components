'use client';
import { useMemo, useState } from 'react';
import { type Account, AccountMenu, type AccountMenuProps, CurrentAccount } from '../';
import { Menu, type MenuItemGroups, type MenuItemProps, MenuListItem } from '../Menu';
import { BackButton } from './BackButton';
import { EndUserLabel } from './EndUserLabel';
import { GlobalMenuBase, GlobalMenuFooter, GlobalMenuHeader } from './GlobalMenuBase';
import { LogoutButton, type LogoutButtonProps } from './LogoutButton';

export interface GlobalMenuProps {
  accountMenu?: AccountMenuProps;
  items: MenuItemProps[];
  groups?: MenuItemGroups;
  menuLabel?: string;
  backLabel?: string;
  logoutButton?: LogoutButtonProps;
  changeLabel?: string;
  className?: string;
  currentAccount?: Account;
  currentEndUserLabel?: string;
  onSelectAccount?: (id: string) => void;
  onClose?: () => void;
  ariaLabel?: string;
}

export const GlobalMenu = ({
  accountMenu,
  items = [],
  groups,
  backLabel = 'Back',
  currentAccount,
  currentEndUserLabel = 'Signed in',
  onSelectAccount,
  onClose,
  logoutButton,
  ariaLabel = 'Menu',
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
    return items.map((item) => ({
      ...item,
      onClick: () => {
        item.onClick?.();
        onClose?.();
      },
      items: Array.isArray(item.items)
        ? item.items.map((subItem) => ({
            ...subItem,
            onClick: () => {
              subItem.onClick?.();
              onClose?.();
            },
          }))
        : undefined,
    }));
  }, [items, onClose]);

  if (selectingAccount) {
    return (
      <GlobalMenuBase aria-label={ariaLabel}>
        <GlobalMenuHeader>
          <BackButton onClick={onToggleAccounts} label={backLabel} />
        </GlobalMenuHeader>
        <MenuListItem as="div" role="separator" />
        {accountMenu && (
          <AccountMenu {...accountMenu} currentAccount={currentAccount} onSelectAccount={handleSelectAccount} />
        )}
      </GlobalMenuBase>
    );
  }

  if (currentAccount) {
    const multipleAccounts = accountMenu && accountMenu?.items?.length > 1;

    return (
      <GlobalMenuBase aria-label={ariaLabel} color={currentAccount?.type}>
        <CurrentAccount
          account={currentAccount}
          multipleAccounts={multipleAccounts}
          as={multipleAccounts ? 'button' : 'div'}
          onClick={multipleAccounts ? onToggleAccounts : undefined}
        />
        <MenuListItem as="div" role="separator" />
        <Menu groups={groups} items={itemsWithToggle} theme="default" />
        {logoutButton && (
          <>
            <MenuListItem as="div" role="separator" />
            <GlobalMenuFooter>
              {currentEndUserLabel && <EndUserLabel>{currentEndUserLabel}</EndUserLabel>}
              <LogoutButton {...logoutButton} />
            </GlobalMenuFooter>
          </>
        )}
      </GlobalMenuBase>
    );
  }

  return (
    <GlobalMenuBase aria-label={ariaLabel}>
      <Menu groups={groups} items={itemsWithToggle} />
      {logoutButton && (
        <>
          <MenuListItem as="div" role="separator" />
          <GlobalMenuFooter>
            {currentEndUserLabel && <EndUserLabel>{currentEndUserLabel}</EndUserLabel>}
            <LogoutButton {...logoutButton} />
          </GlobalMenuFooter>
        </>
      )}
    </GlobalMenuBase>
  );
};
