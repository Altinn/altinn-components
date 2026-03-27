import type { ToolbarProps } from '../../lib';
import { useInboxFilter } from './useInboxFilter';
import { useInboxSearch } from './useInboxSearch';

interface UseInboxToolbarProps {
  accountMenu?: ToolbarProps['accountMenu'];
}

export const useInboxToolbar = ({ accountMenu }: UseInboxToolbarProps): ToolbarProps => {
  const filter = useInboxFilter({});
  const search = useInboxSearch({});

  return {
    accountMenu: accountMenu as ToolbarProps['accountMenu'],
    search,
    filter,
  };
};
