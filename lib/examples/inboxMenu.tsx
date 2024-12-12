import type { MenuProps } from '../components';

export const inboxMenu: MenuProps = {
  groups: {},
  items: [
    {
      id: '1',
      groupId: '1',
      size: 'lg',
      icon: 'inbox',
      title: 'Innboks',
      color: 'strong',
    },
    {
      id: '2',
      groupId: '2',
      icon: 'doc-pencil',
      title: 'Utkast',
    },
    {
      id: '3',
      groupId: '2',
      icon: 'file-checkmark',
      selected: true,
      title: 'Sendt',
    },
    {
      id: '4',
      groupId: '3',
      icon: 'bookmark',
      title: 'Lagrede søk',
    },
    {
      id: '5',
      groupId: '4',
      icon: 'archive',
      title: 'Arkivert',
    },
    {
      id: '6',
      groupId: '4',
      disabled: true,
      icon: 'trash',
      title: 'Papirkurv',
    },
  ],
};
