import type {ChangeEventHandler, FocusEventHandler} from 'react';
import {Icon} from '../Icon';
import styles from './headerSearch.module.css';
import cx from 'classnames';

export interface HeaderSearchProps {
  className?: string;
  expanded?: boolean;
  placeholder?: string;
  name: string;
  value?: string;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  onChange?: ChangeEventHandler;
}

export const HeaderSearch = ({
  className,
  expanded = false,
  name = 'q',
  value,
  placeholder = 'Søk',
  onFocus,
  onBlur,
  onChange,
}: HeaderSearchProps) => {
  return (
    <div className={cx(styles.form, className)} aria-expanded={expanded}>
      <div className={styles.field}>
        <input
          onFocus={onFocus}
          onBlur={onBlur}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={styles?.input}
          type="search"
        />
        <Icon name="magnifying-glass" className={styles.icon} />
      </div>
    </div>
  );
};
