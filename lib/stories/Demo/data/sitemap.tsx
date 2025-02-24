import type { MenuItemProps } from '../../../components';
import { companyMenuItems, inboxMenuItems, userMenuItems } from './';
import {
  Buildings2Icon,
  ChatExclamationmarkIcon,
  HandshakeIcon, InboxIcon,
  MenuGridIcon,
  PersonCircleIcon
} from "@navikt/aksel-icons";
import {categoryItems} from "../../../../examples";

export const sitemap: MenuItemProps[] = [
  {
    id: 'inbox',
    groupId: 'apps',
    size: 'lg',
    icon: InboxIcon,
    title: 'Innboks',
    badge: {
      label: '4',
    },
    iconBadge: {
      size: 'xs',
      theme: 'base',
      color: 'alert',
      label: '!',
    },
    items: inboxMenuItems,
  },
  {
    id: 'category',
    groupId: 'apps',
    size: 'lg',
    icon: MenuGridIcon,
    title: 'Alle skjema',
    items: categoryItems,
  },
  {
    id: 'company',
    groupId: 'apps',
    size: 'lg',
    icon: HandshakeIcon,
    title: 'Tilganger',
    iconBadge: {
      label: '2',
      size: 'xs',
      theme: 'base',
      color: 'alert',
    },
    items: companyMenuItems,
  },
  {
    id: 'user',
    groupId: 'x',
    size: 'sm',
    icon: PersonCircleIcon,
    title: 'Din profil',
    items: userMenuItems,
  },
  {
    id: 'startup',
    groupId: 'help',
    color: 'neutral',
    size: 'sm',
    icon: Buildings2Icon,
    title: 'Starte og drive bedrift',
  },
  {
    id: 'help',
    groupId: 'help',
    size: 'sm',
    color: 'neutral',
    icon: ChatExclamationmarkIcon,
    title: 'Trenger du hjelp?',
  },
];
