import type { MenuItemProps } from '../../../components';
import {BellIcon, BookmarkIcon, ClockDashedIcon, HandshakeIcon, PersonCircleIcon} from "@navikt/aksel-icons";

export const userMenuItems: MenuItemProps[] = [
  {
    id: 'user',
    groupId: '1',
    size: 'lg',
    title: 'Din profil',
  },
  {
    id: 'settings',
    groupId: '2',
    icon: PersonCircleIcon,
    title: 'Innstillinger',
  },
  {
    id: 'accounts',
    groupId: '3',
    icon: HandshakeIcon,
    title: 'Tilganger',
  },
  {
    id: 'notifications',
    groupId: '3',
    icon: BellIcon,
    title: 'Varslinger',
  },
  {
    id: 'favourites',
    groupId: '3',
    icon: BookmarkIcon,
    title: 'Favoritter',
  },
  {
    id: 'log',
    groupId: '5',
    icon: ClockDashedIcon,
    title: 'Aktivitetslogg',
  },
];
