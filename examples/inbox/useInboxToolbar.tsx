import { useState } from 'react';
import { defaultAccounts, inboxFilters, useAccountMenu } from '../';
import type { FilterState, ToolbarProps } from '../../lib';

export const useInboxToolbar = (): ToolbarProps => {
  const [filterState, setFilterState] = useState<FilterState>({
    from: ['skatt', 'brreg'],
  });

  const accountMenu = useAccountMenu({
    accounts: defaultAccounts,
  });

  return {
    accountMenu,
    filters: inboxFilters,
    filterState,
    onFilterStateChange: setFilterState,
    removeButtonAltText: 'remove',
  } as ToolbarProps;
};
