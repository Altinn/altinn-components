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

export const inboxMenuItems: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: '1',
    size: 'lg',
    icon: InboxFillIcon,
    selected: true,
    title: 'Innboks',
  },
  {
    id: 'compose',
    groupId: '2',
    icon: PlusIcon,
    title: 'Nytt skjema',
  },
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
];

export const inboxBetaMenuItems: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: '1',
    size: 'lg',
    icon: InboxFillIcon,
    selected: true,
    title: 'Innboks',
    'data-testid': 'menu-item-inbox',
  },
  {
    id: 'drafts',
    groupId: '2',
    icon: DocPencilIcon,
    title: 'Utkast',
    'data-testid': 'menu-item-draft',
  },
  {
    id: 'sent',
    groupId: '2',
    icon: FileCheckmarkIcon,
    title: 'Sendt',
    'data-testid': 'menu-item-sent',
  },
  {
    id: 'archive',
    groupId: '4',
    icon: ArchiveIcon,
    title: 'Arkiv',
    'data-testid': 'menu-item-archive',
  },
  {
    id: 'trash',
    groupId: '4',
    icon: TrashIcon,
    title: 'Papirkurv',
    'data-testid': 'menu-item-bin',
  },
  {
    id: 'compose',
    groupId: 'shortcuts',
    icon: PlusIcon,
    title: 'Nytt skjema',
  },
  {
    id: 'bookmarks',
    groupId: 'shortcuts',
    icon: BookmarkIcon,
    title: 'Lagrede søk',
    'data-testid': 'menu-item-bookmarks',
  },
  {
    groupId: 'shortcuts-2',
    size: 'sm',
    id: 'about-inbox',
    icon: InformationSquareIcon,
    title: 'Om ny innboks',
  },
  {
    groupId: 'shortcuts-2',
    size: 'sm',
    id: 'exit-beta',
    icon: LeaveIcon,
    title: 'Avslutt beta',
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
