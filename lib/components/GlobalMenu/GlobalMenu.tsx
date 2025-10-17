'use client';
import { useMemo, useState } from 'react';
import { Menu, MenuListItem, type MenuProps } from '../Menu';
import { BackButton } from './BackButton';
import { GlobalMenuBase, GlobalMenuFooter, GlobalMenuHeader } from './GlobalMenuBase';
import { LogoutButton, type LogoutButtonProps } from './LogoutButton';

export interface GlobalMenuProps {
  menu?: MenuProps;
  menuLabel?: string;
  backLabel?: string;
  logoutButton?: LogoutButtonProps;
  changeLabel?: string;
  className?: string;
  currentEndUserLabel?: string;
  onClose?: () => void;
  ariaLabel?: string;
}

export const GlobalMenu = ({
  menu,
  backLabel = 'Back',
  onClose,
  logoutButton,
  ariaLabel = 'Menu',
}: GlobalMenuProps) => {
  const [selectingAccount, setSelectingAccount] = useState<boolean>(false);

  const onToggleAccounts = () => {
    setSelectingAccount((prevState) => !prevState);
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
