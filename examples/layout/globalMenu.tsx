import {
  ArchiveIcon,
  BellIcon,
  Buildings2Icon,
  ChatExclamationmarkIcon,
  DocPencilIcon,
  FileCheckmarkIcon,
  InboxFillIcon,
  MagnifyingGlassIcon,
  MenuGridIcon,
  PadlockLockedFillIcon,
  PersonCircleIcon,
  PersonGroupIcon,
  TrashIcon,
} from '@navikt/aksel-icons';
import { accountMenu } from '../';
import type { AccountMenuProps, MenuProps } from '../../lib';

export const desktopMenuItems: MenuProps['items'] = [
  {
    id: 'inbox',
    groupId: 'apps',
    size: 'lg',
    icon: InboxFillIcon,
    title: 'Innboks',
    selected: true,
  },
  {
    id: 'admin',
    groupId: 'apps',
    size: 'lg',
    icon: PadlockLockedFillIcon,
    title: 'Tilgangsstyring',
  },
  {
    id: 'forms',
    groupId: 'apps',
    size: 'lg',
    icon: MenuGridIcon,
    title: 'Alle skjema',
  },
  {
    id: 'search',
    groupId: 'apps',
    size: 'lg',
    icon: MagnifyingGlassIcon,
    title: 'Søk på altinn.no',
  },
  {
    id: 'profile',
    groupId: 'profile',
    size: 'sm',
    icon: PersonCircleIcon,
    title: 'Din profil',
  },
  {
    id: 'actors',
    groupId: 'profile',
    size: 'sm',
    icon: PersonGroupIcon,
    title: 'Aktører og favoritter',
  },
  {
    id: 'notifications',
    groupId: 'profile',
    size: 'sm',
    icon: BellIcon,
    title: 'Varslingsadresser',
  },
  {
    id: 'bookmarks',
    groupId: 'profile',
    size: 'sm',
    icon: MagnifyingGlassIcon,
    title: 'Lagrede søk',
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
];

export const desktopMenu: MenuProps = {
  groups: {
    apps: {},
    // Inbox folders (mobile) share the inbox card without dividers
    inbox: {
      divider: false,
    },
    profile: {
      title: 'Logget inn som Mathias Dyngeland',
      divider: false,
    },
    help: {
      divider: true,
    },
  },
  items: desktopMenuItems,
};

const mobileMenuItems = desktopMenu.items?.map((item) => {
  if (item.id === 'inbox') {
    return {
      ...item,
      expanded: true,
      items: [
        {
          id: 'drafts',
          groupId: 'inbox',
          icon: DocPencilIcon,
          title: 'Utkast',
          badge: {
            label: '2',
          },
        },
        {
          id: 'sent',
          groupId: 'inbox',
          icon: FileCheckmarkIcon,
          title: 'Sendt',
          badge: {
            label: '3',
          },
        },
        {
          id: 'archive',
          groupId: 'inbox',
          icon: ArchiveIcon,
          title: 'Arkivert',
        },
        {
          id: 'trash',
          groupId: 'inbox',
          icon: TrashIcon,
          title: 'Papirkurv',
        },
      ],
    };
  }
  return item;
});

export const mobileMenu = {
  ...desktopMenu,
  items: mobileMenuItems,
};

export const globalMenu = {
  accountMenu: {
    ...accountMenu,
    virtualized: true,
  } as unknown as AccountMenuProps,
  menu: desktopMenu,
  currentEndUserLabel: 'Logget inn som Mathias Dyngeland',
  menuLabel: 'Meny',
  backLabel: 'Tilbake',
  logoutButton: { label: 'Logg ut' },
  changeLabel: 'Endre',
};
