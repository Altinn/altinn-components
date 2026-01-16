import { MenuGridIcon, TeddyBearIcon } from '@navikt/aksel-icons';
import { categoryItems, searchItems, useHomepage } from '../';
import type { BreadcrumbsLinkProps, LayoutProps, MenuItemProps, SearchItemProps } from '../../lib';

interface UseCategoryPageProps {
  accountId?: string;
  categoryId?: string;
  pageId?: string;
}

interface CategoryPageProps {
  accountId?: string;
  pageId?: string;
  category?: MenuItemProps;
  page?: SearchItemProps;
  breadcrumbs?: BreadcrumbsLinkProps[];
  layout: LayoutProps;
}

export const useCategoryPage = ({ accountId, categoryId, pageId }: UseCategoryPageProps): CategoryPageProps => {
  const { layout } = useHomepage({ accountId });

  const page = (pageId && searchItems.find((item) => item.id === pageId)) || {
    title: 'Page title',
    summary: 'Summary',
  };

  const category: MenuItemProps = (categoryId && categoryItems.find((item) => item.id === categoryId)) || {
    id: 'category',
    title: 'Category',
  };

  const menuItems: MenuItemProps[] = [
    {
      id: 'people',
      groupId: 'level-1',
      icon: MenuGridIcon,
      color: 'neutral',
      size: 'lg',
      title: 'Alle tjenester',
      expanded: true,

      items: [
        {
          groupId: 'level-2',
          id: 'tema',
          size: 'md',
          icon: TeddyBearIcon,
          color: 'company',
          title: 'Tema',
          expanded: true,
          items: [
            {
              id: 'c1',
              size: 'sm',
              groupId: 'level-3',
              title: 'Level 3.1',
            },
            {
              groupId: 'level-3',
              size: 'sm',
              id: 'c2',
              title: 'Level 3.2',
            },
            {
              groupId: 'level-3',
              size: 'sm',
              id: 'c3',
              title: 'Level 3.3',
            },
          ],
        },
      ],
    },
  ];

  const breadcrumbs = [
    {
      label: 'Forside',
    },
    {
      label: page?.category?.name || 'Seksjon',
    },
    {
      label: page?.title || 'Side',
    },
  ].map((item) => {
    return {
      label: item.label.toString(),
    };
  });

  return {
    layout: {
      ...layout,
      sidebar: {
        menu: { items: menuItems },
      },
    },
    breadcrumbs,
    page,
    category,
  };
};
