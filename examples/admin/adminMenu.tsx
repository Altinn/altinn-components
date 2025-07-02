import {
  BellIcon,
  BucketIcon,
  ClockDashedIcon,
  CogIcon,
  DatabaseIcon,
  LinkIcon,
  PadlockUnlockedIcon,
  PersonGroupIcon,
} from '@navikt/aksel-icons';
import type { MenuItemProps, MenuProps } from '../../lib';

export const adminMenuItems: MenuItemProps[] = [
  {
    id: 'admin',
    groupId: '1',
    size: 'lg',
    title: 'Administrasjon',
    icon: {
      type: 'company',
      name: 'Bergen Bar',
    },
  },
  {
    id: 'users',
    groupId: '3',
    icon: PersonGroupIcon,
    title: 'Brukere',
  },
  {
    id: 'access',
    groupId: '3',
    icon: PadlockUnlockedIcon,
    title: 'Tilganger',
  },
  {
    id: 'requests',
    type: 'company',
    groupId: '4',
    icon: BellIcon,
    title: 'Forepørsler',
  },
  {
    id: 'api-settings',
    type: 'company',
    groupId: '5',
    icon: BucketIcon,
    title: 'Api og systemtilgang',
  },
  {
    id: 'reverse-access',
    type: 'company',
    groupId: '5',
    icon: LinkIcon,
    title: 'Våre fullmakter hos andre',
  },
  {
    id: 'client-admin',
    type: 'company',
    groupId: '5',
    icon: DatabaseIcon,
    title: 'Klientadministrasjon',
  },
  {
    id: 'settings',
    groupId: '9',
    icon: CogIcon,
    title: 'Innstillinger',
  },
  {
    id: 'activity-log',
    groupId: '10',
    icon: ClockDashedIcon,
    title: 'Aktivitetslogg',
  },
];

export const adminMenu: MenuProps = {
  groups: {},
  color: 'company',
  defaultIconTheme: 'default',
  items: adminMenuItems,
};
