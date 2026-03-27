import type { ToolbarProps } from '../../lib';
import { useInboxFilter } from './useInboxFilter';
import { useInboxSearch } from './useInboxSearch';

export interface UseInboxQuery {
  q?: string;
  [key: string]: string | string[] | undefined;
}

interface UseInboxToolbarProps {
  menus?: ToolbarProps['menus'];
  query?: UseInboxQuery;
}

export const useInboxToolbar = ({ menus, query }: UseInboxToolbarProps): ToolbarProps => {
  const { q, ...defaultFilterState } = query || {};

  const filter = useInboxFilter({ defaultFilterState });
  const search = useInboxSearch({ value: q });

  return {
    menus,
    search,
    filter,
  };
};
