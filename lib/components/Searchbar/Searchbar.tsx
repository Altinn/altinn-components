import { Autocomplete, type AutocompleteProps } from './Autocomplete';
import { SearchField, type SearchFieldProps } from './SearchField';
import { SearchbarBase } from './SearchbarBase';

export interface SearchbarProps extends SearchFieldProps {
  className?: string;
  autocomplete?: AutocompleteProps;
  expanded: boolean;
}

export const Searchbar = ({ className, autocomplete, expanded = false, onClose, ...search }: SearchbarProps) => {
  return (
    <SearchbarBase className={className} expanded={expanded} autocomplete={!!autocomplete}>
      <SearchField {...search} expanded={expanded} onClose={onClose} />
      {autocomplete && <Autocomplete {...autocomplete} expanded={expanded} />}
    </SearchbarBase>
  );
};
