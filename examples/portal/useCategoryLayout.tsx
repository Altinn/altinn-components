import { MenuGridIcon, TeddyBearIcon } from '@navikt/aksel-icons';
import { useLayout } from '../';
import type { LayoutProps, MenuItemProps, MenuProps } from '../../lib';
export const useCategoryLayout = (): LayoutProps => {
  const categoryMenuItems: MenuItemProps[] = [
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

  const categoryMenu: MenuProps = {
    items: categoryMenuItems,
  };

  const layout = useLayout({
    color: 'company',
    theme: 'default',
    sidebar: {
      menu: categoryMenu,
    },
  });

  return {
    ...layout,
  };
};
