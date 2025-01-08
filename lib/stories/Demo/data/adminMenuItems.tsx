import type { MenuItemProps } from '../../../components';

export const adminMenuItems: MenuItemProps[] = [
  {
    id: 'admin',
    groupId: '1',
    size: 'lg',
    title: 'Administrasjon',
  },
  {
    id: 'profil',
    groupId: '2',
    icon: 'buildings2',
    title: 'Firmaprofil',
  },
  {
    id: 'users',
    groupId: '3',
    icon: 'person-group',
    title: 'Brukere',
  },
  {
    id: 'groups',
    groupId: '3',
    icon: 'hexagon-grid',
    title: 'Grupper',
  },
  {
    id: 'log',
    groupId: '4',
    icon: 'clock-dashed',
    title: 'Aktivitetslogg',
  },
];
