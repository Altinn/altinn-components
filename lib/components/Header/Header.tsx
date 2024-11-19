'use client';
import { useEscapeKey } from '../../hooks';
import { DrawerBase, DropdownBase } from '../Dropdown';
import { GlobalMenu, type GlobalMenuProps } from '../GlobalMenu';
import type { Account } from '../GlobalMenu/AccountButton.tsx';
import { useRootContext } from '../RootProvider';
import { Searchbar, type SearchbarProps } from '../Searchbar';
import { HeaderBase } from './HeaderBase';
import { HeaderButton } from './HeaderButton';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenu } from './HeaderMenu';
import { HeaderSearch } from './HeaderSearch';
import styles from './header.module.css';

export interface HeaderProps {
  menu: GlobalMenuProps;
  search?: SearchbarProps;
  currentAccount?: Account;
}

export const Header = ({ search, menu, currentAccount }: HeaderProps) => {
  const { currentId, toggleId, openId, closeAll } = useRootContext();

  useEscapeKey(closeAll);

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
      <HeaderLogo className={styles.logo} />
      <HeaderMenu className={styles.menu}>
        <HeaderButton
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
          <DropdownBase padding={false} placement="right" expanded={currentId === 'menu'} className={styles.dropdown}>
            <GlobalMenu {...menu} currentAccount={currentAccount} />
          </DropdownBase>
        )}
      </HeaderMenu>
      {search && (
        <HeaderSearch expanded={currentId === 'search'}>
          <Searchbar {...search} expanded={currentId === 'search'} onClose={onSearchClose} onFocus={onSearchFocus} />
        </HeaderSearch>
      )}
      {menu && (
        <DrawerBase expanded={currentId === 'menu'} className={styles.drawer}>
          <GlobalMenu {...menu} currentAccount={currentAccount} />
        </DrawerBase>
      )}
    </HeaderBase>
  );
};
