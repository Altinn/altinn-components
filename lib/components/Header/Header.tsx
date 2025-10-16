'use client';
import { HeaderBase, HeaderGroup, HeaderLogo, type HeaderLogoProps, HeaderSearch, type MenuProps } from '../';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import type { BadgeProps } from '../Badge';
import { DrawerBase, DropdownBase } from '../Dropdown';
import { GlobalMenu, GlobalMenuButton, type GlobalMenuProps } from '../GlobalMenu';
import type { Account } from '../GlobalMenu';
import { useRootContext } from '../RootProvider';
import { Searchbar, type SearchbarProps } from '../Searchbar';
import { LocaleSwitcher, type LocaleSwitcherProps } from './';
import styles from './header.module.css';

export interface HeaderProps {
  globalMenu: GlobalMenuProps;
  /** Use to override globalMenu.menu on desktop */
  desktopMenu?: MenuProps;
  /** Use to override globalMenu.menu on mobile */
  mobileMenu?: MenuProps;
  locale?: LocaleSwitcherProps;
  search?: SearchbarProps;
  currentAccount?: Account;
  badge?: BadgeProps | undefined;
  logo?: HeaderLogoProps;
}

export const Header = ({
  globalMenu,
  desktopMenu,
  mobileMenu,
  locale,
  search,
  currentAccount,
  logo = {},
  badge,
}: HeaderProps) => {
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
      <HeaderLogo {...logo} badge={badge} />
      {search && isDesktop && (
        <HeaderSearch expanded={currentId === 'search'}>
          <Searchbar {...search} expanded={currentId === 'search'} onClose={onSearchClose} onFocus={onSearchFocus} />
        </HeaderSearch>
      )}
      <HeaderGroup>
        {locale && <LocaleSwitcher {...locale} />}
        <div className={styles.relative}>
          <GlobalMenuButton
            currentAccount={currentAccount}
            onClick={onToggleMenu}
            expanded={currentId === 'menu'}
            label={globalMenu?.menuLabel}
          />
          {globalMenu && (
            <DropdownBase
              layout="desktop"
              padding
              size="lg"
              placement="right"
              open={currentId === 'menu'}
              className={styles.dropdown}
            >
              <GlobalMenu
                {...globalMenu}
                menu={desktopMenu || globalMenu?.menu}
                currentAccount={currentAccount}
                onClose={closeAll}
              />
            </DropdownBase>
          )}
        </div>
      </HeaderGroup>
      {search && !isDesktop && (
        <HeaderSearch expanded={currentId === 'search'}>
          <Searchbar {...search} expanded={currentId === 'search'} onClose={onSearchClose} onFocus={onSearchFocus} />
        </HeaderSearch>
      )}
      {globalMenu && (
        <DrawerBase open={currentId === 'menu'} className={styles.drawer}>
          <GlobalMenu
            {...globalMenu}
            menu={mobileMenu || globalMenu?.menu}
            currentAccount={currentAccount}
            onClose={closeAll}
          />
        </DrawerBase>
      )}
    </HeaderBase>
  );
};
