'use client';
import cx from 'classnames';
import { useState } from 'react';
import { Backdrop, DrawerBase, DropdownBase } from '../Dropdown';
import { GlobalMenu, type GlobalMenuProps } from '../GlobalMenu';
import { HeaderBase } from './HeaderBase';
import { HeaderButton } from './HeaderButton';
import { HeaderLogo } from './HeaderLogo';
import { HeaderMenu } from './HeaderMenu';
import { HeaderSearch, type HeaderSearchProps } from './HeaderSearch';
import styles from './header.module.css';

export type HeaderExpandedType = 'search' | 'menu' | null;

export interface HeaderProps {
  menu: GlobalMenuProps;
  search?: HeaderSearchProps;
}

export const Header = ({ search, menu }: HeaderProps) => {
  const [expandedType, setExpandedType] = useState<HeaderExpandedType | null>(null);
  const selectedAccount = menu?.accounts?.find((account) => account.selected);
  const selectedAvatar = selectedAccount && {
    type: selectedAccount.type,
    name: selectedAccount.name,
  };

  const onToggle = (type: HeaderExpandedType) => {
    if (expandedType === type) {
      setExpandedType(null);
    } else {
      setExpandedType(type);
    }
  };

  const onSearchFocus = () => {
    setExpandedType('search');
  };

  const onSearchBlur = () => {
    setExpandedType(null);
  };

  return (
    <HeaderBase
      className={cx(
        styles.header,
        expandedType === 'menu' && styles.menuExpanded,
        expandedType === 'search' && styles.searchExpanded,
      )}
      expanded={(expandedType && true) || false}
    >
      <Backdrop className={styles.backdrop} />
      <HeaderLogo className={styles.logo} />
      <HeaderMenu className={styles.menu}>
        <HeaderButton
          avatar={selectedAvatar}
          onClick={() => onToggle('menu')}
          expanded={expandedType === 'menu'}
          label={menu?.menuLabel}
        />
        {menu && (
          <DropdownBase expanded={expandedType === 'menu'} className={styles.dropdown}>
            <GlobalMenu {...menu} variant="dropdown" />
          </DropdownBase>
        )}
      </HeaderMenu>

      {search && (
        <HeaderSearch
          {...search}
          className={styles.search}
          expanded={expandedType === 'search'}
          onBlur={onSearchBlur}
          onFocus={onSearchFocus}
        />
      )}
      {menu && (
        <DrawerBase expanded={expandedType === 'menu'} className={styles.drawer}>
          <GlobalMenu {...menu} variant="drawer" expanded={expandedType === 'menu'} />
        </DrawerBase>
      )}
    </HeaderBase>
  );
};
