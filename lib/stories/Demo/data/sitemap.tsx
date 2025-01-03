import type { MenuItemProps } from '../../../components';
import { inboxMenuItems, profileMenuItems, categoryItems } from './';

export const sitemap: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: 'apps',
    size: 'lg',
    icon: 'inbox',
    title: 'Innboks',
    badge: {
      color: 'alert',
      label: '4',
    },
    items: inboxMenuItems,
  },
  {
    id: 'category',
    groupId: 'apps',
    size: 'lg',
    icon: 'menu-grid',
    title: 'Alle skjema',
    items: categoryItems,
  },
  {
    id: 'profile',
    groupId: 'apps',
    size: 'lg',
    icon: 'person-circle',
    title: 'Profil',
    badge: {
      color: 'alert',
      label: '2',
    },
    items: profileMenuItems,
  },
  {
    id: 'startup',
    groupId: 'help',
    color: 'neutral',
    size: 'sm',
    icon: 'buildings2',
    title: 'Starte og drive bedrift',
  },
  {
    id: 'help',
    groupId: 'help',
    size: 'sm',
    color: 'neutral',
    icon: 'chat-exclamationmark',
    title: 'Trenger du hjelp?',
  },
];
