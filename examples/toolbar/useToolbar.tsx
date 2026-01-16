import { type ChangeEvent, useState } from 'react';
import type { FilterState, ToolbarProps } from '../../lib';

export interface UseToolbarProps {
  filter?: ToolbarProps['filter'];
  search?: ToolbarProps['search'];
}

export const useToolbar = ({ filter, search }: UseToolbarProps): ToolbarProps => {
  const [filterState, setFilterState] = useState<FilterState>({});

  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  const onClear = () => {
    setQ('');
  };

  return {
    search: search && {
      ...search,
      name: 'q',
      value: q,
      onChange,
      onClear,
    },
    filter: filter && {
      ...filter,
      filterState,
      onFilterStateChange: setFilterState,
      removeLabel: 'remove',
    },
  };
};
