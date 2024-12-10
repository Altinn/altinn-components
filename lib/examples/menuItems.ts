import type { MenuItemProps } from '../components';

export const menuItems: MenuItemProps[] = [
  {
    id: '1',
    groupId: 'a1',
    avatar: {
      type: 'person',
      name: 'Dolly Duck',
    },
    title: 'Dolly Duck',
    badge: {
      label: '15',
    },
  },
  {
    id: '2',
    groupId: 'a2',
    avatar: {
      type: 'company',
      name: 'Bergen Bar',
    },
    title: 'Bergen Bar',
    badge: {
      label: '21',
    },
  },
  {
    id: '3',
    groupId: 'a2',
    avatar: {
      type: 'company',
      name: 'Sportsklubben Brann',
    },
    title: 'Sportsklubben Brann',
    badge: {
      label: '4',
    },
  },
  {
    id: '4',
    groupId: 'a3',
    avatarGroup: {
      defaultType: 'company',
      items: [
        {
          name: 'Sportsklubben Brann',
        },
        {
          name: 'Bergen Bar',
        },
      ],
    },
    title: 'Alle virksomheter',
    badge: {
      label: '45',
    },
  },
  {
    id: '5',
    groupId: 'b1',
    avatar: {
      type: 'company',
      name: 'Jensens Laks',
    },
    title: 'Jensens laks',
  },
  {
    id: '6',
    groupId: 'b1',
    avatar: {
      type: 'company',
      name: 'Haralds gym',
    },
    title: 'Haralds gym',
    badge: {
      label: '2',
    },
  },
  {
    id: '7',
    groupId: 'b1',
    avatar: {
      type: 'company',
      name: 'Trim og tran',
    },
    title: 'Trim og tran',
  },
];
