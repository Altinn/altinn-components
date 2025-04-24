import { useState } from 'react';
import type { FilterState, ToolbarProps } from '../lib';
import { accountMenu, inboxFilters } from './';
export const useInboxToolbar = (): ToolbarProps => {
  const [currentAccountId, setCurrentAccountId] = useState<string>('party:mathias');
  const [filterState, setFilterState] = useState<FilterState>({
    from: ['skatt', 'brreg'],
  });

  return {
    accountMenu: {
      ...accountMenu,
      onSelectAccount: (id) => setCurrentAccountId(id),
      currentAccount: accountMenu.accounts?.find((account) => account.id === currentAccountId),
    },
    filters: inboxFilters,
    filterState,
    onFilterStateChange: setFilterState,
    removeButtonAltText: 'remove',
  };
};
