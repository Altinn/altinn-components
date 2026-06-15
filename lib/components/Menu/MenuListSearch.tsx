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
  label?: string;
  hideLabel?: boolean;
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
  const searchField = (
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
      {...(combobox
        ? {
            role: 'combobox',
            'aria-autocomplete': 'list',
            'aria-expanded': true,
            'aria-haspopup': 'listbox',
            'aria-controls': listId,
            'aria-activedescendant': activeDescendantId,
          }
        : {})}
      {...(props as SearchFieldProps)}
    />
  );

  // In combobox mode the search sits next to (not inside) the listbox, so it must
  // not be a list item; the input itself carries the combobox role and activedescendant.
  return combobox ? (
    <div className={styles.search} style={style} data-index={index} data-menu-search="true">
      {searchField}
    </div>
  ) : (
    <li className={styles.search} style={style} data-index={index} data-menu-search="true">
      {searchField}
    </li>
  );
};
