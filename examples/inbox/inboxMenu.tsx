import {
  ArchiveIcon,
  BookmarkIcon,
  DocPencilIcon,
  FileCheckmarkIcon,
  InboxFillIcon,
  TrashIcon,
} from '@navikt/aksel-icons';
import type { MenuItemProps, MenuProps } from '../../lib';

export const inboxMenuItems: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: '1',
    size: 'lg',
    icon: { svgElement: InboxFillIcon, theme: 'base' },
    iconBadge: {
      size: 'xs',
      theme: 'base',
      color: 'alert',
      label: '2 uleste',
    },
    selected: true,
    title: 'Innboks',
    badge: {
      label: '12',
    },
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
    title: 'Arkivert',
  },
  {
    id: 'trash',
    groupId: '4',
    //    disabled: true,
    icon: TrashIcon,
    title: 'Papirkurv',
  },
];

export const inboxMenu: MenuProps = {
  groups: {},
  defaultIconTheme: 'default',
  items: inboxMenuItems,
};
