import { Autocomplete, type AutocompleteProps, SearchbarBase, SearchbarField, type SearchbarFieldProps } from '..';

export interface SearchbarProps extends SearchbarFieldProps {
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
      <SearchbarField {...search} expanded={expanded} onClose={onClose} tabIndex={tabIndex} />
      {autocomplete && <Autocomplete {...autocomplete} expanded={expanded} onSelect={onClose} />}
    </SearchbarBase>
  );
};
