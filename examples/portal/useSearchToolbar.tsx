import { useState } from 'react';
import type { FilterState, ToolbarFilterProps, ToolbarProps } from '../../lib';

export const useSearchToolbar = (): ToolbarProps => {
  const [filterState, setFilterState] = useState<FilterState>({});

  const categoryFilters: ToolbarFilterProps = {
    name: 'category',
    label: 'Alle kategorier',
    optionType: 'checkbox',
    options: [
      {
        value: '1',
        label: 'Kategori 1',
      },
      {
        value: '2',
        label: 'Kategori 2',
      },
    ],
  };

  const ownerFilters: ToolbarFilterProps = {
    name: 'owner',
    label: 'Alle etater',
    optionType: 'checkbox',
    options: [
      {
        value: '1',
        label: 'Owner 1',
      },
      {
        value: '2',
        label: 'Owner 2',
      },
    ],
  };

  const targetFilters: ToolbarFilterProps = {
    name: 'target',
    label: 'Alle brukere',
    optionType: 'checkbox',
    options: [
      {
        value: '1',
        label: 'For privatpersoner',
      },
      {
        value: '2',
        label: 'For virksomheter',
      },
    ],
  };

  const filters = [categoryFilters, ownerFilters, targetFilters];

  return {
    filters,
    filterState,
    onFilterStateChange: setFilterState,
    removeButtonAltText: 'remove',
  };
};
