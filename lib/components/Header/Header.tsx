'use client';
import type { BadgeProps } from '../Badge';
import { DrawerBase, DropdownBase } from '../Dropdown';
import { GlobalMenu, type GlobalMenuProps } from '../GlobalMenu';
import type { Account } from '../GlobalMenu';
import { useRootContext } from '../RootProvider';
import { Searchbar, type SearchbarProps } from '../Search';
import { HeaderBase } from './HeaderBase';
import { HeaderButton } from './HeaderButton';
import { HeaderLogo, type HeaderLogoProps } from './HeaderLogo';
import { HeaderMenu } from './HeaderMenu';
import { HeaderSearch } from './HeaderSearch';
import styles from './header.module.css';

export interface HeaderProps {
  menu: GlobalMenuProps;
  search?: SearchbarProps;
  currentAccount?: Account;
  badge?: BadgeProps | undefined;
  logo?: HeaderLogoProps;
}

export const Header = ({ search, menu, currentAccount, logo = {}, badge }: HeaderProps) => {
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

  return (
    <HeaderBase currentId={currentId} open={currentId === 'search' || currentId === 'menu'} onClose={closeAll}>
      <HeaderLogo {...logo} className={styles.logo} />
      <HeaderMenu className={styles.menu}>
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
      </HeaderMenu>
      {search && (
        <HeaderSearch expanded={currentId === 'search'}>
          <Searchbar {...search} expanded={currentId === 'search'} onClose={onSearchClose} onFocus={onSearchFocus} />
        </HeaderSearch>
      )}
      {menu && (
        <DrawerBase layout="mobile" open={currentId === 'menu'} className={styles.drawer}>
          <GlobalMenu {...menu} currentAccount={currentAccount} onClose={closeAll} />
        </DrawerBase>
      )}
    </HeaderBase>
  );
};
