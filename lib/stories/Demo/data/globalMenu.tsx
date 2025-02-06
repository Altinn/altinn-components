import type { GlobalMenuProps } from '../../../components';
import { accountMenu } from './';
import {BookmarkIcon, Buildings2Icon, ChatExclamationmarkIcon, InboxIcon, MenuGridIcon} from "@navikt/aksel-icons";

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
      icon: InboxIcon,
      title: 'Innboks',
      badge: {
        label: '4',
      },
    },
    {
      id: 'access',
      groupId: 'apps',
      size: 'lg',
      icon: BookmarkIcon,
      title: 'Tilganger',
      badge: {
        label: '2',
      },
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
      color: 'neutral',
      size: 'sm',
      icon: Buildings2Icon,
      title: 'Starte og drive bedrift',
    },
    {
      id: 'help',
      groupId: 'help',
      size: 'sm',
      color: 'neutral',
      icon: ChatExclamationmarkIcon,
      title: 'Trenger du hjelp?',
    },
  ],
};
