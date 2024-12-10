import type { Meta, StoryObj } from '@storybook/react';
import { Autocomplete } from './Autocomplete';

const meta = {
  title: 'Header/Autocomplete',
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
        href: '#',
        label: 'Alt i innboks',
      },
      {
        id: '1b',
        type: 'scope',
        href: '#',
        label: 'Alt i hele Altinn',
      },
    ],
  },
};

export const TooFewWords: Story = {
  args: {
    items: [
      {
        id: '1a',
        type: 'scope',
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

export const ScopesAndResults: Story = {
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
        href: '#',
        badge: {
          label: '24 treff',
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
        href: '#',
        label: () => (
          <span>
            <mark>skatt</mark> i hele Altinn
          </span>
        ),
      },
      {
        id: '2a',
        groupId: '3',
        type: 'dialog',
        href: '#',
        title: 'Skattemeldingen 2023',
        description: 'Skattemeldingen er klar for innsending.',
      },
      {
        id: '2b',
        groupId: '3',
        type: 'dialog',
        href: '#',
        title: 'Skatteoppgjør 2022',
        description: 'Skatteoppgjøret ditt er klart.',
      },
      {
        id: '2c',
        groupId: '3',
        type: 'dialog',
        href: '#',
        title: 'Skatteoppgjør 2020',
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
    items: ScopesAndResults.args.items.map((item) => {
      if (item.groupId === '3') {
        return {
          ...item,
          type: null,
          icon: 'inbox',
          loading: true,
        };
      }

      return item;
    }),
  },
};

export const NoHits: Story = {
  args: {
    ...ScopesAndResults.args,
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
        href: '#',
        label: () => (
          <span>
            <mark>skatt</mark> i hele Altinn
          </span>
        ),
      },
      {
        groupId: 'noHits',
        id: '2a',
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
    ...ScopesAndResults.args,
    items: [
      ...ScopesAndResults.args.items,
      {
        id: '2c',
        groupId: '4',
        href: '#',
        icon: 'pie-chart',
        title: 'Skattemeldingen',
        description: 'Slik fyller du ut skattemeldingen din.',
      },
      {
        id: '2d',
        groupId: '4',
        icon: 'sign-language-two-hands',
        href: '#',
        title: 'Alt om skatteoppgjøret',
        description: 'Lorem ipsum dolor sit amet.',
      },
    ],
  },
};

export const ScopesAndSuggestions: Story = {
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
        href: '#',
        badge: {
          label: '2 treff',
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
        href: '#',
        label: () => (
          <span>
            <mark>skatt</mark> i hele Altinn
          </span>
        ),
      },
      {
        id: '2a',
        groupId: '2',
        type: 'bookmark',
        href: '#',
        label: 'Skattemeldingen 2023',
        params: [
          {
            label: 'skatt',
          },
          {
            label: 'inkasso',
          },
          {
            type: 'filter',
            label: 'Namsmannen',
          },
          {
            type: 'filter',
            label: 'Denne uken',
          },
        ],
      },
      {
        id: '2b',
        groupId: '2',
        type: 'bookmark',
        href: '#',
        params: [
          {
            type: 'filter',
            label: 'Skatteetaten',
          },
          {
            type: 'filter',
            label: 'Denne uken',
          },
        ],
      },
    ],
  },
};

export const ScopesResultsAndSuggestions: Story = {
  args: {
    ...ScopesAndMixedResults.args,
    groups: {
      '2': {
        title: 'Søkeforslag',
      },
      '3': {
        title: 'Anbefalte treff',
      },
    },
    items: [
      ...ScopesAndMixedResults.args.items,

      {
        id: '2a',
        groupId: '2',
        type: 'bookmark',
        href: '#',
        title: 'Skattemeldingen 2023',
        params: [
          {
            label: 'skatt',
          },
          {
            label: 'inkasso',
          },
          {
            type: 'filter',
            label: 'Namsmannen',
          },
          {
            type: 'filter',
            label: 'Denne uken',
          },
        ],
      },
      {
        id: '2b',
        groupId: '2',
        type: 'bookmark',
        href: '#',
        params: [
          {
            type: 'filter',
            label: 'Skatteetaten',
          },
          {
            type: 'filter',
            label: 'Denne uken',
          },
        ],
      },
    ],
  },
};
