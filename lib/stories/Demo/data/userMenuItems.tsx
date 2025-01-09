import type { MenuItemProps } from '../../../components';

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
    icon: 'person-circle',
    title: 'Innstillinger',
  },
  {
    id: 'accounts',
    groupId: '3',
    icon: 'handshake',
    title: 'Tilganger',
  },
  {
    id: 'notifications',
    groupId: '3',
    icon: 'bell',
    title: 'Varslinger',
  },
  {
    id: 'favourites',
    groupId: '3',
    icon: 'bookmark',
    title: 'Favoritter',
  },
  {
    id: 'log',
    groupId: '5',
    icon: 'clock-dashed',
    title: 'Aktivitetslogg',
  },
];
