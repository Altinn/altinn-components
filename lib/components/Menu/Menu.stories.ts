import type { Meta, StoryObj } from '@storybook/react';
import { menuItems } from '../../examples/menuItems.ts';
import { Menu } from './Menu';

const meta = {
  title: 'Menu/Menu',
  component: Menu,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GlobalMenu: Story = {
  args: {
    groups: {
      settings: {
        defaultItemColor: 'neutral',
      },
    },
    items: [
      {
        id: 'account',
        groupId: 'account',
        size: 'lg',
        avatar: {
          type: 'person',
          name: 'Herman Friele',
        },
        title: 'Herman Friele',
        description: 'Fødselsnr: XX.XX.XXXX',
      },
      {
        id: 'inbox',
        groupId: 'apps',
        size: 'lg',
        icon: 'inbox',
        title: 'Innboks',
        badge: {
          color: 'alert',
          label: '4',
        },
      },
      {
        id: 'access',
        groupId: 'apps',
        size: 'lg',
        icon: 'bookmark',
        title: 'Tilganger',
        badge: {
          color: 'alert',
          label: '2',
        },
      },
      {
        id: 'access',
        groupId: 'apps',
        size: 'lg',
        icon: 'menu-grid',
        title: 'Alle skjema',
      },
      {
        id: 'settings',
        groupId: 'settings',
        icon: 'cog',
        title: 'Innstillinger',
      },
    ],
  },
};

export const CollapsibleGlobalMenu: Story = {
  args: {
    groups: {
      settings: {
        defaultItemColor: 'neutral',
      },
    },
    items: [
      {
        id: 'account',
        groupId: 'account',
        size: 'lg',
        avatar: {
          type: 'person',
          name: 'Herman Friele',
        },
        title: 'Herman Friele',
        description: 'Fødselsnr: XX.XX.XXXX',
      },
      {
        id: 'innboks',
        groupId: 'apps',
        size: 'lg',
        icon: 'inbox',
        title: 'Innboks',
        collapsible: true,
        items: [
          {
            id: 'utkast',
            groupId: '1',
            icon: 'doc-pencil',
            title: 'Utkast',
          },
          {
            id: 'sent',
            groupId: '1',
            icon: 'file-checkmark',
            selected: true,
            title: 'Sendt',
          },
          {
            id: 'bookmarks',
            groupId: '3',
            icon: 'bookmark',
            title: 'Lagrede søk',
          },
          {
            id: 'arkiv',
            groupId: '4',
            icon: 'archive',
            title: 'Arkivert',
          },
          {
            id: 'trash',
            groupId: '4',
            icon: 'trash',
            title: 'Papirkurv',
          },
        ],
      },
      {
        id: 'tilganger',
        groupId: 'apps',
        size: 'lg',
        icon: 'bookmark',
        title: 'Tilganger',
      },
      {
        id: 'skjema',
        groupId: 'apps',
        size: 'lg',
        icon: 'menu-grid',
        title: 'Alle skjema',
      },
      {
        id: 'settings',
        groupId: 'settings',
        icon: 'cog',
        title: 'Innstillinger',
      },
    ],
  },
};

export const ExpandedGlobalMenu: Story = {
  args: {
    ...CollapsibleGlobalMenu.args,
    items: [...CollapsibleGlobalMenu.args.items].map((item) => {
      if (item.collapsible) {
        return {
          ...item,
          group: item?.id === 'inbox' ? 'inbox' : '',
          expanded: true,
        };
      }
      return item;
    }),
  },
};

export const DrilldownMenu: Story = {
  args: {
    defaultItemColor: 'subtle',
    groups: {
      'level-1': {
        divider: true,
      },
      'level-2': {
        divider: true,
      },
    },
    items: [
      {
        id: 'people',
        groupId: 'level-1',
        size: 'lg',
        icon: 'menu-grid',
        title: 'Alle skjema',
        expanded: true,
        items: [
          {
            groupId: 'level-2',
            id: 'tema',
            icon: 'teddy-bear',
            title: 'Tema',
            expanded: true,
            items: [
              {
                id: 'c1',
                groupId: 'level-3',
                title: 'Kategori 1',
              },
              {
                groupId: 'level-3',
                id: 'c2',
                title: 'Kategori 2',
              },
              {
                groupId: 'level-3',
                id: 'c3',
                title: 'Kategori 3',
              },
            ],
          },
        ],
      },
    ],
  },
};

export const InboxMenu: Story = {
  args: {
    groups: {},
    items: [
      {
        id: 'innboks',
        groupId: '1',
        size: 'lg',
        icon: 'inbox',
        title: 'Innboks',
        color: 'strong',
        badge: { color: 'alert', label: '4' },
      },
      {
        id: 'utkast',
        groupId: '2',
        icon: 'doc-pencil',
        title: 'Utkast',
        badge: {
          label: '3',
        },
      },
      {
        id: 'sendt',
        groupId: '2',
        icon: 'file-checkmark',
        selected: true,
        title: 'Sendt',
        badge: {
          label: '2',
        },
      },
      {
        id: 'lagret',
        groupId: '3',
        icon: 'bookmark',
        title: 'Lagrede søk',
        badge: {
          label: '5',
        },
      },
      {
        id: 'arkivert',
        groupId: '4',
        icon: 'archive',
        title: 'Arkivert',
        badge: {
          label: '100+',
        },
      },
      {
        id: 'papirkurv',
        groupId: '4',
        disabled: true,
        icon: 'trash',
        title: 'Papirkurv',
        badge: {
          label: '45',
        },
      },
    ],

    defaultItemColor: 'subtle',
  },
};

export const InboxMenuWithShortcuts = {
  args: {
    groups: {
      ...InboxMenu.args?.groups,
      shortcuts: {
        title: 'Snarveier',
        defaultItemColor: 'default',
      },
    },
    items: [
      ...(InboxMenu?.args?.items ?? []),
      {
        id: 'users',
        groupId: 'shortcuts',
        icon: 'person-group',
        title: 'Brukere',
      },
      {
        id: 'settings',
        groupId: 'shortcuts',
        icon: 'cog',
        title: 'Innstillinger',
      },
    ],
  },
};

export const PersonMenu: Story = {
  args: {
    groups: {},
    items: [
      {
        id: 'person',
        groupId: '1',
        size: 'lg',
        avatar: {
          type: 'person',
          name: 'Erik Huseklepp',
        },
        title: 'Erik Huseklepp',
      },
      {
        id: 'profil',
        groupId: '2',
        icon: 'person-circle',
        title: 'Kontaktinformasjon',
      },
      {
        id: 'varslinger',
        groupId: '2',
        icon: 'bell',
        title: 'Varslingsinnstillinger',
      },
      {
        id: 'bookmarks',
        groupId: '3',
        icon: 'bookmark',
        title: 'Favoritter',
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
    ],
  },
};

export const CompanyMenu: Story = {
  args: {
    groups: {},
    items: [
      {
        id: 'company',
        groupId: '1',
        size: 'lg',
        avatar: {
          type: 'company',
          name: 'Bergen Bar',
        },
        title: 'Bergen Bar',
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
    ],
  },
};

export const AccountMenu: Story = {
  args: {
    groups: {
      a1: {
        title: 'Deg selv, favoritter og grupper',
      },
      b1: { title: 'Andre kontoer' },
    },
    items: menuItems,
  },
};

export const AccountMenuWithSearch: Story = {
  args: {
    ...AccountMenu.args,
    search: {
      name: 'search',
      placeholder: 'Søk i kontoer',
    },
  },
};
