import { useState } from 'react';
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
  const [inputHasFocus, setInputFocus] = useState<boolean>(false);

  const onBlurCapture = (e: React.FocusEvent<HTMLDivElement>) => {
    const dataTestIdValue = e.target?.attributes?.getNamedItem('data-testid')?.value;
    const autocompleteParent = e?.relatedTarget?.closest('[data-autocomplete="true"]');

    // If the related target is part of the autocomplete or if it is null (e.g., escape key pressed),
    if (autocompleteParent || e.relatedTarget === null) {
      return;
    }

    if (
      dataTestIdValue === 'search-button-clear' ||
      dataTestIdValue === 'search-button-close' ||
      (dataTestIdValue === 'searchbar-input' &&
        e.relatedTarget?.getAttribute('data-testid') !== 'searchbar-input' &&
        e.relatedTarget?.getAttribute('data-testid') !== 'search-button-clear' &&
        e.relatedTarget?.getAttribute('data-testid') !== 'search-button-close' &&
        e.relatedTarget?.getAttribute('data-testid') !== 'autocomplete-list')
    ) {
      onClose?.();
    }
  };

  return (
    <SearchbarBase
      className={className}
      expanded={expanded}
      autocomplete={!!autocomplete}
      onBlurCapture={onBlurCapture}
    >
      <SearchbarField
        {...search}
        expanded={expanded}
        onClose={onClose}
        tabIndex={tabIndex}
        {...(autocomplete && { controlsId: 'searchbar-autocomplete' })}
        onFocus={(event) => {
          search?.onFocus?.(event);
          if (!inputHasFocus) {
            setInputFocus(true);
          }
        }}
        onBlur={(event) => {
          search?.onBlur?.(event);
          if (inputHasFocus) {
            setInputFocus(false);
          }
        }}
      />
      {autocomplete && (
        <Autocomplete
          {...autocomplete}
          expanded={expanded}
          keyboardEvents={inputHasFocus}
          onSelect={onClose}
          id="searchbar-autocomplete"
        />
      )}
    </SearchbarBase>
  );
};
