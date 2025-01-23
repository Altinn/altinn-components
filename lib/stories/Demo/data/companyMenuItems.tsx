import type { MenuItemProps } from '../../../components';
import {companyAccessItems } from "./companyAccess"
import {companyUsers } from "./companyUsers"

export const companyMenuItems: MenuItemProps[] = [
  {
    id: 'company',
    groupId: '1',
    size: 'lg',
    title: 'Tilganger',
  },
  {
    id: 'users',
    groupId: '3',
    icon: 'person-group',
    title: 'Brukere',
    items: companyUsers
  },
  {
    id: 'access',
    groupId: '3',
    icon: 'handshake',
    title: 'Fullmakter',
    items: companyAccessItems
  },
  {
    id: 'requests',
    groupId: '3',
    icon: 'handshake',
    title: 'Forespørsler',
  },
  {
    id: 'settings',
    groupId: '4',
    icon: 'cog',
    title: 'Api og systemtilgang',
  },
  {
    id: 'settings',
    groupId: '4',
    icon: 'cog',
    title: 'Våre fullmakter hos andre',
  },
  {
    id: 'settings',
    groupId: '4',
    icon: 'cog',
    title: 'Klientadministrasjon',
  },
  {
    id: 'settings',
    groupId: '5',
    icon: 'cog',
    title: 'Innstillinger',
  },
  {
    id: 'log',
    groupId: '6',
    icon: 'clock-dashed',
    title: 'Aktivitetslogg',
  },
];
