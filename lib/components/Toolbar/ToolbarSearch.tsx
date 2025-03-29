import { MagnifyingGlassIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { ChangeEventHandler } from 'react';
import { Icon, IconButton } from '../';
import styles from './toolbarSearch.module.css';

export interface ToolbarSearchProps {
  placeholder?: string;
  clearButtonAltText?: string;
  name: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
}

export const ToolbarSearch = ({
  value,
  name,
  placeholder = 'Search',
  clearButtonAltText = 'Clear search',
  onChange,
  onClear,
}: ToolbarSearchProps) => {
  return (
    <div className={styles.field}>
      <input
        type="search"
        value={value}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
      />
      <Icon svgElement={MagnifyingGlassIcon} className={styles.icon} />
      {onClear && !!value && (
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
