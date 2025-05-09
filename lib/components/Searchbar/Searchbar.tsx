import { Autocomplete, type AutocompleteProps, SearchField, type SearchFieldProps, SearchbarBase } from '..';

export interface SearchbarProps extends SearchFieldProps {
  className?: string;
  autocomplete?: AutocompleteProps;
  expanded?: boolean;
  tabIndex?: number;
}

export const Searchbar = ({
  className,
  autocomplete,
  expanded = false,
  onClose,
  tabIndex,
  ...search
}: SearchbarProps) => {
  return (
    <SearchbarBase className={className} expanded={expanded} autocomplete={!!autocomplete}>
      <SearchField {...search} expanded={expanded} onClose={onClose} tabIndex={tabIndex} />
      {autocomplete && <Autocomplete {...autocomplete} expanded={expanded} onSelect={onClose} />}
    </SearchbarBase>
  );
};
