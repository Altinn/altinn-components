import { type ChangeEvent, useState } from 'react';
import type { FilterState, ToolbarFilterProps, ToolbarProps } from '../../lib';

export const accountTypeFilter: ToolbarFilterProps = {
  name: 'type',
  label: 'Alle aktører',
  optionType: 'checkbox',
  options: [
    {
      groupId: '1',
      label: 'Virksomheter',
      value: 'company',
    },
    {
      groupId: '1',
      label: 'Personer',
      value: 'person',
    },
    {
      groupId: '1',
      label: 'Grupper',
      value: 'group',
    },
    {
      groupId: '2',
      type: 'checkbox',
      name: 'deleted',
      label: 'Vis slettede enheter',
      value: 'true',
    },
  ],
};

export const accountListFilters = [accountTypeFilter];

export const useAccountListToolbar = (): ToolbarProps => {
  const [filterState, setFilterState] = useState<FilterState>({});

  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  const onClear = () => {
    setQ('');
  };

  const search = {
    name: 'q',
    value: q,
    onChange,
    onClear,
  };

  return {
    search,
    filters: accountListFilters,
    filterState,
    onFilterStateChange: setFilterState,
    removeButtonAltText: 'remove',
  };
};
