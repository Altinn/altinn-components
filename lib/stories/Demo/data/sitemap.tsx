import type { MenuItemProps } from '../../../components';
import { categoryItems, companyMenuItems, inboxMenuItems, userMenuItems } from './';

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
    id: 'company',
    groupId: 'apps',
    size: 'lg',
    icon: 'handshake',
    title: 'Tilganger',
    alertBadge: {
      label: '2',
    },
    items: companyMenuItems,
  },
  {
    id: 'user',
    groupId: 'x',
    size: 'sm',
    icon: 'person-circle',
    title: 'Din profil',
    items: userMenuItems,
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
