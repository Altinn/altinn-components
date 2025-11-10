'use client';
import { useEffect, useMemo, useState } from 'react';
import type { LocaleSwitcherProps } from '../Header';
import { Menu, MenuListItem, type MenuProps } from '../Menu';
import { BackButton } from './BackButton';
import { GlobalMenuBase, GlobalMenuFooter, GlobalMenuHeader } from './GlobalMenuBase';
import { LocaleButton } from './LocaleButton';
import { LocaleSwitcher } from './LocaleSwitcher';
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
  localeSwitcher?: LocaleSwitcherProps;
  isOpen?: boolean;
}

export const GlobalMenu = ({
  menu,
  backLabel = 'Back',
  onClose,
  logoutButton,
  ariaLabel = 'Menu',
  localeSwitcher,
  isOpen = false,
}: GlobalMenuProps) => {
  const [selectingLocale, setSelectingLocale] = useState<boolean>(false);

  const onToggleLocaleSelection = () => {
    setSelectingLocale((prevState) => !prevState);
  };

  // Reset locale selection whenever the menu closes
  useEffect(() => {
    if (!isOpen) {
      setSelectingLocale(false);
    }
  }, [isOpen]);

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

  if (selectingLocale) {
    return (
      <GlobalMenuBase aria-label={ariaLabel}>
        <GlobalMenuHeader>
          <BackButton onClick={onToggleLocaleSelection} label={backLabel} />
          {localeSwitcher && <LocaleSwitcher {...localeSwitcher} />}
        </GlobalMenuHeader>
        <MenuListItem as="div" role="separator" />
      </GlobalMenuBase>
    );
  }

  return (
    <GlobalMenuBase aria-label={ariaLabel}>
      {menu && <Menu {...menu} items={itemsWithToggle} />}
      {localeSwitcher && <LocaleButton onClick={onToggleLocaleSelection} />}
      {logoutButton && (
        <GlobalMenuFooter>
          <LogoutButton {...logoutButton} />
        </GlobalMenuFooter>
      )}
    </GlobalMenuBase>
  );
};
