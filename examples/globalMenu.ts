import type { GlobalMenuProps } from '../lib';
import { accountMenu } from './index';

export const globalMenu: GlobalMenuProps = {
  ...accountMenu,
  menuLabel: 'Meny',
  backLabel: 'Tilbake',
  logoutButton: { label: 'Logg ut' },
  changeLabel: 'Endre',
  groups: {
    apps: {
      defaultIconTheme: 'surface',
      divider: true,
    },
  },
  items: [
    {
      id: 'inbox',
      groupId: 'apps',
      size: 'lg',
      icon: 'inbox',
      title: 'Innboks',
      selected: true,
      badge: {
        label: '4',
      },
      iconBadge: {
        color: 'alert',
        theme: 'base',
        size: 'xs',
        label: '2',
      },
    },
    {
      id: 'access',
      groupId: 'apps',
      size: 'lg',
      icon: 'bookmark',
      title: 'Tilganger',
    },
    {
      id: 'access',
      groupId: 'apps',
      size: 'lg',
      icon: 'menu-grid',
      title: 'Alle skjema',
    },
    {
      id: 'startup',
      groupId: 'help',
      size: 'sm',
      icon: 'buildings2',
      title: 'Starte og drive bedrift',
    },
    {
      id: 'help',
      groupId: 'help',
      size: 'sm',
      icon: 'chat-exclamationmark',
      title: 'Trenger du hjelp?',
    },
  ],
};
