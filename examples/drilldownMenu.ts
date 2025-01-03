import type { MenuProps } from '../lib';

export const drilldownMenu: MenuProps = {
  groups: {
    'level-1': {
      divider: true,
    },
    'level-2': {
      divider: true,
    },
  },
  items: [
    {
      id: 'people',
      groupId: 'level-1',
      size: 'lg',
      icon: 'menu-grid',
      title: 'Alle skjema',
      expanded: true,
      items: [
        {
          groupId: 'level-2',
          id: 'tema',
          icon: 'teddy-bear',
          title: 'Tema',
          expanded: true,
          items: [
            {
              id: 'c1',
              groupId: 'level-3',
              title: 'Kategori 1',
            },
            {
              groupId: 'level-3',
              id: 'c2',
              title: 'Kategori 2',
              selected: true,
            },
            {
              groupId: 'level-3',
              id: 'c3',
              title: 'Kategori 3',
            },
          ],
        },
      ],
    },
  ],
};
