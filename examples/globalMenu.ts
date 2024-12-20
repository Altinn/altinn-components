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
      badge: {
        color: 'alert',
        label: '4',
      },
    },
    {
      id: 'access',
      groupId: 'apps',
      size: 'lg',
      icon: 'bookmark',
      title: 'Tilganger',
      badge: {
        color: 'alert',
        label: '2',
      },
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
  ],
};
