import type { MenuItemProps } from '../../../components';

export const inboxMenuItems: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: '1',
    size: 'lg',
    icon: 'inbox',
    selected: true,
    title: 'Innboks',
    color: 'strong',
  },
  {
    id: 'drafts',
    groupId: '2',
    icon: 'doc-pencil',
    title: 'Utkast',
  },
  {
    id: 'sent',
    groupId: '2',
    icon: 'file-checkmark',
    title: 'Sendt',
  },
  {
    id: 'bookmarks',
    groupId: '3',
    icon: 'bookmark',
    title: 'Lagrede søk',
  },
  {
    id: 'archive',
    groupId: '4',
    icon: 'archive',
    title: 'Arkivert',
  },
  {
    id: 'trash',
    groupId: '4',
    disabled: true,
    icon: 'trash',
    title: 'Papirkurv',
  },
];
