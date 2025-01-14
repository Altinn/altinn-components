'use client';
import cx from 'classnames';
import { type ChangeEventHandler, type FocusEventHandler, useRef } from 'react';
import { IconButton } from '../Button';
import { Icon } from '../Icon';
import styles from './searchField.module.css';

export interface SearchFieldProps {
  name: string;
  value?: string;
  className?: string;
  expanded?: boolean;
  placeholder?: string;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
  onClose?: () => void;
  onEnter?: () => void;
  tabIndex?: number;
}

export const SearchField = ({
  className,
  expanded,
  name = 'q',
  value,
  placeholder = 'Søk',
  onFocus,
  onBlur,
  onChange,
  onClear,
  onClose,
  onEnter,
  tabIndex,
}: SearchFieldProps) => {
  const ref = useRef<HTMLInputElement>(null);

  const handleOnKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Escape') {
      ref.current?.blur();
    }
    if (event.key === 'Enter') {
      ref.current?.blur();
      onEnter?.();
    }
  };

  return (
    <div className={cx(styles.field, className)} aria-expanded={expanded}>
      <input
        ref={ref}
        onFocus={onFocus}
        onBlur={onBlur}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={styles.input}
        onKeyUp={handleOnKeyUp}
        type="search"
        aria-haspopup
        autoComplete="off"
        aria-autocomplete="list"
        aria-expanded={expanded}
        tabIndex={tabIndex ?? 0}
      />
      <Icon name="magnifying-glass" className={styles.icon} />
      {(value && (
        <IconButton
          icon="x-mark"
          variant="solid"
          size="custom"
          className={styles.clear}
          onClick={onClear}
          dataTestId="search-button-clear"
        />
      )) ||
        (expanded && (
          <IconButton
            icon="x-mark"
            variant="text"
            className={styles.dismiss}
            onClick={onClose}
            dataTestId="search-button-close"
          />
        ))}
    </div>
  );
};
