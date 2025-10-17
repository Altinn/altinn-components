'use client';
import { useMemo, useState } from 'react';
import { type Account, AccountMenu, type AccountMenuProps, CurrentAccount } from '..';
import { Menu, MenuListItem, type MenuProps } from '../Menu';
import { BackButton } from './BackButton';
import { GlobalMenuBase, GlobalMenuFooter, GlobalMenuHeader } from './GlobalMenuBase';
import { LogoutButton, type LogoutButtonProps } from './LogoutButton';

export interface GlobalMenuProps_old {
  accountMenu?: AccountMenuProps;
  menu?: MenuProps;
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

export const GlobalMenu_old = ({
  accountMenu,
  menu,
  backLabel = 'Back',
  currentAccount,
  onSelectAccount,
  onClose,
  logoutButton,
  ariaLabel = 'Menu',
}: GlobalMenuProps_old) => {
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
    return (menu?.items ?? []).map((item) => ({
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
  }, [menu, onClose]);

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
        {currentAccount && (
          <>
            <CurrentAccount
              account={currentAccount}
              multipleAccounts={multipleAccounts}
              as={multipleAccounts ? 'button' : 'div'}
              onClick={multipleAccounts ? onToggleAccounts : undefined}
            />
            <MenuListItem as="div" role="separator" />
          </>
        )}
        {menu && <Menu {...menu} items={itemsWithToggle} />}
        {logoutButton && (
          <GlobalMenuFooter>
            <LogoutButton {...logoutButton} />
          </GlobalMenuFooter>
        )}
      </GlobalMenuBase>
    );
  }

  return (
    <GlobalMenuBase aria-label={ariaLabel}>
      {menu && <Menu {...menu} items={itemsWithToggle} />}
      {logoutButton && (
        <GlobalMenuFooter>
          <LogoutButton {...logoutButton} />
        </GlobalMenuFooter>
      )}
    </GlobalMenuBase>
  );
};
