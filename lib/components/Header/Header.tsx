'use client';
import { useState } from 'react';
import { GlobalMenu, type GlobalMenuProps } from './GlobalMenu';
import { HeaderLogo } from './HeaderLogo';
import { HeaderSearch, type HeaderSearchProps } from './HeaderSearch';
import styles from './header.module.css';

export type HeaderColor = 'default' | 'dark' | 'light';

export interface HeaderAccountProps {
  type?: string;
  name?: string;
}

type ExpandedType = 'search' | 'account';

export interface HeaderProps {
  color?: HeaderColor;
  menu: GlobalMenuProps;
  search?: HeaderSearchProps;
}

export const Header = ({ color, search, menu }: HeaderProps) => {
  const [expandedType, setExpandedType] = useState<ExpandedType | null>(null);

  const onToggle = (type: ExpandedType) => {
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
    <header className={styles.header} data-color={color}>
      <HeaderLogo className={styles?.logo} />
      {menu && (
        <GlobalMenu
          {...menu}
          expanded={expandedType === 'account'}
          onToggle={() => onToggle('account')}
          className={styles?.button}
        />
      )}
      {search && (
        <HeaderSearch
          {...search}
          className={styles?.search}
          expanded={expandedType === 'search'}
          onBlur={onSearchBlur}
          onFocus={onSearchFocus}
        />
      )}
    </header>
  );
};
