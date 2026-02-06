import { SearchField, type SearchFieldProps } from '../Forms';

export interface ToolbarSearchProps extends SearchFieldProps {
  collapsible?: boolean;
}

export const ToolbarSearch = ({
  value,
  name,
  placeholder = 'Search',
  collapsible,
  clearButtonAltText = 'Clear search',
  onChange,
  onClear,
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
      collapsible={collapsible}
      autoComplete="off"
      autoCapitalize="off"
      type="search"
    />
  );
};
