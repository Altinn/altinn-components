import type { MenuItemProps } from '../../../components';
import { PersonGroupIcon, HandshakeIcon, CogIcon, ClockDashedIcon } from '@navikt/aksel-icons';
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
    icon: PersonGroupIcon,
    title: 'Brukere',
    items: companyUsers
  },
  {
    id: 'access',
    groupId: '3',
    icon: HandshakeIcon,
    title: 'Fullmakter',
    items: companyAccessItems
  },
  {
    id: 'requests',
    groupId: '3',
    icon: HandshakeIcon,
    title: 'Forespørsler',
  },
  {
    id: 'settings',
    groupId: '4',
    icon: CogIcon,
    title: 'Api og systemtilgang',
  },
  {
    id: 'settings',
    groupId: '4',
    icon: CogIcon,
    title: 'Våre fullmakter hos andre',
  },
  {
    id: 'settings',
    groupId: '4',
    icon: CogIcon,
    title: 'Klientadministrasjon',
  },
  {
    id: 'settings',
    groupId: '5',
    icon: CogIcon,
    title: 'Innstillinger',
  },
  {
    id: 'log',
    groupId: '6',
    icon: ClockDashedIcon,
    title: 'Aktivitetslogg',
  },
];
