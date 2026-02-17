import { searchItems, useLayout, useSearchToolbar } from '../';
import type { BreadcrumbsProps, LayoutProps, SearchItemProps, ToolbarProps } from '../../lib';

interface SearchQuery {
  q?: string;
  category?: string;
}

interface SearchResults {
  items?: SearchItemProps[];
}

interface SearchLayoutProps extends LayoutProps {
  breadcrumbs?: BreadcrumbsProps['items'];
  query?: SearchQuery;
  toolbar?: ToolbarProps;
  results?: SearchResults;
  layout?: LayoutProps;
}

export const useSearchResults = ({
  query,
}: {
  query?: SearchQuery;
}): SearchLayoutProps => {
  const layout = useLayout({ accountId: undefined });

  const results = {
    items: searchItems,
  };

  const toolbar = useSearchToolbar();

  return {
    query,
    toolbar,
    results,
    layout: {
      ...layout,
      sidebar: {
        hidden: true,
      },
    },
  };
};
