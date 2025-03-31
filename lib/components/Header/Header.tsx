'use client';
import type { BadgeProps } from '../Badge';
import { DrawerBase, DropdownBase } from '../Dropdown';
import { GlobalMenu, type GlobalMenuProps } from '../GlobalMenu';
import type { Account } from '../GlobalMenu';
import { useRootContext } from '../RootProvider';
import { Searchbar, type SearchbarProps } from '../Search';
import { LocaleButton, LocaleSwitcher, type LocaleSwitcherProps } from './';
import { HeaderBase } from './HeaderBase';
import { HeaderButton } from './HeaderButton';
import { HeaderGroup } from './HeaderGroup';
import { HeaderLogo, type HeaderLogoProps } from './HeaderLogo';
import { HeaderSearch } from './HeaderSearch';

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

  const onToggleLocale = () => {
    toggleId('locale');
  };

  return (
    <HeaderBase
      currentId={currentId}
      open={currentId === 'search' || currentId === 'menu' || currentId === 'locale'}
      onClose={closeAll}
    >
      <HeaderLogo {...logo} className={styles.logo} />
      <HeaderGroup className={styles.menu}>
        <div style={{ position: 'relative' }}>
          <LocaleButton onClick={onToggleLocale} expanded={currentId === 'locale'} />
        </div>
        <div style={{ position: 'relative' }}>
          <HeaderButton
            color="company"
            variant="solid"
            badge={badge}
            avatar={
              currentAccount && {
                type: currentAccount.type,
                name: currentAccount.name,
              }
            }
            onClick={onToggleMenu}
            expanded={currentId === 'menu'}
            label={menu?.menuLabel}
          />
          {locale && (
            <DropdownBase
              layout="desktop"
              padding
              placement="right"
              open={currentId === 'locale'}
              className={styles.dropdown}
            >
              <LocaleSwitcher {...locale} />
            </DropdownBase>
          )}
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
      {search && (
        <HeaderSearch expanded={currentId === 'search'}>
          <Searchbar {...search} expanded={currentId === 'search'} onClose={onSearchClose} onFocus={onSearchFocus} />
        </HeaderSearch>
      )}

      {locale && (
        <DrawerBase layout="mobile" open={currentId === 'locale'} className={styles.drawer}>
          <LocaleSwitcher {...locale} />
        </DrawerBase>
      )}
      {menu && (
        <DrawerBase layout="mobile" open={currentId === 'menu'} className={styles.drawer}>
          <GlobalMenu {...menu} currentAccount={currentAccount} onClose={closeAll} />
        </DrawerBase>
      )}
    </HeaderBase>
  );
};
