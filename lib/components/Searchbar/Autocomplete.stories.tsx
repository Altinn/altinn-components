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
    ],
  },
};

export const ScopesAndSuggestions: Story = {
  args: {
    groups: {
      '2': {
        title: '2 treff i innboksen',
      },
    },
    items: [
      {
        id: '1a',
        groupId: '1',
        href: '#',
        label: () => (
          <span>
            <mark>skatt</mark> i innboks
          </span>
        ),
      },
      {
        id: '1b',
        groupId: '1',
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
        href: '#',
        label: 'Skattemeldingen 2023',
      },
      {
        id: '2b',
        groupId: '2',
        href: '#',
        label: 'Skattemeldingen 2022',
      },
    ],
  },
};
