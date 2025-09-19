import { type UseAccountsProps, useAccounts } from '../';

export const useAccountList = ({ accountId, accounts, includeGroups = false }: UseAccountsProps) => {
  const { toolbar, groups, items, onToggleFavourite, onSettingsChange, expandedId, onToggle } = useAccounts({
    accountId,
    accounts,
    includeGroups,
  });

  // grouped results
  return {
    toolbar,
    items,
    groups,
    expandedId,
    onToggle,
    onToggleFavourite,
    onSettingsChange,
  };
};
