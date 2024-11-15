'use client';
import { useEscapeKey } from '../../hooks';
import { DrawerBase, DropdownBase } from '../Dropdown';
import { GlobalMenu, type GlobalMenuProps } from '../GlobalMenu';
import { useRootContext } from '../RootProvider';
import { Searchbar, type SearchbarProps } from '../Searchbar';
import { HeaderBase } from './HeaderBase';
import { HeaderButton } from './HeaderButton';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenu } from './HeaderMenu';
import styles from './header.module.css';

export interface HeaderProps {
  menu: GlobalMenuProps;
  search?: SearchbarProps;
}

export const Header = ({ search, menu }: HeaderProps) => {
  const { currentId, toggleId, openId, closeAll } = useRootContext();
  const selectedAccount = menu.accounts?.find((account) => account.selected);
  const selectedAvatar = selectedAccount && {
    type: selectedAccount.type,
    name: selectedAccount.name,
  };

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
          avatar={selectedAvatar}
          onClick={onToggleMenu}
          expanded={currentId === 'menu'}
          label={menu?.menuLabel}
        />
        {menu && (
          <DropdownBase padding={false} placement="right" expanded={currentId === 'menu'} className={styles.dropdown}>
            <GlobalMenu {...menu} currentEndUser={selectedAccount} />
          </DropdownBase>
        )}
      </HeaderMenu>
      {search && (
        <Searchbar
          {...search}
          className={styles.search}
          expanded={currentId === 'search'}
          onClose={onSearchClose}
          onFocus={onSearchFocus}
        />
      )}
      {menu && (
        <DrawerBase expanded={currentId === 'menu'} className={styles.drawer}>
          <GlobalMenu {...menu} currentEndUser={selectedAccount} expanded={currentId === 'menu'} />
        </DrawerBase>
      )}
    </HeaderBase>
  );
};
