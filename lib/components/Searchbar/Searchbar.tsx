import { useState } from 'react';
import { Autocomplete, type AutocompleteProps } from './Autocomplete';
import { SearchField, type SearchFieldProps } from './SearchField';
import { SearchbarBase } from './SearchbarBase';
import { useRootContext } from '../RootProvider';

export interface SearchSubmitProps {
  href?: string;
  query?: string;
}

export interface SearchbarProps extends SearchFieldProps {
  className?: string;
  autocomplete?: AutocompleteProps;
  tabIndex?: number;
  onSubmit?: (SearchSubmitProps) => void;
}

export const Searchbar = ({ className, autocomplete, tabIndex, ...search }: SearchbarProps) => {
  const { currentId, toggleId, openId } = useRootContext();

  const onFocus = () => {
    openId('search');
  };

  const onClose = () => {
    toggleId('search');
  };

  const onSelect = (item) => {
    console.log('ITEM', item);
    alert('href:' + item?.href);
    onClose();
  };

  const [activeItem, setActiveItem] = useState(undefined);

  const onActive = (item) => {
    setActiveItem(item);
  };

  const onEnter = () => {
    if (activeItem) {
      onSelect(activeItem);
    } else {
      onClose();
    }
  };

  const expanded = currentId === 'search';

  return (
    <SearchbarBase className={className} expanded={expanded} autocomplete={!!autocomplete}>
      <SearchField
        {...search}
        expanded={expanded}
        onFocus={onFocus}
        onClose={onClose}
        onEnter={onEnter}
        tabIndex={tabIndex}
      />
      {autocomplete && <Autocomplete {...autocomplete} expanded={expanded} onSelect={onSelect} onActive={onActive} />}
    </SearchbarBase>
  );
};
