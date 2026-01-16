import {
  ArchiveIcon,
  BellIcon,
  BicycleIcon,
  BookmarkIcon,
  Buildings2Icon,
  CalendarIcon,
  ChatExclamationmarkIcon,
  ClockDashedIcon,
  CogIcon,
  DocPencilIcon,
  EnterIcon,
  EyeClosedIcon,
  EyeIcon,
  FileCheckmarkIcon,
  FirstAidFillIcon,
  GlobeIcon,
  HexagonGridIcon,
  InboxFillIcon,
  InformationSquareIcon,
  MenuGridIcon,
  MenuHamburgerIcon,
  PadlockLockedFillIcon,
  PaperclipIcon,
  PersonCircleIcon,
  PersonGroupIcon,
  TeddyBearIcon,
  TrashIcon,
  TruckIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Badge } from '../Badge';
import { Menu, type MenuItemProps } from './';

import { statusFilter, timeFilter } from './example.data';

const meta = {
  title: 'Menu/Menu',
  component: Menu,
  parameters: {},
  decorators: [
    (Story, { args }) => {
      const style = {
        backgroundColor: args?.variant === 'tinted' ? 'var(--ds-color-background-tinted)' : '',
        padding: '.5em',
      };

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],

  args: {
    variant: 'default',
  },
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
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

export const MediumSize: Story = {
  args: {
    ...Default.args,
    size: 'md',
  },
};

export const LargeSize: Story = {
  args: {
    ...Default.args,
    size: 'lg',
  },
};

export const CustomLabel: Story = {
  args: {
    items: [
      {
        id: '1',
        icon: FirstAidFillIcon,
        title: 'Menu item 1',
        label: () => (
          <span style={{ display: 'flex', alignItems: 'center', columnGap: '0.5rem' }}>
            Custom badge
            <Badge label="1" />
          </span>
        ),
      },
      {
        id: '2',
        icon: TruckIcon,
        title: 'Menu item 2',
        label: () => (
          <span style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: 'smaller' }}>Custom title</span>
            <span style={{ fontSize: 'small' }}>Custom description</span>
          </span>
        ),
        selected: true,
      },
      {
        id: '2',
        icon: BicycleIcon,
        title: 'Menu item 3',
        label: () => (
          <span>
            Custom <mark>marks</mark>
          </span>
        ),
      },
    ],
    size: 'lg',
  },
};

export const CreatingHiearchy: Story = {
  args: {
    groups: {
      medium: {
        size: 'md',
      },
      shortcuts: {
        title: 'Shortcuts',
        size: 'sm',
      },
    },
    items: [
      {
        groupId: 'large',
        size: 'lg',
        id: '1',
        icon: FirstAidFillIcon,
        title: 'Menu item 1',
      },
      {
        groupId: 'medium',
        id: '2',
        icon: TruckIcon,
        title: 'Menu item 2',
        selected: true,
      },
      {
        groupId: 'medium',
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

export const NestingItems: Story = {
  args: {
    items: [
      {
        id: 'people',
        groupId: 'level-1',
        size: 'lg',
        icon: MenuGridIcon,
        title: 'Alle skjema',
        items: [
          {
            groupId: 'level-2',
            id: 'tema',
            size: 'md',
            icon: TeddyBearIcon,
            title: 'Tema',
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

export const GlobalMenu: Story = {
  args: {
    groups: {
      apps: {
        size: 'lg',
      },
    },
    items: [
      {
        id: 'login',
        groupId: '1',
        size: 'lg',
        icon: EnterIcon,
        title: 'Logg inn',
      },
      {
        id: 'inbox',
        groupId: 'apps',
        icon: InboxFillIcon,
        title: 'Inbox',
      },
      {
        id: 'access',
        groupId: 'apps',
        icon: PadlockLockedFillIcon,
        title: 'Tilgangsstyring',
      },
      {
        id: 'forms',
        groupId: 'apps',
        icon: MenuGridIcon,
        title: 'Skjema og tjenester',
      },
      {
        id: 'about',
        groupId: 'info',
        icon: InformationSquareIcon,
        title: 'Om nye Altinn',
      },
      {
        id: 'start',
        groupId: 'info',
        icon: Buildings2Icon,
        title: 'Starte og drive bedrift',
      },
      {
        id: 'help',
        groupId: 'info',
        icon: ChatExclamationmarkIcon,
        title: 'Trenger du hjelp?',
      },
      {
        id: 'language',
        groupId: 'settings',
        icon: GlobeIcon,
        title: 'Språk/language',
        linkIcon: true,
      },
    ],
  },
};

export const GlobalMenuAccount: Story = {
  args: {
    groups: {
      apps: {
        size: 'lg',
      },
      settings: {
        title: 'Logget inn som Kari Nordmann',
        size: 'sm',
      },
    },
    items: [
      {
        id: 'person',
        groupId: '1',
        size: 'lg',
        icon: {
          type: 'company',
          name: 'Diaspora Bergensis',
        },
        title: 'Diaspora Bergensis',
        description: 'Org. nr. 123456789',
      },
      {
        id: 'inbox',
        groupId: 'apps',
        icon: InboxFillIcon,
        title: 'Inbox',
      },
      {
        id: 'access',
        groupId: 'apps',
        icon: PadlockLockedFillIcon,
        title: 'Tilgangsstyring',
      },
      {
        id: 'forms',
        groupId: 'apps',
        icon: MenuGridIcon,
        title: 'Skjema og tjenester',
      },
      {
        id: 'about',
        groupId: 'info',
        icon: InformationSquareIcon,
        title: 'Om nye Altinn',
      },
      {
        id: 'start',
        groupId: 'info',
        icon: Buildings2Icon,
        title: 'Starte og drive bedrift',
      },
      {
        id: 'help',
        groupId: 'info',
        icon: ChatExclamationmarkIcon,
        title: 'Trenger du hjelp?',
      },
      {
        id: 'profile',
        groupId: 'settings',
        icon: PersonCircleIcon,
        title: 'Din profil',
      },
      {
        id: 'language',
        groupId: 'settings',
        icon: GlobeIcon,
        title: 'Språk/language',
        linkIcon: true,
      },
    ],
  },
};

export const PersonMenu: Story = {
  args: {
    variant: 'tinted',
    size: 'md',
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
    variant: 'tinted',
    size: 'md',
    items: [
      {
        id: 'inbox',
        groupId: '1',
        size: 'lg',
        icon: InboxFillIcon,
        selected: true,
        title: 'Innboks',
      },
      {
        id: 'drafts',
        groupId: '2',
        icon: DocPencilIcon,
        title: 'Utkast',
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
      },
      {
        id: 'trash',
        groupId: '4',
        icon: ArchiveIcon,
        title: 'Arkivert',
      },
      {
        id: '6',
        groupId: '4',
        icon: TrashIcon,
        title: 'Papirkurv',
      },
    ],
  },
};

export const CompanyMenu: Story = {
  args: {
    variant: 'tinted',
    size: 'md',
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

export const InboxContextMenu: Story = {
  args: {
    items: [
      {
        id: 'user',
        groupId: 'unread',
        icon: EyeClosedIcon,
        title: 'Marker som ulest',
      },
      {
        id: 'move-to-archive',
        groupId: 'move',
        icon: ArchiveIcon,
        title: 'Flytt til arkiv',
      },
      {
        id: 'move-to-trash',
        groupId: 'move',
        icon: TrashIcon,
        title: 'Flytt til papirkurv',
      },
      {
        id: 'log',
        icon: {
          items: [
            {
              name: 'Per Olsen',
            },
            {
              name: 'Jan Olsen',
            },
          ],
        },
        title: 'Sett av 2',
      },
    ],
  },
};

const accountMenuItems = [
  {
    id: 'user',
    groupId: 'favourites',
    name: 'Kari Nordmann',
    birthdate: '03037712345',
  },
  {
    id: 'aa-1',
    groupId: 'aa',
    name: 'Alfa Bar & Brød',
    orgNumber: '551415161',
  },
  {
    id: 'aa-2',
    groupId: 'aa',
    name: 'Alfa Bar & Brød',
    orgNumber: '551415162',
    parentId: 'aa-1',
  },
  {
    id: 'bb-1',
    groupId: 'bb',
    name: 'Beta Inc.',
    orgNumber: '991557788',
  },
  {
    id: 'bb-2',
    groupId: 'bb',
    name: 'Beta Inc.',
    orgNumber: '991557789',
    parentId: 'bb-1',
  },
  {
    id: 'cc-1',
    groupId: 'cc',
    name: 'Charlies engler',
    orgNumber: '333444555',
  },
  {
    id: 'cc-2',
    groupId: 'cc',
    name: 'Charlies engler',
    orgNumber: '333444556',
    parentId: 'cc-1',
  },
]?.map((item) => {
  const searchWords = [item.name, item.orgNumber, item.birthdate];

  if (item.birthdate) {
    return {
      ...item,
      searchWords,
      title: item.name,
      description: 'Født: ' + item.birthdate,
      icon: {
        type: 'person',
        name: item.name,
      },
    };
  }

  function splitOrgNumber(str?: string) {
    if (!str) {
      return '';
    }
    const length = str.length;
    const partLength = Math.ceil(length / 3);
    const part1 = str.slice(0, partLength);
    const part2 = str.slice(partLength, partLength * 2);
    const part3 = str.slice(partLength * 2);

    return [part1, part2, part3].join('\u00a0');
  }

  const description = 'Org. nr. ' + splitOrgNumber(item?.orgNumber);

  return {
    id: item.id,
    groupId: item.groupId,
    title: item.name,
    description,
    searchWords,
    icon: {
      type: 'company',
      name: item.name,
      isParent: !!item.parentId,
    },
  };
});

export const AccountMenu: Story = {
  args: {
    items: accountMenuItems as MenuItemProps[],
    groups: {
      favourites: { title: 'Favoritter' },
      aa: { title: 'Alle virksomheter' },
      search: { title: '{count} treff' },
    },
    size: 'md',
  },
};

export const SearchableAccountMenu: Story = {
  args: {
    items: [
      ...accountMenuItems,
      {
        hidden: true,
        groupId: 'emptySearch',
        id: 'emptySearch',
        icon: InformationSquareIcon,
        title: 'Beklager, ingen treff. Søk på nytt!',
      },
    ] as MenuItemProps[],
    groups: {
      favourites: { title: 'Favoritter' },
      aa: { title: 'Alle virksomheter' },
      search: { title: '{count} treff' },
      emptySearch: { hidden: true, title: 'Ingen treff' },
    },
    size: 'md',
    searchable: true,
    search: {
      name: 'search',
      placeholder: 'Søk etter navn eller org. nr. ...',
    },
  },
};

export const AddFilterMenu: Story = {
  args: {
    groups: {
      1: { title: 'Legg til filter' },
    },
    items: [
      {
        id: 'status',
        groupId: '1',
        icon: InformationSquareIcon,
        title: 'Velg status',
      },
      {
        id: 'date',
        groupId: '1',
        icon: CalendarIcon,
        title: 'Velg dato',
      },
      {
        id: 'seenBy',
        groupId: '2',
        icon: EyeIcon,
        title: 'Sett av ...',
      },
      {
        id: 'contents',
        groupId: '2',
        icon: PaperclipIcon,
        title: 'Inneholder ...',
      },
      {
        id: 'owner',
        groupId: '3',
        icon: MenuHamburgerIcon,
        title: 'Velg tjenesteeier',
      },
      {
        id: 'service',
        groupId: '3',
        icon: MenuGridIcon,
        title: 'Velg tjeneste',
      },
    ],
  },
};

export const StatusFilterOptions: Story = {
  args: {
    groups: statusFilter?.groups,
    items: statusFilter?.items,
  },
};

export const TimeFilterOptions: Story = {
  args: {
    groups: timeFilter?.groups,
    items: timeFilter?.items,
  },
};

export const NestedMenuItems: Story = {
  args: {
    maxLevels: 4,
    items: [
      {
        id: 'inbox',
        title: 'Nivå 1',
        expanded: true,
        size: 'lg',
        icon: InformationSquareIcon,
        groupId: 'main',
        items: [
          {
            id: 'new',
            groupId: '2',
            title: 'Nivå 2',
            icon: InformationSquareIcon,
            expanded: true,
            size: 'md',
            items: [
              {
                id: 'z',
                groupId: '2',
                title: 'Nivå 3',
                expanded: true,
                size: 'md',
                items: [
                  {
                    id: 'x',
                    groupId: '2',
                    title: 'Nivå 4',
                    size: 'sm',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};
