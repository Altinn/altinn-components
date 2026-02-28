import { SearchField, type SearchFieldProps } from '../Forms';

export interface ToolbarSearchProps extends SearchFieldProps {
  collapsible?: boolean;
}

export const ToolbarSearch = ({
  value,
  name,
  placeholder = 'Search',
  loading,
  collapsible,
  clearButtonAltText = 'Clear search',
  onChange,
  onClear,
  onKeyDown,
  menu,
  minLength,
}: ToolbarSearchProps) => {
  return (
    <SearchField
      size="xs"
      value={value}
      name={name}
      placeholder={placeholder}
      clearButtonAltText={clearButtonAltText}
      onChange={onChange}
      onClear={onClear}
      onKeyDown={onKeyDown}
      collapsible={collapsible}
      autoComplete="off"
      autoCapitalize="off"
      type="search"
      minLength={minLength}
      loading={loading}
      menu={menu}
    />
  );
};
