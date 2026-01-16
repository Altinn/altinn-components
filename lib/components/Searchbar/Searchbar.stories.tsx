import type { Meta, StoryObj } from '@storybook/react-vite';
import { type ChangeEvent, useState } from 'react';
import { expect, userEvent, waitFor, within } from 'storybook/test';
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
  args: {
    expanded: false,
  },
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
          role: 'scope',
          title: 'alt i innboksen',
          id: '1a',
          groupId: '1',
          href: '#',
          label: 'Alt i innboks',
          badge: {
            label: '2',
          },
        },
        {
          role: 'scope',
          title: 'alt i Altinn',
          id: '1b',
          groupId: '1',
          href: '#',
          label: 'Alt i hele Altinn',
          badge: {
            label: '2',
          },
        },
        {
          id: 'd1',
          role: 'dialog',
          groupId: '2',
          href: '#',
          title: 'Skattemelding 2024',
        },
        {
          id: 'd2',
          role: 'dialog',
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
          id: 'd1',
          type: 'dialog',
          title: 'Skattemelding 2024',
          onClick: () => alert('skatt24'),
        },
        {
          id: 'd2',
          type: 'dialog',
          title: 'Skattemelding 2025',
          onClick: () => alert('skatt24'),
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

  const autocompleteItems: AutocompleteItemProps[] = [...scopes, ...suggestions].map((item, index) => {
    return {
      ...item,
      onClick: () => {
        console.info('clicked item at index:' + index, JSON.stringify(item));
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

ControlledState.play = async ({ canvasElement }: { canvasElement: HTMLElement }) => {
  const canvas = within(canvasElement);
  const user = userEvent.setup();

  const input = canvas.getByRole('combobox');
  // Opens and renders suggestions
  await user.type(input, 'skatt');

  // Prefer asserting ARIA state over visibility
  await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'true'));

  const list = canvas.getByRole('group');
  const items = within(list).getAllByRole('menuitem');
  expect(items.length).toBeGreaterThanOrEqual(1);

  await user.click(canvas.getByLabelText('Skattemelding 2024'));

  await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'false'));

  // Clear button clears input
  await user.click(canvas.getByTestId('search-button-clear'));
  expect(input).toHaveValue('');

  // Keyboard navigation selects item (prefer aria-activedescendant if available)
  await user.type(input, 'skatt');
  await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'true'));

  await user.keyboard('{ArrowDown}{ArrowDown}');

  await waitFor(() => {
    const active = canvasElement.querySelector('[data-active="true"]');
    expect(active).toBeTruthy();
  });

  await user.keyboard('{Enter}');
  await waitFor(() => expect(input).toHaveAttribute('aria-expanded', 'false'));
};
