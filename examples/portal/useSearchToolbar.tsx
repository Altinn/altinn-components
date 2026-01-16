import { useState } from 'react';
import type { FilterState, ToolbarProps } from '../../lib';

export const useSearchToolbar = (): ToolbarProps => {
  const [filterState, setFilterState] = useState<FilterState>({});

  const categoryFilter = {
    name: 'category',
    label: 'Alle kategorier',
    items: [
      {
        value: '1',
        label: 'Kategori 1',
      },
      {
        value: '2',
        label: 'Kategori 2',
      },
    ].map((item) => {
      return {
        ...item,
        role: 'checkbox',
        name: 'category',
      };
    }),
  };

  const ownerFilter = {
    name: 'owner',
    label: 'Alle etater',
    items: [
      {
        value: '1',
        label: 'Owner 1',
      },
      {
        value: '2',
        label: 'Owner 2',
      },
    ].map((item) => {
      return {
        ...item,
        role: 'checkbox',
        name: 'owner',
      };
    }),
  };

  const targetFilter = {
    name: 'target',
    label: 'Alle brukere',
    items: [
      {
        value: '1',
        label: 'For privatpersoner',
      },
      {
        value: '2',
        label: 'For virksomheter',
      },
    ].map((item) => {
      return {
        ...item,
        role: 'checkbox',
        name: 'target',
      };
    }),
  };

  const filters = [categoryFilter, ownerFilter, targetFilter];

  return {
    filter: {
      filters,
      filterState,
      onFilterStateChange: setFilterState,
      removeLabel: 'remove',
    },
  };
};
