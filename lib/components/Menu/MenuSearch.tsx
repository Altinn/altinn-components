import type { ChangeEventHandler } from 'react';
import { Icon, IconButton } from '../';
import styles from './menuSearch.module.css';

export interface MenuSearchProps {
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
}

export const MenuSearch = ({ value, name, placeholder = 'Søk', onChange, onClear }: MenuSearchProps) => {
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
      <Icon name="magnifying-glass" className={styles.icon} />
      {onClear && (
        <IconButton
          icon="x-mark"
          color="secondary"
          variant="solid"
          size="custom"
          className={styles.clear}
          onClick={onClear}
        />
      )}
    </div>
  );
};
