import { MenuGridIcon, TeddyBearIcon } from '@navikt/aksel-icons';
import type { GlobalMenuProps, LayoutProps, MenuItemProps, MenuProps } from '../lib';
import { footer, header, useAccountMenu } from './';
export const useCategoryLayout = (): LayoutProps => {
  const menu: GlobalMenuProps = useAccountMenu(header!.menu!);
  const currentAccount = menu.currentAccount;

  const categoryMenuItems: MenuItemProps[] = [
    {
      id: 'people',
      groupId: 'level-1',
      icon: MenuGridIcon,
      color: 'neutral',
      iconTheme: 'surface',
      size: 'lg',
      title: 'Alle tjenester',
      //      collapsible: true,
      expanded: true,

      items: [
        {
          groupId: 'level-2',
          id: 'tema',
          size: 'md',
          icon: TeddyBearIcon,
          color: 'company',
          iconTheme: 'surface',
          title: 'Tema',
          //          collapsible: true,
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

  return {
    color: 'company',
    theme: 'default',
    sidebar: {
      menu: categoryMenu,
    },
    footer,
    header: {
      ...header,
      currentAccount,
      menu: {
        ...menu,
      },
    },
  };
};
