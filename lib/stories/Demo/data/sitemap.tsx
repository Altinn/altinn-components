import type { MenuItemProps } from '../../../components';
import { inboxMenuItems, profileMenuItems, adminMenuItems, categoryItems } from './';

export const sitemap: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: 'apps',
    size: 'lg',
    icon: 'inbox',
    title: 'Innboks',
    badge: {
      label: '4',
    },
    alertBadge: {
      label: '2',
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
    id: 'admin',
    groupId: 'apps',
    size: 'lg',
    icon: 'handshake',
    title: 'Tilganger',
    alertBadge: {
      label: '2',
    },
    items: adminMenuItems,
  },
  {
    id: 'profile',
    groupId: 'apps',
    size: 'lg',
    icon: 'person-circle',
    title: 'Profil',
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
