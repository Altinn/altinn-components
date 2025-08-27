import {
  ArchiveIcon,
  BellIcon,
  BookmarkIcon,
  Buildings2Icon,
  ChatExclamationmarkIcon,
  DocPencilIcon,
  FileCheckmarkIcon,
  HandshakeFillIcon,
  HeartIcon,
  InboxFillIcon,
  MenuGridIcon,
  TrashIcon,
} from '@navikt/aksel-icons';
import { accountMenu } from '../';
import type { AccountMenuProps, GlobalMenuProps, MenuProps } from '../../lib';

export const desktopMenu: MenuProps = {
  defaultIconTheme: 'surface',
  groups: {
    apps: {
      divider: true,
    },
    help: {
      defaultIconTheme: 'transparent',
    },
    profile: {
      defaultIconTheme: 'transparent',
      defaultItemColor: 'person',
    },
  },
  items: [
    {
      id: 'inbox',
      groupId: 'apps',
      size: 'lg',
      icon: InboxFillIcon,
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
      icon: HandshakeFillIcon,
      title: 'Fullmakter',
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
      icon: {
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
      title: 'Varslinger',
    },
  ],
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
          badge: {
            label: '2',
          },
        },
        {
          id: 'sent',
          groupId: '2',
          icon: FileCheckmarkIcon,
          title: 'Sendt',
          badge: {
            label: '3',
          },
        },
        {
          id: 'bookmarks',
          groupId: '3',
          icon: BookmarkIcon,
          title: 'Lagrede søk',
          badge: {
            label: '5',
          },
        },
        {
          id: 'archive',
          groupId: '4',
          icon: ArchiveIcon,
          title: 'Arkiv',
        },
        {
          id: 'trash',
          groupId: '4',
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

export const globalMenu: GlobalMenuProps = {
  accountMenu: {
    ...(accountMenu as AccountMenuProps),
    menuItemsVirtual: {
      isVirtualized: true,
      scrollRefStyles: {
        minWidth: '20rem',
        maxHeight: 'calc(90vh - 8rem)',
        marginBottom: '.5rem',
      },
    },
  },
  menu: desktopMenu,
  currentEndUserLabel: 'Logget inn som Mathias Dyngeland',
  menuLabel: 'Meny',
  backLabel: 'Tilbake',
  logoutButton: { label: 'Logg ut' },
  changeLabel: 'Endre',
};
