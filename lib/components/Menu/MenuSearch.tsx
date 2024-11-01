import type { ChangeEventHandler } from 'react';
import styles from './menuSearch.module.css';

export interface MenuSearchProps {
  placeholder?: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
}

export const MenuSearch = ({ value, name, placeholder = 'Søk', onChange }: MenuSearchProps) => {
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
    </div>
  );
};
