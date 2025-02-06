import { MagnifyingGlassIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { ChangeEventHandler } from 'react';
import { Icon, IconButton } from '../';
import styles from './menuSearch.module.css';

export interface MenuSearchProps {
  placeholder?: string;
  name: string;
  clearButtonAltText?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
}

export const MenuSearch = ({
  value,
  name,
  placeholder = 'Search',
  clearButtonAltText = 'Clear search',
  onChange,
  onClear,
}: MenuSearchProps) => {
  return (
    <div className={styles.field}>
      <input
        type="search"
        value={value}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        autoComplete="off"
      />
      <Icon svgElement={MagnifyingGlassIcon} className={styles.icon} />
      {onClear && (
        <IconButton
          icon={XMarkIcon}
          variant="solid"
          size="custom"
          className={styles.clear}
          onClick={onClear}
          iconAltText={clearButtonAltText}
        />
      )}
    </div>
  );
};
