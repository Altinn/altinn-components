import { useState } from 'react';
import { accountMenu, inboxFilters } from '../';
import type { FilterState, ToolbarProps } from '../../lib';
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
