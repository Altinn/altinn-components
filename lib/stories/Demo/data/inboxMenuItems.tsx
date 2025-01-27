import type { MenuItemProps } from "../../../../components";

export const inboxMenuItems: MenuItemProps[] = [
  {
    id: "inbox",
    groupId: "1",
    size: "lg",
    icon: {
      name: "inbox",
      theme: "base",
      variant: "solid",
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
    icon: "doc-pencil",
    title: "Utkast",
    badge: {
      label: "2",
    },
  },
  {
    id: "sent",
    groupId: "2",
    icon: "file-checkmark",
    title: "Sendt",
  },
  {
    id: "bookmarks",
    groupId: "3",
    icon: "bookmark",
    title: "Lagrede søk",
    badge: {
      label: "5",
    },
  },
  {
    id: "archive",
    groupId: "4",
    icon: "archive",
    title: "Arkivert",
    badge: {
      label: "99+",
    },
  },
  {
    id: "trash",
    groupId: "4",
    icon: "trash",
    title: "Papirkurv",
    badge: {
      label: "15",
    },
  },
];
