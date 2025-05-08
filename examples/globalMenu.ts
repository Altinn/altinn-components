import {
  BellIcon,
  BookmarkIcon,
  Buildings2Icon,
  ChatExclamationmarkIcon,
  HeartIcon,
  InboxIcon,
  MenuGridIcon,
} from '@navikt/aksel-icons';
import type { GlobalMenuProps } from '../lib';
import { accountMenu } from './index';

export const globalMenu: GlobalMenuProps = {
  ...accountMenu,
  menuItemsVirtual: {
    isVirtualized: true,
    scrollRefStyles: {
      maxHeight: 'calc(90vh - 8rem)',
    },
  },
  currentEndUserLabel: 'Logget inn som Mathias Dyngeland',
  menuLabel: 'Meny',
  backLabel: 'Tilbake',
  logoutButton: { label: 'Logg ut' },
  changeLabel: 'Endre',
  groups: {
    apps: {
      defaultIconTheme: 'surface',
      divider: true,
    },
    profile: {
      defaultItemColor: 'person',
    },
  },
  items: [
    {
      id: 'inbox',
      groupId: 'apps',
      size: 'lg',
      icon: InboxIcon,
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
      icon: BookmarkIcon,
      title: 'Tilganger',
    },
    {
      id: 'access',
      groupId: 'apps',
      size: 'lg',
      icon: MenuGridIcon,
      title: 'Alle skjema',
    },
    {
      id: 'startup',
      groupId: 'help',
      size: 'sm',
      icon: Buildings2Icon,
      title: 'Starte og drive bedrift',
    },
    {
      id: 'help',
      groupId: 'help',
      size: 'sm',
      icon: ChatExclamationmarkIcon,
      title: 'Trenger du hjelp?',
    },
    {
      id: 'profile',
      groupId: 'profile',
      size: 'sm',
      avatar: {
        name: 'Mathias Dyngeland',
      },
      title: 'Min profil',
    },
    {
      id: 'profile',
      groupId: 'profile',
      size: 'sm',
      icon: HeartIcon,
      title: 'Aktører og favoritter',
    },
    {
      id: 'profile',
      groupId: 'profile',
      size: 'sm',
      icon: BellIcon,
      title: 'Varslingsinnstillinger',
    },
  ],
};
