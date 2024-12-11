import type { ChangeEventHandler } from 'react';
import { Icon, IconButton } from '../';
import styles from './toolbarSearch.module.css';

export interface ToolbarSearchProps {
  placeholder?: string;
  name: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
}

export const ToolbarSearch = ({ value, name, placeholder = 'Search', onChange, onClear }: ToolbarSearchProps) => {
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
