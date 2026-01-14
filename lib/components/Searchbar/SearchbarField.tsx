'use client';
import { MagnifyingGlassIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { type ChangeEventHandler, type FocusEventHandler, useRef } from 'react';
import { Icon, IconButton } from '..';
import styles from './searchbarField.module.css';

export interface SearchbarFieldProps {
  name: string;
  value?: string;
  className?: string;
  expanded?: boolean;
  closeButtonAltText?: string;
  clearButtonAltText?: string;
  placeholder?: string;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
  onClose?: () => void;
  onEnter?: () => void;
  tabIndex?: number;
  /* used to link the search input with the autocomplete */
  controlsId?: string;
}

export const SearchbarField = ({
  className,
  expanded,
  name = 'q',
  value,
  placeholder = 'Search',
  closeButtonAltText = 'Close search',
  clearButtonAltText = 'Clear search',
  onFocus,
  onBlur,
  onChange,
  onClear,
  onClose,
  onEnter,
  tabIndex,
  controlsId,
}: SearchbarFieldProps) => {
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
    <div className={cx(styles.field, className)}>
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
        type="text"
        autoComplete="off"
        autoCapitalize="off"
        enterKeyHint="search"
        spellCheck={false}
        aria-autocomplete="list"
        tabIndex={tabIndex ?? 0}
        aria-expanded={expanded}
        data-testid="searchbar-input"
        aria-controls={controlsId}
        role="combobox"
      />
      <Icon svgElement={MagnifyingGlassIcon} className={styles.icon} />
      {(value && (
        <IconButton
          icon={XMarkIcon}
          variant="solid"
          size="xs"
          className={styles.clear}
          onClick={onClear}
          dataTestId="search-button-clear"
          iconAltText={clearButtonAltText}
        />
      )) ||
        (expanded && (
          <IconButton
            icon={XMarkIcon}
            size="sm"
            variant="text"
            className={styles.dismiss}
            onClick={onClose}
            dataTestId="search-button-close"
            iconAltText={closeButtonAltText}
          />
        ))}
    </div>
  );
};
