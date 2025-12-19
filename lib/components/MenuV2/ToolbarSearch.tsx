import { SearchField, type SearchFieldProps } from '../';

export interface ToolbarSearchProps extends SearchFieldProps {
  placeholder?: string;
  name: string;
  value?: string;
}

export const ToolbarSearch = ({
  value,
  name,
  placeholder = 'Search',
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
    />
  );
};
