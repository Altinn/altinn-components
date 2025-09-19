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

interface UseAccountsToolbar extends ToolbarProps {
  results: AccountDataListProps;
  active: boolean;
}

export const useAccountsToolbar = (items?: AccountListItemProps[]): UseAccountsToolbar => {
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

  // filters

  let filtersActive = 0;

  const filteredItems = items
    ?.filter((item) => {
      if (q && !item.name.toLowerCase().includes(q.toLowerCase())) {
        return false;
      }

      let hits = 1;

      if (filterState?.type && filterState?.type?.length > 0 && !filterState?.type?.includes(item.type)) {
        filtersActive++;
        hits = 0;
      }

      if (filterState?.deleted && filterState?.deleted?.length > 0 && !item?.isDeleted) {
        hits = 0;
      }

      if (hits > 0) {
        return true;
      }

      return false;
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

  const active = q !== '' || filtersActive > 0;

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
