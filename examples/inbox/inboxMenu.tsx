import {
  ArchiveIcon,
  BookmarkIcon,
  DocPencilIcon,
  FileCheckmarkIcon,
  InboxFillIcon,
  InformationSquareIcon,
  LeaveIcon,
  PlusIcon,
  TrashIcon,
} from '@navikt/aksel-icons';
import type { MenuItemProps, MenuProps } from '../../lib';

/** Items that go somewhere are links: pass `href`, or `as` for a router link. */
export const inboxMenuItems: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: '1',
    size: 'lg',
    icon: InboxFillIcon,
    selected: true,
    title: 'Innboks',
    href: '#inbox',
  },
  {
    id: 'compose',
    groupId: '2',
    icon: PlusIcon,
    title: 'Nytt skjema',
    href: '#new-form',
  },
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
];

export const inboxBetaMenuItems: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: '1',
    size: 'lg',
    icon: InboxFillIcon,
    selected: true,
    title: 'Innboks',
    href: '#inbox',
    'data-testid': 'menu-item-inbox',
  },
  {
    id: 'drafts',
    groupId: '2',
    icon: DocPencilIcon,
    title: 'Utkast',
    href: '#drafts',
    'data-testid': 'menu-item-draft',
  },
  {
    id: 'sent',
    groupId: '2',
    icon: FileCheckmarkIcon,
    title: 'Sendt',
    href: '#sent',
    'data-testid': 'menu-item-sent',
  },
  {
    id: 'archive',
    groupId: '4',
    icon: ArchiveIcon,
    title: 'Arkiv',
    href: '#archive',
    'data-testid': 'menu-item-archive',
  },
  {
    id: 'trash',
    groupId: '4',
    icon: TrashIcon,
    title: 'Papirkurv',
    href: '#bin',
    'data-testid': 'menu-item-bin',
  },
  {
    id: 'compose',
    groupId: 'shortcuts',
    icon: PlusIcon,
    title: 'Nytt skjema',
    href: '#new-form',
  },
  {
    id: 'bookmarks',
    groupId: 'shortcuts',
    icon: BookmarkIcon,
    title: 'Lagrede søk',
    href: '#saved-searches',
    'data-testid': 'menu-item-bookmarks',
  },
  {
    groupId: 'shortcuts-2',
    size: 'sm',
    id: 'about-inbox',
    icon: InformationSquareIcon,
    title: 'Om ny innboks',
    href: '#about-inbox',
  },
  {
    groupId: 'shortcuts-2',
    size: 'sm',
    id: 'exit-beta',
    icon: LeaveIcon,
    title: 'Avslutt beta',
    href: '#exit-beta',
  },
];

export const inboxMenu: MenuProps = {
  variant: 'tinted',
  size: 'md',
  groups: {
    shortcuts: {
      title: 'Snarveier',
      size: 'sm',
    },
  },
  items: inboxMenuItems,
};
