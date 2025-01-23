import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from './Menu';

const meta = {
  title: 'Menu/Patterns',
  component: Menu,
  //  tags: ["autodocs"],
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
          name: 'inbox',
          variant: 'solid',
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
        icon: 'doc-pencil',
        title: 'Utkast',
        badge: {
          label: '2',
        },
      },
      {
        id: 'sent',
        groupId: '2',
        icon: 'file-checkmark',
        title: 'Sendt',
      },
      {
        id: 'bookmarks',
        groupId: '3',
        icon: 'bookmark',
        title: 'Lagrede søk',
        badge: {
          label: '5',
        },
      },
      {
        id: 'trash',
        groupId: '4',
        icon: 'archive',
        title: 'Arkivert',
        badge: {
          label: '99+',
        },
      },
      {
        id: '6',
        groupId: '4',
        icon: 'trash',
        title: 'Papirkurv',
        badge: {
          label: '15',
        },
      },
    ],
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
    color: 'company',
    defaultIconTheme: 'default',
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
        id: 'varsling',
        groupId: '3',
        icon: 'bell',
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
        icon: 'clock-dashed',
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
        selected: true,
      },
      {
        id: 'varslinger',
        groupId: '2',
        icon: 'bell',
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

export const NeutralPersonMenu = {
  args: {
    ...PersonMenu.args,
    color: 'neutral',
  },
};
