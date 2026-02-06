import type { ChangeEventHandler } from 'react';
import { SearchField, type SearchFieldProps } from '../';
import styles from './menuListSearch.module.css';

export interface MenuListSearchProps extends React.ComponentProps<'input'> {
  style?: React.CSSProperties;
  index?: number;
  placeholder?: string;
  name: string;
  clearButtonAltText?: string;
  value?: string;
  onChange?: ChangeEventHandler;
  onClear?: () => void;
  onNavigate?: () => void;
  combobox?: boolean;
  listId?: string;
}

export const MenuListSearch = ({
  style,
  index,
  name,
  value,
  placeholder = 'Search',
  clearButtonAltText = 'Clear search',
  onChange,
  onClear,
  onNavigate,
  combobox = false,
  listId,
  'aria-activedescendant': activeDescendantId,
  onKeyDown,
  onInput,
  onFocus,
  ...props
}: MenuListSearchProps) => {
  return (
    <li className={styles.search} style={style} data-index={index} data-menu-search="true">
      {combobox ? (
        // biome-ignore lint/a11y/useFocusableInteractive: <explanation>
        // biome-ignore lint/a11y/useAriaPropsForRole: <explanation>
        // biome-ignore lint/a11y/useSemanticElements: <explanation>
        <div role="combobox" aria-expanded aria-haspopup="listbox" aria-owns={listId}>
          <SearchField
            size="xs"
            className={styles.searchInput}
            name={name}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            onClear={onClear}
            clearButtonAltText={clearButtonAltText}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="off"
            aria-autocomplete="list"
            aria-controls={listId}
            aria-activedescendant={activeDescendantId}
            autoFocus
            onKeyDown={(e) => {
              if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
                e.preventDefault();
                onNavigate?.();
              }
              onKeyDown?.(e);
            }}
            onInput={onInput}
            onFocus={onFocus}
            {...(props as SearchFieldProps)}
          />
        </div>
      ) : (
        <SearchField
          size="xs"
          className={styles.searchInput}
          name={name}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onClear={onClear}
          clearButtonAltText={clearButtonAltText}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          autoFocus
          onKeyDown={(e) => {
            if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
              e.preventDefault();
              onNavigate?.();
            }
            onKeyDown?.(e);
          }}
          onInput={onInput}
          onFocus={onFocus}
          {...(props as SearchFieldProps)}
        />
      )}
    </li>
  );
};
