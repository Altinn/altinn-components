import type { ChangeEventHandler } from 'react';
import { SearchField, type SearchFieldProps, useRootContext } from '../';
import { getCommonTexts } from '../RootProvider/commonTexts.ts';
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
  /** Render as a list item. Only valid in a plain list. */
  inList?: boolean;
  listId?: string;
  label?: string;
  hideLabel?: boolean;
}

export const MenuListSearch = ({
  style,
  index,
  name,
  value,
  placeholder,
  clearButtonAltText,
  onChange,
  onClear,
  onNavigate,
  combobox = false,
  inList = !combobox,
  listId,
  'aria-activedescendant': activeDescendantId,
  onKeyDown,
  onInput,
  onFocus,
  label,
  hideLabel,
  ...props
}: MenuListSearchProps) => {
  const texts = getCommonTexts(useRootContext().languageCode);
  const searchField = (
    <SearchField
      size="xs"
      className={styles.searchInput}
      name={name}
      value={value}
      placeholder={placeholder ?? texts.search}
      onChange={onChange}
      onClear={onClear}
      clearButtonAltText={clearButtonAltText ?? texts.clearSearch}
      // A placeholder is not a label, so the field gets a hidden one by default.
      label={label ?? texts.search}
      hideLabel={label ? hideLabel : true}
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

  // A menu or listbox can only hold its own items, so the search sits next to it.
  return !inList ? (
    <div className={styles.search} style={style} data-index={index} data-menu-search="true">
      {searchField}
    </div>
  ) : (
    <li className={styles.search} style={style} data-index={index} data-menu-search="true">
      {searchField}
    </li>
  );
};
