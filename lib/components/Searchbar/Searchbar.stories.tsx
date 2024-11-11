import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Searchbar } from './Searchbar';

const meta = {
  title: 'Header/Searchbar',
  component: Searchbar,
  tags: ['autodocs'],
  parameters: {},
  args: {
    placeholder: 'Search',
    name: 'search',
    expanded: false,
  },
} satisfies Meta<typeof Searchbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Query: Story = {
  args: {
    value: 'query',
  },
};

export const Expanded: Story = {
  args: {
    placeholder: 'Søk i innboks',
    expanded: true,
    autocomplete: {
      groups: {
        2: {
          title: '2 treff i innboks',
        },
      },
      items: [
        {
          id: '1a',
          groupId: '1',
          href: '#',
          label: 'Alt i innboks',
        },
        {
          id: '1b',
          groupId: '1',
          href: '#',
          label: 'Alt i hele Altinn',
        },
        {
          id: '2a',
          groupId: '2',
          href: '#',
          label: 'Skattemelding 2024',
        },
        {
          id: '2b',
          groupId: '2',
          href: '#',
          label: 'Skattemelding 2025',
        },
      ],
    },
  },
};

export const ControlledState = (args) => {
  const [expanded, setExpanded] = useState(false);
  const [q, setQ] = useState<string>('');
  const onChange = (event) => {
    setQ(event.target.value);
  };

  const onFocus = () => {
    setExpanded(true);
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
          onClick: () => {
            alert('Skattemelding 2025 ble trykket på');
          },
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
    <Searchbar
      {...args}
      autocomplete={autocomplete}
      expanded={expanded}
      value={q}
      onChange={onChange}
      onFocus={onFocus}
      onEnter={() => {
        alert(`Søk etter ${q}`);
      }}
    />
  );
};
