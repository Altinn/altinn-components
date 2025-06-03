import { type ChangeEvent, useState } from 'react';
import type { AccountListItemProps, FilterState, ToolbarFilterProps, ToolbarProps } from '../../lib';
import type { AccountDataListProps } from './accounts';

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

interface UseAccountListToolbar extends ToolbarProps {
  results: AccountDataListProps;
  active: boolean;
}

export const useAccountListToolbar = (items?: AccountListItemProps[]): UseAccountListToolbar => {
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

  // results

  const filteredItems = items
    ?.filter((item) => {
      if (!q) return true;
      return item.name.toLowerCase().includes(q.toLowerCase());
    })
    .map((item) => {
      return {
        ...item,
        groupId: 'search',
      };
    });

  // search result

  const hits = filteredItems?.length;
  const hitsTitle = hits ? `${hits} treff` : 'Ingen treff';

  const results = {
    items: filteredItems?.map((item) => ({
      ...item,
      groupId: 'search',
    })) as AccountListItemProps[],
    groups: {
      search: {
        title: hitsTitle,
      },
    },
  };

  const active = q !== '';

  return {
    active,
    results,
    search,
    filters: accountListFilters,
    filterState,
    onFilterStateChange: setFilterState,
    removeButtonAltText: 'remove',
  };
};
