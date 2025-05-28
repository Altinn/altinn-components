import {
  ArchiveIcon,
  BellIcon,
  BookmarkIcon,
  Buildings2Icon,
  ClockDashedIcon,
  DocPencilIcon,
  FileCheckmarkIcon,
  HexagonGridIcon,
  InboxFillIcon,
  PersonCircleIcon,
  PersonGroupIcon,
  TrashIcon,
} from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta = {
  title: 'Menu/Examples',
  component: Menu,
  parameters: {},
  args: {},
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InboxMenu: Story = {
  args: {
    groups: {},
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

export const NeutralInboxMenu = {
  args: {
    ...InboxMenu.args,
    color: 'neutral',
    theme: 'subtle',
  },
};

export const CompanyInboxMenu = {
  args: {
    ...InboxMenu.args,
    color: 'company',
    theme: 'subtle',
  },
};

export const PersonInboxMenu = {
  args: {
    ...InboxMenu.args,
    color: 'person',
    theme: 'subtle',
  },
};

export const CompanyMenu: Story = {
  args: {
    theme: 'subtle',
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

export const NeutralCompanyMenu = {
  args: {
    ...CompanyMenu.args,
    color: 'neutral',
  },
};

export const PersonMenu: Story = {
  args: {
    color: 'person',
    theme: 'subtle',
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

export const NeutralPersonMenu = {
  args: {
    ...PersonMenu.args,
    color: 'neutral',
  },
};
