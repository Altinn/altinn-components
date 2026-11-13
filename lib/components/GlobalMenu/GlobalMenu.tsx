'use client';

import { GlobeIcon } from '@navikt/aksel-icons';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Menu, type MenuItemProps, MenuListItem, type MenuProps } from '../Menu';
import { useRootContext } from '../RootProvider';
import { getCommonTexts } from '../RootProvider/commonTexts.ts';
import { GlobalMenuBase, GlobalMenuFooter } from './GlobalMenuBase';
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
  backLabel: backLabelProp,
  onClose,
  logoutButton,
  ariaLabel: ariaLabelProp,
  localeSwitcher,
  isOpen = false,
}: GlobalMenuProps) => {
  const texts = getCommonTexts(useRootContext().languageCode);
  const backLabel = backLabelProp ?? texts.back;
  const ariaLabel = ariaLabelProp ?? texts.menu;
  const [selectingLocale, setSelectingLocale] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  const onToggleLocaleSelection = useCallback(() => {
    setSelectingLocale((prev) => !prev);
  }, []);

  // Reset locale selection and scroll position whenever the menu toggles open/closed
  useEffect(() => {
    if (!isOpen) setSelectingLocale(false);
    let el: HTMLElement | null = navRef.current;
    while (el) {
      if (el.scrollTop > 0) el.scrollTop = 0;
      el = el.parentElement;
    }
  }, [isOpen]);

  /** Move focus when the menu and the language list replace each other. */
  const prevSelectingLocaleRef = useRef(selectingLocale);
  useEffect(() => {
    if (prevSelectingLocaleRef.current === selectingLocale) return;
    prevSelectingLocaleRef.current = selectingLocale;
    if (!isOpen) return;

    const raf = requestAnimationFrame(() => {
      const items = navRef.current?.querySelectorAll<HTMLElement>('[data-id]');
      if (!items?.length) return;
      (selectingLocale ? items[0] : items[items.length - 1]).focus({ preventScroll: true });
    });
    return () => cancelAnimationFrame(raf);
  }, [selectingLocale, isOpen]);

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
      <GlobalMenuBase ref={navRef} aria-label={ariaLabel}>
        {localeSwitcher && (
          <LocaleSwitcher {...localeSwitcher} backLabel={backLabel} onToggle={onToggleLocaleSelection} />
        )}
        <MenuListItem as="div" role="separator" />
      </GlobalMenuBase>
    );
  }

  return (
    <GlobalMenuBase ref={navRef} aria-label={ariaLabel}>
      {menu && <Menu {...menu} items={itemsWithToggle} a11yMode="navigation" />}
      {logoutButton && (
        <GlobalMenuFooter>
          <LogoutButton {...logoutButton} />
        </GlobalMenuFooter>
      )}
    </GlobalMenuBase>
  );
};
