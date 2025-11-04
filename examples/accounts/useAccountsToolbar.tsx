import { type ChangeEvent, useState } from 'react';
import type { AccountListItemProps, FilterState, FilterValue, ToolbarFilterProps, ToolbarProps } from '../../lib';
import type { AccountDataListProps } from './accounts';

export const accountTypeFilter: ToolbarFilterProps = {
  name: 'type',
  label: 'Alle aktører',
  optionType: 'radio',
  options: [
    {
      groupId: '1',
      label: 'Alle aktører',
      value: 'all',
    },
    {
      groupId: '2',
      label: 'Personer',
      value: 'person',
    },
    {
      groupId: '2',
      label: 'Virksomheter',
      value: 'company',
    },
    {
      groupId: '3',
      label: 'Grupper',
      value: 'group',
    },
    /*
    {
      groupId: "2",
      type: "checkbox",
      name: "deleted",
      label: "Vis slettede enheter",
      value: "true",
    },
    */
  ],
};

export const accountListFilters = [accountTypeFilter];

interface UseAccountsToolbarProps extends ToolbarProps {
  results: AccountDataListProps;
  active: boolean;
}

export const useAccountsToolbar = (items?: AccountListItemProps[]): UseAccountsToolbarProps => {
  const [filterState, setFilterState] = useState<FilterState>({
    type: ['all'],
  });

  const [q, setQ] = useState<string>('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  const onClear = () => {
    setQ('');
  };

  const search = {
    placeholder: 'Søk i aktører',
    name: 'q',
    value: q,
    onChange,
    onClear,
  };

  const getFilterLabel = (name: string, value: FilterValue[] | undefined) => {
    console.log('N', name);
    console.log('V', value);

    const selected = accountTypeFilter?.options.find((item) => value?.includes(item.value.toString()));

    return selected?.label;
  };

  // filters

  let filtersActive = 0;

  const filteredItems = filterState?.type?.includes('all')
    ? items
    : items
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
    getFilterLabel,
    removeButtonAltText: 'remove',
  } as UseAccountsToolbarProps;
};
