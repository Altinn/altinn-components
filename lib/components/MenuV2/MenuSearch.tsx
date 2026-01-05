import cx from 'classnames';
import type { ChangeEventHandler } from 'react';
import { SearchField } from '../Forms';
import styles from './menuSearch.module.css';

export interface MenuSearchProps {
  className?: string;
  placeholder?: string;
  name: string;
  clearButtonAltText?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
}

export const MenuSearch = ({
  className,
  name,
  value,
  placeholder = 'Search',
  clearButtonAltText = 'Clear search',
  onChange,
  onClear,
}: MenuSearchProps) => {
  return (
    <SearchField
      size="xs"
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onClear={onClear}
      clearButtonAltText={clearButtonAltText}
      className={cx(styles.field, className)}
      autoComplete="off"
      onKeyDown={(e) => {
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
          e.preventDefault();
        }
      }}
    />
  );
};
