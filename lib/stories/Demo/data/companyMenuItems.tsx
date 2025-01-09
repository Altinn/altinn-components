import type { MenuItemProps } from '../../../components';

export const companyMenuItems: MenuItemProps[] = [
  {
    id: 'company',
    groupId: '1',
    size: 'lg',
    title: 'Administrasjon',
  },
  {
    id: 'users',
    groupId: '3',
    icon: 'person-group',
    title: 'Brukere',
  },
  {
    id: 'access',
    groupId: '3',
    icon: 'handshake',
    title: 'Fullmakter',
  },
  {
    id: 'settings',
    groupId: '4',
    icon: 'cog',
    title: 'Innstillinger',
  },
  {
    id: 'log',
    groupId: '5',
    icon: 'clock-dashed',
    title: 'Aktivitetslogg',
  },
];
