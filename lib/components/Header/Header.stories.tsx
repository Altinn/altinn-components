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
          groupId: 'primary',
          type: 'person',
          name: 'Aurora Mikalsen',
          selected: true,
        },
        {
          groupId: 'favourites',
          type: 'person',
          name: 'Rakel Engelsvik',
          selected: false,
        },
        {
          groupId: 'favourites',
          type: 'company',
          name: 'Auroras keeperskole',
          selected: false,
        },
        {
          groupId: 'secondary',
          type: 'company',
          name: 'Keeperhansker AS',
          selected: false,
        },
        {
          groupId: 'secondary',
          type: 'company',
          name: 'Stadion drift AS',
          selected: false,
        },
        {
          groupId: 'secondary',
          type: 'company',
          name: 'Sportsklubben Brann',
          selected: false,
        },
        {
          groupId: 'secondary',
          type: 'company',
          name: 'Landslaget',
          selected: false,
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

export const Default: Story = {};

export const ControlledState = (args) => {
  const [q, setQ] = useState<string>('');
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
