import { useAppContext } from '..';
export const useBulk = () => {
  const { currentAccount, selectId, selectedIds, unselectAll } = useAppContext();

  return {
    color: currentAccount?.type,
    count: selectedIds?.length,
    selectId,
    selectedIds,
    unselectAll,
  };
};
