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
import { Badge, type MenuItemProps, type MenuProps } from '../../lib';

export const inboxMenuItems: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: '1',
    size: 'lg',
    icon: { svgElement: InboxFillIcon, theme: 'base' },
    selected: true,
    title: (
      <>
        Innboks <Badge label="1" />
      </>
    ),
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
    icon: { svgElement: InboxFillIcon, theme: 'base' },
    selected: true,
    title: (
      <>
        Innboks <Badge label="Beta" />
      </>
    ),
    dataTestId: 'menu-item-inbox',
  },
  {
    id: 'compose',
    groupId: '2',
    icon: PlusIcon,
    title: 'Nytt skjema',
    dataTestId: 'menu-item-new-schema',
  },
  {
    id: 'drafts',
    groupId: '2',
    icon: DocPencilIcon,
    title: 'Utkast',
    dataTestId: 'menu-item-draft',
  },
  {
    id: 'sent',
    groupId: '2',
    icon: FileCheckmarkIcon,
    title: 'Sendt',
    dataTestId: 'menu-item-sent',
  },
  {
    id: 'bookmarks',
    groupId: '3',
    icon: BookmarkIcon,
    title: 'Lagrede søk',
    dataTestId: 'menu-item-bookmarks',
  },
  {
    id: 'archive',
    groupId: '4',
    icon: ArchiveIcon,
    title: 'Arkiv',
    dataTestId: 'menu-item-archive',
  },
  {
    id: 'trash',
    groupId: '4',
    icon: TrashIcon,
    title: 'Papirkurv',
    dataTestId: 'menu-item-bin',
  },
  {
    groupId: 'shortcuts',
    id: 'about-inbox',
    size: 'sm',
    icon: InformationSquareIcon,
    title: 'Om ny innboks',
  },
  {
    groupId: 'shortcuts',
    id: 'exit-beta',
    size: 'sm',
    icon: LeaveIcon,
    title: 'Avslutt beta',
  },
];

export const inboxMenu: MenuProps = {
  variant: 'subtle',
  groups: {
    shortcuts: {
      title: 'Snarveier',
      defaultIconTheme: 'transparent',
      defaultItemSize: 'sm',
    },
  },
  defaultIconTheme: 'default',
  items: inboxMenuItems,
};
