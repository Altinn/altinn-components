'use client';

import { GlobeIcon } from '@navikt/aksel-icons';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { Menu, type MenuItemProps, MenuListItem, type MenuProps } from '../Menu';
import { GlobalMenuBase, GlobalMenuFooter, GlobalMenuHeader } from './GlobalMenuBase';
import { LocaleSwitcher, type LocaleSwitcherProps } from './LocaleSwitcher.tsx';
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
  const [selectingLocale, setSelectingLocale] = useState(false);

  const onToggleLocaleSelection = useCallback(() => {
    setSelectingLocale((prev) => !prev);
  }, []);

  // Reset locale selection whenever the menu closes
  useEffect(() => {
    if (!isOpen) setSelectingLocale(false);
  }, [isOpen]);

  const itemsWithToggle = useMemo(() => {
    const baseItems = (menu?.items ?? []).map((item) => ({
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

    if (!localeSwitcher) return baseItems;

    const localeItem: MenuItemProps = {
      title: 'Språk/language',
      icon: GlobeIcon,
      size: 'sm',
      onClick: onToggleLocaleSelection,
      linkIcon: true,
    };

    return [...baseItems, localeItem];
  }, [menu, onClose, localeSwitcher, onToggleLocaleSelection]);

  if (selectingLocale) {
    return (
      <GlobalMenuBase aria-label={ariaLabel}>
        <GlobalMenuHeader>
          {localeSwitcher && (
            <LocaleSwitcher {...localeSwitcher} backLabel={backLabel} onToggle={onToggleLocaleSelection} />
          )}
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
