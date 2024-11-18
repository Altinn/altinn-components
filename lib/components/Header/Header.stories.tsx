import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Header } from './Header';

const meta = {
  title: 'Header/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    expanded: true,
    search: {
      placeholder: 'Søk i Altinn',
    },
    menu: {
      accountGroups: {
        primary: {
          title: 'Deg selv og favoritter',
        },
        secondary: {
          title: 'Andre kontoer',
        },
      },
      accounts: [
        {
          id: 'party:aurora',
          groupId: 'primary',
          type: 'person',
          name: 'Aurora Mikalsen',
        },
        {
          id: 'party:rakel',
          groupId: 'favourites',
          type: 'person',
          name: 'Rakel Engelsvik',
        },
        {
          id: 'party:auroraskeeperskole',
          groupId: 'favourites',
          type: 'company',
          name: 'Auroras keeperskole',
        },
        {
          id: 'party:aurorashandsker',
          groupId: 'secondary',
          type: 'company',
          name: 'Keeperhansker AS',
        },
        {
          id: 'party:aurorasfotballskole',
          groupId: 'secondary',
          type: 'company',
          name: 'Stadion drift AS',
        },
        {
          id: 'party:aurorasfotballskole',
          groupId: 'secondary',
          type: 'company',
          name: 'Sportsklubben Brann',
        },
        {
          id: 'party:aurorasfotballskole',
          groupId: 'secondary',
          type: 'company',
          name: 'Landslaget',
        },
      ],
      items: [
        {
          id: '1',
          icon: 'airplane',
          size: 'lg',
          label: 'Section 1',
        },
        {
          id: '2',
          icon: 'briefcase',
          size: 'lg',
          label: 'Section 2',
        },
        {
          id: '3',
          size: 'lg',
          label: 'Section 3',
          icon: 'camera',
        },
      ],
    },
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentAccount: {
      id: 'party:aurora',
      type: 'person',
      name: 'Aurora Mikalsen',
    },
  },
};

export const ControlledState = (args) => {
  const [q, setQ] = useState<string>('');
  const currentEndUserId = 'party:aurora';
  const [selectedAccountId, setSelectedAccountId] = useState<string>(currentEndUserId);
  const onChange = (event) => {
    setQ(event.target.value);
  };

  const scopes = [
    {
      groupId: '1',
      id: 'inbox',
      href: '#',
      label: q
        ? () => {
            return (
              <span>
                <mark>{q}</mark> i innboksen
              </span>
            );
          }
        : 'Alt i innboksen',
    },
    {
      groupId: '1',
      id: 'global',
      href: '#',
      label: q
        ? () => {
            return (
              <span>
                <mark>{q}</mark> i hele Altinn
              </span>
            );
          }
        : 'Alt i hele Altinn',
    },
  ];

  const suggestions = q
    ? [
        {
          groupId: '2',
          href: 'http://www.altinn.no',
          label: 'Skattemelding 2024',
        },
        {
          groupId: '2',
          href: 'http://www.altinn.no',
          label: 'Skattemelding 2025',
        },
      ].filter((item) => item.label.toLowerCase().includes((q ?? '').toLowerCase()))
    : [];

  const autocomplete = {
    groups: {
      2: {
        title: `${suggestions.length} treff i innboksen`,
      },
    },
    items: [...scopes, ...suggestions],
  };

  return (
    <Header
      {...args}
      currentAccount={args.menu.accounts.find((account) => account.id === selectedAccountId)}
      menu={{
        ...args.menu,
        ...args.menu.accounts,
        changeCurrentAccount: setSelectedAccountId,
      }}
      search={{
        ...args.search,
        value: q,
        onChange,
        onClear: () => setQ(''),
        autocomplete,
      }}
    />
  );
};
