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
          type: 'scope',
          id: '1a',
          groupId: '1',
          href: '#',
          label: 'Alt i innboks',
        },
        {
          type: 'scope',
          id: '1b',
          groupId: '1',
          href: '#',
          label: 'Alt i hele Altinn',
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

export const ControlledState = (args) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event) => {
    setQ(event.target.value);
  };

  const onClear = () => {
    setQ('');
  };

  const scopes = [
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

  const suggestions = q
    ? [
        {
          href: '#skatt-2024',
          title: 'Skattemelding 2024',
        },
        {
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

  const autocompleteItems = [...scopes, ...suggestions].map((item) => {
    return {
      ...item,
      onClick: () => {
        alert(JSON.stringify(item));
      },
    };
  });

  const autocomplete = {
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
      onSubmit={(item) => {
        alert(`Item ${item}`);
      }}
    />
  );
};
