import type { MenuItemProps } from '../../../components';

export const profileMenuItems: MenuItemProps[] = [
  {
    id: 'profile',
    groupId: '1',
    size: 'lg',
    title: 'Profil',
  },
  {
    id: 'profil',
    groupId: '2',
    icon: 'buildings2',
    title: 'Firmaprofil',
  },
  {
    id: 'brukere',
    groupId: '3',
    icon: 'person-group',
    title: 'Brukere',
  },
  {
    id: 'grupper',
    groupId: '3',
    icon: 'hexagon-grid',
    title: 'Grupper',
  },
  {
    id: 'logg',
    groupId: '4',
    icon: 'clock-dashed',
    title: 'Aktivitetslogg',
  },
];
