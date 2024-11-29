import { Autocomplete, type AutocompleteProps } from './Autocomplete';
import { SearchField, type SearchFieldProps } from './SearchField';
import { SearchbarBase } from './SearchbarBase';

export interface SearchbarProps extends SearchFieldProps {
  className?: string;
  autocomplete?: AutocompleteProps;
  expanded: boolean;
  tabIndex?: number;
}

export const Searchbar = ({
  className,
  autocomplete,
  expanded = false,
  onClose,
  onEnter,
  tabIndex,
  ...search
}: SearchbarProps) => {
  return (
    <SearchbarBase className={className} expanded={expanded} autocomplete={!!autocomplete}>
      <SearchField {...search} expanded={expanded} onClose={onClose} onEnter={onEnter} tabIndex={tabIndex} />
      {autocomplete && <Autocomplete {...autocomplete} expanded={expanded} />}
    </SearchbarBase>
  );
};
