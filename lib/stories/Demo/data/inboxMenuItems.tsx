import type { MenuItemProps } from "../../../components";
import { InboxFillIcon, DocPencilIcon, FileCheckmarkIcon, BookmarkIcon, ArchiveIcon, TrashIcon } from "@navikt/aksel-icons";

export const inboxMenuItems: MenuItemProps[] = [
  {
    id: "inbox",
    groupId: "1",
    size: "lg",
    icon: {
      svgElement: InboxFillIcon,
      theme: "base",
    },
    iconBadge: {
      size: "xs",
      color: "alert",
      theme: "base",
      label: "2 uleste",
    },
    selected: true,
    title: "Innboks",
    badge: {
      label: "12",
    },
  },
  {
    id: "drafts",
    groupId: "2",
    icon: DocPencilIcon,
    title: "Utkast",
    badge: {
      label: "2",
    },
  },
  {
    id: "sent",
    groupId: "2",
    icon: FileCheckmarkIcon,
    title: "Sendt",
  },
  {
    id: "bookmarks",
    groupId: "3",
    icon: BookmarkIcon,
    title: "Lagrede søk",
    badge: {
      label: "5",
    },
  },
  {
    id: "archive",
    groupId: "4",
    icon: ArchiveIcon,
    title: "Arkivert",
    badge: {
      label: "99+",
    },
  },
  {
    id: "trash",
    groupId: "4",
    icon: TrashIcon,
    title: "Papirkurv",
    badge: {
      label: "15",
    },
  },
];
