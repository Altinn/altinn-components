import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, useState } from 'react';
import { expect, userEvent, within } from 'storybook/test';
import { type AutocompleteItemProps, type AutocompleteProps, Searchbar, type SearchbarProps, Section } from '..';

const meta = {
  title: 'Layout/Searchbar',
  component: Searchbar,
  //  tags: ["autodocs"],
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

export const GlobalSearch = () => {
  return <Searchbar name="search" placeholder="Søk i Altinn" />;
};

export const InboxSearch = () => {
  return <Searchbar name="search" placeholder="Søk i innboksen" />;
};

export const InboxScopes = (args: SearchbarProps) => {
  const [q, setQ] = useState<string>(args.value || '');
  const [searchOpen, setSearchOpen] = useState<boolean>(args.expanded || false);
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
      ariaLabel: `Søk etter ${q} i ${item.label}`,
      type: 'scope',
    };
  });

  const autocompleteItems: AutocompleteItemProps[] = [...scopes].map((item) => {
    return {
      ...item,
      onClick: () => {
        console.info('clicked', JSON.stringify(item));
      },
    };
  });

  const autocomplete: AutocompleteProps = {
    items: autocompleteItems,
  };

  return (
    <Searchbar
      {...args}
      name="search"
      placeholder="Søk i innboksen"
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

export const InboxScopesExpanded = () => {
  return (
    <Section style={{ minHeight: '176px' }}>
      <InboxScopes name="search" expanded value="skatt" />
    </Section>
  );
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
          as: 'a',
          type: 'scope',
          ariaLabel: 'alt i innboksen',
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
          ariaLabel: 'alt i Altinn',
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
          groupId: '2',
          href: '#',
          title: 'Skattemelding 2024',
        },
        {
          type: 'dialog',
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

ControlledState.play = async ({
  canvasElement,
}: {
  canvasElement: HTMLElement;
}) => {
  const canvas = within(canvasElement);
  const searchInput = canvas.getByRole('searchbox');
  await userEvent.type(searchInput, 'skatt');

  /* suggestions const of scopes and search results */
  const autocomplete = canvas.getByRole('navigation');
  const suggestions = canvas.getAllByRole('listitem');
  await expect(autocomplete).toBeVisible();
  await expect(suggestions).toHaveLength(4);

  /* click on search result should close autocomplete */
  const firstSearchResult = suggestions[2].querySelector('button')!;
  await userEvent.click(firstSearchResult);
  await expect(autocomplete).not.toBeVisible();

  /* search input should be cleared */
  await expect(searchInput).toHaveValue('skatt');
  await userEvent.click(canvas.getByTestId('search-button-clear'));
  await expect(searchInput).toHaveValue('');

  /* test keyboard navigation */
  await userEvent.type(searchInput, 'skatt');
  await userEvent.keyboard('{arrowdown}');
  await userEvent.keyboard('{arrowdown}');
  const interactiveButtons = autocomplete.querySelectorAll('[data-active="true"]');
  const updatedSuggestions = canvas.getAllByRole('listitem');
  await expect(interactiveButtons).toHaveLength(1);
  await expect(interactiveButtons[0]?.closest('li')).toBe(updatedSuggestions[2]);

  await userEvent.keyboard('{arrowup}');
  await userEvent.keyboard('{arrowup}');
  const interactiveButtons2 = autocomplete.querySelectorAll('[data-active="true"]');
  const updatedSuggestions2 = canvas.getAllByRole('listitem');
  await expect(interactiveButtons2).toHaveLength(1);
  await expect(interactiveButtons2[0]?.closest('li')).toBe(updatedSuggestions2[0]);

  /* test keyboard enter should trigger selected item */
  await userEvent.keyboard('{enter}');
  await expect(autocomplete).not.toBeVisible();
  await userEvent.click(canvas.getByTestId('search-button-clear'));
};
