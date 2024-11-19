import type { ChangeEventHandler } from 'react';
import styles from './menuInputField.module.css';

type InputType = 'text' | 'date' | 'search';

export interface MenuInputFieldProps {
  placeholder?: string;
  type?: InputType;
  label?: string;
  name: string;
  value: string;
  onChange: ChangeEventHandler;
}

export const MenuInputField = ({
  label,
  type = 'text',
  value,
  name,
  placeholder = 'Søk',
  onChange,
}: MenuInputFieldProps) => {
  return (
    <label className={styles.field}>
      {label && <span className={styles.label}>{label}</span>}
      <input
        data-value={value && true}
        type={type}
        value={value}
        name={name}
        placeholder={placeholder}
        className={styles.input}
        onChange={onChange}
        autoComplete="off"
      />
    </label>
  );
};
