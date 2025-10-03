import {
  ArchiveIcon,
  BellIcon,
  BicycleIcon,
  BookmarkIcon,
  Buildings2Icon,
  ClockDashedIcon,
  CogIcon,
  DocPencilIcon,
  FileCheckmarkIcon,
  FirstAidFillIcon,
  HexagonGridIcon,
  InboxFillIcon,
  MenuGridIcon,
  PersonCircleIcon,
  PersonGroupIcon,
  TeddyBearIcon,
  TrashIcon,
  TruckIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Menu } from '../';

const meta = {
  title: 'Menu/Menu',
  component: Menu,
  parameters: {},
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'subtle',
    items: [
      {
        id: '1',
        icon: FirstAidFillIcon,
        title: 'Menu item 1',
      },
      {
        id: '2',
        icon: TruckIcon,
        title: 'Menu item 2',
        selected: true,
      },
      {
        id: '2',
        icon: BicycleIcon,
        title: 'Menu item 3',
      },
    ],
  },
};

export const CreatingHiearchy: Story = {
  args: {
    variant: 'subtle',
    defaultIconTheme: 'tinted',
    groups: {
      shortcuts: {
        title: 'Shortcuts',
        defaultItemSize: 'sm',
        defaultIconTheme: 'transparent',
      },
    },
    items: [
      {
        groupId: 'a',
        size: 'lg',
        id: '1',
        icon: { theme: 'base', svgElement: FirstAidFillIcon },
        title: 'Menu item 1',
      },
      {
        groupId: 'b',
        id: '2',
        icon: TruckIcon,
        title: 'Menu item 2',
        selected: true,
      },
      {
        groupId: 'b',
        id: '2',
        icon: BicycleIcon,
        title: 'Menu item 3',
      },
      {
        id: 'users',
        groupId: 'shortcuts',
        icon: PersonGroupIcon,
        title: 'Shortcut 1',
      },
      {
        id: 'settings',
        groupId: 'shortcuts',
        icon: CogIcon,
        title: 'Shortcut 2',
      },
    ],
  },
};

export const AddingBadges: Story = {
  args: {
    variant: 'default',
    defaultIconTheme: 'tinted',
    groups: {
      companyGroup: {
        defaultItemSize: 'md',
        defaultIconTheme: 'transparent',
      },
    },
    items: [
      {
        groupId: 'a',
        size: 'lg',
        id: '1',
        icon: { theme: 'base', svgElement: FirstAidFillIcon },
        iconBadge: {
          color: 'alert',
          variant: 'base',
          size: 'xs',
          label: '4',
        },
        title: 'Icon badge',
      },
      {
        groupId: 'b',
        id: '2',
        icon: TruckIcon,
        title: 'Inline badge',
        badge: {
          label: '4 ting',
        },
      },
      {
        groupId: 'b',
        id: '2',
        icon: BicycleIcon,
        title: 'Inline XS Badge',
        badge: {
          size: 'xs',
          label: '4 ting',
        },
      },
    ],
  },
};

export const NestingItems: Story = {
  args: {
    variant: 'default',
    defaultIconTheme: 'surface',
    groups: {
      'level-1': {
        divider: true,
        defaultItemSize: 'lg',
      },
      'level-2': {
        divider: true,
      },
      'level-3': {
        defaultItemSize: 'sm',
      },
    },
    items: [
      {
        id: 'people',
        groupId: 'level-1',
        icon: MenuGridIcon,
        title: 'Alle skjema',
        collapsible: true,
        expanded: true,
        items: [
          {
            groupId: 'level-2',
            id: 'tema',
            icon: TeddyBearIcon,
            title: 'Tema',
            collapsible: true,
            expanded: true,
            items: [
              {
                id: 'c1',
                groupId: 'level-3',
                title: 'Level 3.1',
              },
              {
                groupId: 'level-3',
                id: 'c2',
                title: 'Level 3.2',
              },
              {
                groupId: 'level-3',
                id: 'c3',
                title: 'Level 3.3',
              },
            ],
          },
        ],
      },
    ],
  },
};

export const AccountRelationships: Story = {
  args: {
    variant: 'default',
    items: [
      {
        id: 'user',
        groupId: 'favourites',
        icon: {
          name: 'Kari Nordmann',
        },
        title: 'Kari Nordmann',
      },
      {
        id: 'aa-1',
        groupId: 'aa',
        icon: {
          type: 'company',
          name: 'Alfa',
        },
        title: 'Alfa Bar & Brød',
        description: 'Org. nr. 123456789',
      },
      {
        id: 'aa-2',
        groupId: 'aa',
        icon: {
          type: 'company',
          name: 'Alfa',
        },
        title: 'Alfa Bar & Brød',
        description: 'Org. nr. 123456789',
      },
      {
        id: 'bb-1',
        groupId: 'bb',
        icon: {
          type: 'company',
          name: 'Beta',
        },
        title: 'Beta Inc.',
        description: 'Org. nr. 123456789',
      },
      {
        id: 'bb-2',
        groupId: 'bb',
        icon: {
          type: 'company',
          name: 'Beta',
        },
        title: 'Beta Inc.',
        description: 'Org. nr. 123456789',
      },
      {
        id: 'cc-1',
        groupId: 'cc',
        icon: {
          type: 'company',
          name: 'Charlie',
        },
        title: 'Charlies engler',
        description: 'Org. nr. 123456789',
      },
      {
        id: 'cc-2',
        groupId: 'cc',
        icon: {
          type: 'company',
          name: 'Charlie',
        },
        title: 'Charlies engler',
        description: 'Org. nr. 123456789',
      },
    ],
  },
};

export const PersonMenu: Story = {
  args: {
    color: 'person',
    variant: 'subtle',
    defaultIconTheme: 'default',
    groups: {},
    items: [
      {
        id: 'person',
        groupId: '1',
        size: 'lg',
        icon: {
          type: 'person',
          name: 'Erik Huseklepp',
        },
        title: 'Erik Huseklepp',
      },
      {
        id: 'profil',
        groupId: '2',
        icon: PersonCircleIcon,
        title: 'Kontaktinformasjon',
        selected: true,
      },
      {
        id: 'varslinger',
        groupId: '2',
        icon: BellIcon,
        iconBadge: {
          color: 'alert',
          theme: 'base',
          size: 'xs',
          label: 'alert',
        },
        title: 'Varslingsinnstillinger',
      },
      {
        id: 'bookmarks',
        groupId: '3',
        icon: BookmarkIcon,
        title: 'Favoritter',
      },
      {
        id: 'grupper',
        groupId: '3',
        icon: HexagonGridIcon,
        title: 'Grupper',
      },
      {
        id: 'logg',
        groupId: '4',
        icon: ClockDashedIcon,
        title: 'Aktivitetslogg',
      },
    ],
  },
};

export const InboxMenu: Story = {
  args: {
    groups: {},
    color: 'company',
    variant: 'subtle',
    defaultIconTheme: 'default',
    items: [
      {
        id: 'inbox',
        groupId: '1',
        size: 'lg',
        icon: {
          theme: 'base',
          svgElement: InboxFillIcon,
        },
        iconBadge: {
          size: 'xs',
          color: 'alert',
          theme: 'base',
          label: '2 uleste',
        },
        selected: true,
        title: 'Innboks',
        badge: {
          label: '12',
        },
      },
      {
        id: 'drafts',
        groupId: '2',
        icon: DocPencilIcon,
        title: 'Utkast',
        badge: {
          label: '2',
        },
      },
      {
        id: 'sent',
        groupId: '2',
        icon: FileCheckmarkIcon,
        title: 'Sendt',
      },
      {
        id: 'bookmarks',
        groupId: '3',
        icon: BookmarkIcon,
        title: 'Lagrede søk',
        badge: {
          label: '5',
        },
      },
      {
        id: 'trash',
        groupId: '4',
        icon: ArchiveIcon,
        title: 'Arkivert',
        badge: {
          label: '99+',
        },
      },
      {
        id: '6',
        groupId: '4',
        icon: TrashIcon,
        title: 'Papirkurv',
        badge: {
          label: '15',
        },
      },
    ],
  },
};

export const CompanyMenu: Story = {
  args: {
    variant: 'subtle',
    color: 'company',
    defaultIconTheme: 'default',
    groups: {},
    items: [
      {
        id: 'company',
        groupId: '1',
        size: 'lg',
        icon: {
          type: 'company',
          name: 'Bergen Bar',
        },
        title: 'Bergen Bar',
      },
      {
        id: 'profil',
        groupId: '2',
        icon: Buildings2Icon,
        title: 'Firmaprofil',
      },
      {
        id: 'brukere',
        groupId: '3',
        icon: PersonGroupIcon,
        title: 'Brukere',
      },
      {
        id: 'varsling',
        groupId: '3',
        icon: BellIcon,
        iconBadge: {
          color: 'alert',
          theme: 'base',
          size: 'xs',
          label: 'alert',
        },
        selected: true,
        title: 'Varslinger',
      },
      {
        id: 'logg',
        groupId: '4',
        icon: ClockDashedIcon,
        title: 'Aktivitetslogg',
      },
    ],
  },
};
