import {
  ArchiveIcon,
  BookmarkIcon,
  DocPencilIcon,
  FileCheckmarkIcon,
  InboxFillIcon,
  TrashIcon,
} from '@navikt/aksel-icons';
import type { MenuProps } from '../lib';

export const inboxMenu: MenuProps = {
  groups: {},
  defaultIconTheme: 'default',
  items: [
    {
      id: '1',
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
      id: '2',
      groupId: '2',
      icon: DocPencilIcon,
      title: 'Utkast',
      badge: {
        label: '2',
      },
    },
    {
      id: '3',
      groupId: '2',
      icon: FileCheckmarkIcon,
      title: 'Sendt',
    },
    {
      id: '4',
      groupId: '3',
      icon: BookmarkIcon,
      title: 'Lagrede søk',
      badge: {
        label: '5',
      },
    },
    {
      id: '5',
      groupId: '4',
      icon: ArchiveIcon,
      title: 'Arkivert',
    },
    {
      id: '6',
      groupId: '4',
      disabled: true,
      icon: TrashIcon,
      title: 'Papirkurv',
    },
  ],
};
