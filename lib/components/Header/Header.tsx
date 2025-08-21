'use client';
import type { BadgeProps } from '../Badge';
import { DrawerBase, DropdownBase } from '../Dropdown';
import { GlobalMenu, GlobalMenuButton, type GlobalMenuProps } from '../GlobalMenu';
import type { Account } from '../GlobalMenu';
import { useRootContext } from '../RootProvider';
import { Searchbar, type SearchbarProps } from '../Searchbar';
import { LocaleSwitcher, type LocaleSwitcherProps } from './';
import { HeaderBase } from './HeaderBase';
import { HeaderGroup } from './HeaderGroup';
import { HeaderLogo, type HeaderLogoProps } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import styles from './header.module.css';

export interface HeaderProps {
  menu: GlobalMenuProps;
  locale?: LocaleSwitcherProps;
  search?: SearchbarProps;
  currentAccount?: Account;
  badge?: BadgeProps | undefined;
  logo?: HeaderLogoProps;
}

export const Header = ({ menu, locale, search, currentAccount, logo = {}, badge }: HeaderProps) => {
  const { currentId, toggleId, openId, closeAll } = useRootContext();

  const onSearchFocus = () => {
    openId('search');
  };

  const onSearchClose = () => {
    toggleId('search');
  };

  const onToggleMenu = () => {
    toggleId('menu');
  };

  const isDesktop = useIsDesktop();

  return (
    <HeaderBase
      currentId={currentId}
      open={currentId === 'search' || currentId === 'menu' || currentId === 'locale'}
      onClose={closeAll}
    >
      <HeaderLogo {...logo} className={styles.logo} />
      {search && isDesktop && (
        <HeaderSearch expanded={currentId === 'search'}>
          <Searchbar {...search} expanded={currentId === 'search'} onClose={onSearchClose} onFocus={onSearchFocus} />
        </HeaderSearch>
      )}
      <HeaderGroup>
        {locale && <LocaleSwitcher {...locale} />}
        <div className={styles.relative}>
          <GlobalMenuButton
            badge={badge}
            currentAccount={currentAccount}
            onClick={onToggleMenu}
            expanded={currentId === 'menu'}
            label={menu?.menuLabel}
          />
          {menu && (
            <DropdownBase
              layout="desktop"
              padding
              placement="right"
              open={currentId === 'menu'}
              className={styles.dropdown}
            >
              <GlobalMenu {...menu} currentAccount={currentAccount} onClose={closeAll} />
            </DropdownBase>
          )}
        </div>
      </HeaderGroup>
      {search && !isDesktop && (
        <HeaderSearch expanded={currentId === 'search'}>
          <Searchbar {...search} expanded={currentId === 'search'} onClose={onSearchClose} onFocus={onSearchFocus} />
        </HeaderSearch>
      )}
      {menu && (
        <DrawerBase open={currentId === 'menu'} className={styles.drawer}>
          <GlobalMenu {...menu} currentAccount={currentAccount} onClose={closeAll} />
        </DrawerBase>
      )}
    </HeaderBase>
  );
};
