import {
  ArchiveIcon,
  BookmarkIcon,
  Buildings2Icon,
  ChatExclamationmarkIcon,
  DocPencilIcon,
  FileCheckmarkIcon,
  HandshakeFillIcon,
  InboxFillIcon,
  MagnifyingGlassIcon,
  MenuGridIcon,
  PersonCircleIcon,
  TrashIcon,
} from '@navikt/aksel-icons';
import { accountMenu } from '../';
import type { AccountMenuProps, MenuProps } from '../../lib';

/** Items that go somewhere are links: pass `href`, or `as` for a router link. */
export const desktopMenuItems: MenuProps['items'] = [
  {
    id: 'inbox',
    groupId: 'apps',
    size: 'lg',
    icon: InboxFillIcon,
    title: 'Innboks',
    href: '#inbox',
    badge: { label: 'Beta', color: 'neutral', variant: 'base' },

    selected: true,
  },
  {
    id: 'admin',
    groupId: 'apps',
    size: 'lg',
    icon: HandshakeFillIcon,
    title: 'Fullmakter',
    href: '#access',
  },
  {
    id: 'forms',
    groupId: 'apps',
    size: 'lg',
    icon: MenuGridIcon,
    title: 'Alle skjema',
    href: '#forms',
  },
  {
    id: 'search',
    groupId: 'apps',
    size: 'lg',
    icon: MagnifyingGlassIcon,
    title: 'Søk i Altinn',
    href: '#search',
  },
  {
    id: 'startup',
    groupId: 'help',
    size: 'sm',
    icon: Buildings2Icon,
    title: 'Starte og drive bedrift',
    href: '#start-business',
  },
  {
    id: 'help',
    groupId: 'help',
    size: 'sm',
    icon: ChatExclamationmarkIcon,
    title: 'Trenger du hjelp?',
    href: '#help',
  },
  {
    id: 'profile',
    groupId: 'profile',
    size: 'sm',
    icon: PersonCircleIcon,
    title: 'Min profil',
    href: '#profile',
  },
];

export const desktopMenu: MenuProps = {
  groups: {
    apps: {
      divider: true,
    },
    help: {},
    profile: {
      title: 'Logget inn som Mathias Dyngeland',
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
          groupId: '2',
          icon: DocPencilIcon,
          title: 'Utkast',
          href: '#drafts',
          badge: {
            label: '2',
          },
        },
        {
          id: 'sent',
          groupId: '2',
          icon: FileCheckmarkIcon,
          title: 'Sendt',
          href: '#sent',
          badge: {
            label: '3',
          },
        },
        {
          id: 'bookmarks',
          groupId: '3',
          icon: BookmarkIcon,
          title: 'Lagrede søk',
          href: '#saved-searches',
          badge: {
            label: '5',
          },
        },
        {
          id: 'archive',
          groupId: '4',
          icon: ArchiveIcon,
          title: 'Arkiv',
          href: '#archive',
        },
        {
          id: 'trash',
          groupId: '4',
          icon: TrashIcon,
          title: 'Papirkurv',
          href: '#bin',
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
