import { SignLanguageTwoHandsIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { Autocomplete, type AutocompleteItemProps } from '..';

const meta = {
  title: 'Layout/Searchbar/Autocomplete',
  component: Autocomplete,
  tags: ['autodocs'],
  parameters: {},
  args: {},
} satisfies Meta<typeof Autocomplete>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Scopes: Story = {
  args: {
    groups: {},
    items: [
      {
        id: '1a',
        type: 'scope',
        ariaLabel: 'Alt i innboks',
        href: '#',
        label: 'Alt i innboks',
      },
      {
        id: '1b',
        ariaLabel: 'Alt i hele Altinn',
        type: 'scope',
        href: '#',
        label: 'Alt i hele Altinn',
      },
    ],
  },
};

export const ScopesAndQuery: Story = {
  args: {
    groups: {},
    items: [
      {
        id: '1a',
        type: 'scope',
        ariaLabel: 'Søk etter skatt i innboks',
        href: '#',
        label: (
          <span>
            <mark>skatt</mark> i innboks
          </span>
        ),
      },
      {
        id: '1b',
        type: 'scope',
        ariaLabel: 'Søk etter skatt i hele Altinn',
        href: '#',
        label: (
          <span>
            <mark>skatt</mark> i hele Altinn
          </span>
        ),
      },
    ],
  },
};

export const SuggestedFilters: Story = {
  args: {
    groups: {
      '2': {
        title: 'Søkeforslag',
      },
    },
    items: [
      {
        id: '1a',
        groupId: '1',
        type: 'scope',
        ariaLabel: 'Skatt inkasso i innboks',
        href: '#',
        badge: {
          label: '22 treff',
        },
        label: () => (
          <span>
            <mark>skatt inkasso</mark> i innboks
          </span>
        ),
      },
      {
        id: '1b',
        groupId: '1',
        type: 'scope',
        ariaLabel: 'Skatt inkasso i hele Altinn',
        href: '#',
        label: () => (
          <span>
            <mark>skatt inkasso</mark> i hele Altinn
          </span>
        ),
      },
      {
        id: '2a',
        groupId: '2',
        type: 'suggest',
        badge: {
          label: '22 treff',
        },
        as: 'button',
        ariaLabel: 'Søk etter skatt + inkasso',
        onClick: () => {
          alert('22 treff');
        },
        params: [
          {
            type: 'search',
            label: 'skatt',
          },
          {
            type: 'search',
            label: 'inkasso',
          },
        ],
      },
      {
        id: '2b',
        groupId: '2',
        type: 'suggest',
        href: '#',
        ariaLabel: 'Søk etter Skatteetaten',
        badge: {
          label: '9 treff',
        },
        params: [
          {
            type: 'filter',
            label: 'Skatteetaten',
          },
          {
            type: 'search',
            label: 'inkasso',
          },
        ],
      },
    ],
  },
};

export const SuggestedHits: Story = {
  args: {
    groups: {
      '3': {
        title: 'Anbefalte treff',
      },
    },
    items: [
      {
        id: '1a',
        groupId: '1',
        type: 'scope',
        ariaLabel: 'Skatteoppgjør i innboks',
        href: '#',
        badge: {
          label: '24 treff',
        },
        label: () => (
          <span>
            <mark>skatteoppgjør</mark> i innboks
          </span>
        ),
      },
      {
        id: '1b',
        groupId: '1',
        type: 'scope',
        ariaLabel: 'Skatteoppgjør i hele Altinn',
        href: '#',
        label: () => (
          <span>
            <mark>skatteoppgjør</mark> i hele Altinn
          </span>
        ),
      },
      {
        id: 'd1',
        groupId: '3',
        type: 'dialog',
        href: '#',
        title: 'Skattemeldingen 2024',
        description: 'Skatteoppgjøret ditt er klart.',
      },
      {
        id: 'd2',
        groupId: '3',
        type: 'dialog',
        href: '#',
        title: 'Skatteoppgjør 2023',
        description: 'Skatteoppgjøret ditt er klart.',
      },
      {
        id: 'd3',
        groupId: '3',
        type: 'dialog',
        href: '#',
        title: 'Skatteoppgjør 2022',
        description: 'Skatteoppgjøret ditt er ferdigstilt.',
      },
    ],
  },
};

export const LoadingResults: Story = {
  args: {
    groups: {
      '3': {
        title: 'Søker etter «skatt» ...',
      },
    },
    items: SuggestedHits.args.items.map((item) => {
      if (item.groupId === '3') {
        return {
          ...item,
          as: 'div',
          interactive: false,
          loading: true,
        };
      }

      return item;
    }) as AutocompleteItemProps[],
  },
};

export const TooFewWords: Story = {
  args: {
    items: [
      {
        id: '1a',
        type: 'scope',
        ariaLabel: 'Søk etter sk',
        href: '#',
        label: () => (
          <span>
            <mark>sk</mark> i innboks
          </span>
        ),
      },
      {
        id: '1b',
        type: 'scope',
        ariaLabel: 'Søk etter sk',
        href: '#',
        label: () => (
          <span>
            <mark>sk</mark> i hele Altinn
          </span>
        ),
      },
    ],
  },
};

export const NoHits: Story = {
  args: {
    ...SuggestedHits.args,
    groups: {
      noHits: {
        title: 'Ingen treff',
      },
    },
    items: [
      {
        id: '1a',
        groupId: '1',
        type: 'scope',
        ariaLabel: 'Søk etter skatt i innboks',
        href: '#',
        disabled: true,
        badge: {
          label: 'Ingen treff',
        },
        label: () => (
          <span>
            <mark>skatt</mark> i innboks
          </span>
        ),
      },
      {
        id: '1b',
        groupId: '1',
        type: 'scope',
        ariaLabel: 'Søk etter skatt i hele Altinn',
        href: '#',
        label: () => (
          <span>
            <mark>skatt</mark> i hele Altinn
          </span>
        ),
      },
      {
        id: 'info',
        groupId: 'noHits',
        interactive: false,
        as: 'div',
        type: 'information',
        label: () => (
          <span>
            Søk etter <mark>skatt</mark> ga ingen treff.
          </span>
        ),
      },
    ],
  },
};

export const ScopesAndMixedResults: Story = {
  args: {
    ...SuggestedHits.args,
    items: [
      ...SuggestedHits.args.items,
      {
        id: '2d',
        groupId: '4',
        icon: SignLanguageTwoHandsIcon,
        href: '#',
        title: 'Alt om skatteoppgjøret',
        description: 'Lorem ipsum dolor sit amet.',
        ariaLabel: 'Alt om skatteoppgjøret',
      },
    ] as AutocompleteItemProps[],
  },
};
