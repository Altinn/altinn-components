import type { ChangeEventHandler } from 'react';
import styles from './toolbarSearch.module.css';

export interface ToolbarSearchProps {
  placeholder?: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
}

export const ToolbarSearch = ({ value, name, placeholder = 'Søk', onChange }: ToolbarSearchProps) => {
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
    </div>
  );
};
