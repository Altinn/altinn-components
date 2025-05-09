import { type ChangeEvent, useState } from 'react';
import type { FilterState, ToolbarFilterProps, ToolbarProps } from '../../lib';

export const activityLogTypeFilter: ToolbarFilterProps = {
  name: 'type',
  label: 'Alle aktører',
  optionType: 'radio',
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
    value: q,
    onChange,
    onClear,
  };

  const filters = [activityLogTypeFilter];

  return {
    search,
    filters,
    filterState,
    onFilterStateChange: setFilterState,
    removeButtonAltText: 'remove',
  };
};
