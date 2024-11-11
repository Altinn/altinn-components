import type { MenuProps, HeaderProps, FooterProps } from '../../components';

export const menu: MenuProps = {
  groups: {},
  items: [
    {
      id: 'inbox',
      group: 1,
      size: 'lg',
      icon: 'inbox',
      title: 'Innboks',
      color: 'strong',
    },
    {
      id: 'drafts',
      group: 2,
      icon: 'doc-pencil',
      title: 'Utkast',
    },
    {
      id: 'sent',
      group: 2,
      icon: 'file-checkmark',
      selected: true,
      title: 'Sendt',
    },
    {
      id: 'bookmarks',
      group: 3,
      icon: 'bookmark',
      title: 'Lagrede søk',
    },
    {
      id: 'archived',
      group: 4,
      icon: 'archive',
      title: 'Arkivert',
    },
    {
      id: 'trash',
      group: 4,
      disabled: true,
      icon: 'trash',
      title: 'Papirkurv',
    },
  ],
};

export const header: HeaderProps = {
  search: {
    name: 'search',
    placeholder: 'Søk i innboksen',
  },
  menu: {
    accounts: [
      {
        type: 'person',
        name: 'Aurora Mikalsen',
        selected: true,
      },
    ],
  },
};

export const footer: FooterProps = {
  address: 'Postboks 1382 Vika, 0114 Oslo.',
  menu: {
    items: [
      {
        id: '1',
        href: '#',
        title: 'Om Altinn',
      },
      {
        id: '2',
        href: '#',
        title: 'Driftsmeldinger',
      },
      {
        id: '3',
        href: '#',
        title: 'Personvern',
      },
      {
        id: '4',
        href: '#',
        title: 'Tilgjengelighet',
      },
    ],
  },
};
