import { BellIcon, ClockDashedIcon, CogIcon, HandshakeIcon, HeartIcon, PadlockUnlockedIcon } from '@navikt/aksel-icons';
import type { MenuItemProps, MenuProps } from '../../lib';

export const profileMenuItems: MenuItemProps[] = [
  {
    id: 'profile',
    groupId: '1',
    size: 'lg',
    title: 'Min profil',
    icon: {
      name: 'Mathias Dyngeland',
    },
  },
  {
    id: 'accounts',
    groupId: '2',
    icon: HeartIcon,
    title: 'Mine aktører',
  },
  {
    id: 'alerts',
    groupId: '2',
    icon: BellIcon,
    title: 'Mine varslinger',
  },
  {
    id: 'users',
    groupId: '4',
    icon: HandshakeIcon,
    title: 'Gi fullmakt',
  },
  {
    id: 'access',
    groupId: '4',
    icon: PadlockUnlockedIcon,
    title: 'Gi tilgang',
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

export const profileMenu: MenuProps = {
  groups: {},
  color: 'person',
  variant: 'subtle',
  defaultIconTheme: 'default',
  items: profileMenuItems,
};
