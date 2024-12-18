import type { Meta, StoryObj } from '@storybook/react';
import { type ChangeEvent, useState } from 'react';
import type { AutocompleteProps } from '../Autocomplete';
import type { AutocompleteItemProps } from '../Autocomplete/AutocompleteItem';
import { Searchbar, type SearchbarProps } from './Searchbar';

const meta = {
  title: 'Header/Searchbar',
  component: Searchbar,
  tags: ['autodocs'],
  parameters: {},
  args: {
    placeholder: 'Search',
    name: 'search',
    expanded: true,
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
          type: 'scope',
          id: '1a',
          groupId: '1',
          href: '#',
          label: 'Alt i innboks',
          badge: {
            label: '2',
          },
        },
        {
          type: 'scope',
          id: '1b',
          groupId: '1',
          href: '#',
          label: 'Alt i hele Altinn',
          badge: {
            label: '2',
          },
        },
        {
          type: 'dialog',
          id: '2a',
          groupId: '2',
          href: '#',
          title: 'Skattemelding 2024',
        },
        {
          type: 'dialog',
          id: '2b',
          groupId: '2',
          href: '#',
          title: 'Skattemelding 2025',
        },
      ],
    },
  },
};
export const ControlledState = (args: SearchbarProps) => {
  const [q, setQ] = useState<string>('');
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQ(event.target.value);
  };

  const onClear = () => {
    setQ('');
  };

  const scopes: AutocompleteItemProps[] = [
    {
      id: 'inbox',
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
      id: 'global',
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
  ].map((item) => {
    return {
      ...item,
      groupId: '1',
      type: 'scope',
    };
  });

  const suggestions: AutocompleteItemProps[] = q
    ? [
        {
          type: 'dialog',
          href: '#skatt-2024',
          title: 'Skattemelding 2024',
        },
        {
          type: 'dialog',
          href: '#skatt-2024',
          title: 'Skattemelding 2025',
        },
      ]
        .filter((item) => item.title.toLowerCase().includes((q ?? '').toLowerCase()))
        .map((item) => {
          return {
            ...item,
            type: 'dialog',
            groupId: '2',
          };
        })
    : [];

  const autocompleteItems: AutocompleteItemProps[] = [...scopes, ...suggestions].map((item) => {
    return {
      ...item,
      onClick: () => {
        console.info('clicked', JSON.stringify(item));
      },
    };
  });

  const autocomplete: AutocompleteProps = {
    groups: {
      2: {
        title: `${suggestions.length} treff i innboksen`,
      },
    },
    items: autocompleteItems,
  };

  return (
    <Searchbar
      {...args}
      autocomplete={autocomplete}
      value={q}
      onChange={onChange}
      onClear={onClear}
      expanded={searchOpen}
      onFocus={() => setSearchOpen(true)}
      onClose={() => {
        setSearchOpen(false);
      }}
    />
  );
};
