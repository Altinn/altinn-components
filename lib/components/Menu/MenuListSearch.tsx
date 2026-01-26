import type { ChangeEventHandler } from 'react';
import { SearchField } from '../';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';
import styles from './menuListSearch.module.css';

export interface MenuListSearchProps {
  placeholder?: string;
  name: string;
  clearButtonAltText?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
}

export const MenuListSearch = ({
  name,
  value,
  placeholder = 'Search',
  clearButtonAltText = 'Clear search',
  onChange,
  onClear,
}: MenuListSearchProps) => {
  const isDesktop = useIsDesktop();
  return (
    <li className={styles.search}>
      <SearchField
        size="xs"
        className={styles.searchInput}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        onClear={onClear}
        clearButtonAltText={clearButtonAltText}
        autoComplete="off"
        autoFocus={isDesktop}
        onKeyDown={(e) => {
          if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
            e.preventDefault();
          }
        }}
      />
    </li>
  );
};
