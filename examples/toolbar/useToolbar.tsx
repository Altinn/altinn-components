import { type ChangeEvent, useState } from 'react';
import type { FilterState, ToolbarProps } from '../../lib';

export interface UseToolbarProps {
  filters: ToolbarProps['filters'];
  search: ToolbarProps['search'];
}

export const useToolbar = ({ filters, search }: UseToolbarProps): ToolbarProps => {
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
    filters,
    filterState,
    onFilterStateChange: setFilterState,
    removeButtonAltText: 'remove',
  };
};
