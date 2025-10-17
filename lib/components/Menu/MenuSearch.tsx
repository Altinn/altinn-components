import type { ChangeEventHandler } from 'react';
import { SearchField } from '../';
import styles from './menuSearch.module.css';
import { useIsDesktop } from '../../hooks/useIsDesktop.ts';

export interface MenuSearchProps {
  placeholder?: string;
  name: string;
  clearButtonAltText?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
}

export const MenuSearch = ({
  name,
  value,
  placeholder = 'Search',
  clearButtonAltText = 'Clear search',
  onChange,
  onClear,
}: MenuSearchProps) => {
  const isDesktop = useIsDesktop();
  return (
    <SearchField
      size="xs"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onClear={onClear}
      clearButtonAltText={clearButtonAltText}
      className={styles.field}
      autoComplete="off"
      autoFocus={isDesktop}
      onKeyDown={(e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault();
        }
      }}
    />
  );
};
