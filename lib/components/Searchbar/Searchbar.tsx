import { useRef } from 'react';
import { useEnterKey } from '../../hooks/useEnterKey.ts';
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
  tabIndex,
  ...search
}: SearchbarProps) => {
  const autoCompleteRef = useRef<HTMLDivElement>(null);

  useEnterKey(() => {
    const activeItem = autoCompleteRef.current?.querySelector('[data-active="true"]') as HTMLElement | null;
    activeItem?.firstElementChild?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    onClose?.();
  });

  return (
    <SearchbarBase className={className} expanded={expanded} autocomplete={!!autocomplete}>
      <SearchField {...search} expanded={expanded} onClose={onClose} tabIndex={tabIndex} />
      {autocomplete && <Autocomplete {...autocomplete} expanded={expanded} ref={autoCompleteRef} />}
    </SearchbarBase>
  );
};
