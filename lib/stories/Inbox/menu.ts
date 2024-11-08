import type { MenuProps } from '../../components';

export const menu: MenuProps = {
  groups: {},
  items: [
    {
      id: '1',
      group: 1,
      size: 'lg',
      icon: 'inbox',
      title: 'Innboks',
      color: 'strong',
    },
    {
      id: '2',
      group: 2,
      icon: 'doc-pencil',
      title: 'Utkast',
    },
    {
      id: '3',
      group: 2,
      icon: 'file-checkmark',
      selected: true,
      title: 'Sendt',
    },
    {
      id: '4',
      group: 3,
      icon: 'bookmark',
      title: 'Lagrede søk',
    },
    {
      id: '5',
      group: 4,
      icon: 'archive',
      title: 'Arkivert',
    },
    {
      id: '6',
      group: 4,
      disabled: true,
      icon: 'trash',
      title: 'Papirkurv',
    },
  ],
};
