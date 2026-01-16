import { type ChangeEvent, useState } from 'react';
import type { FilterState, ToolbarProps } from '../../lib';

export const activityLogTypeFilter = {
  name: 'type',
  label: 'Alle aktører',
  items: [
    {
      name: 'type',
      role: 'radio',
      groupId: '1',
      label: 'Virksomheter',
      value: 'company',
    },
    {
      name: 'type',
      role: 'radio',
      groupId: '1',
      label: 'Personer',
      value: 'person',
    },
  ],
};

export const useActivityLogToolbar = (): ToolbarProps => {
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
    placeholder: 'Søk i aktivitetsloggen',
    value: q,
    onChange,
    onClear,
  };

  return {
    search,
    filter: {
      filters: [activityLogTypeFilter],
      filterState,
      onFilterStateChange: setFilterState,
      removeLabel: 'remove',
    },
  };
};
