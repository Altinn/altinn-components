import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button, DialogList } from '..';
import { inboxSearchResults, inboxSection } from '../../../examples';

const meta = {
  title: 'Inbox/DialogList',
  component: DialogList,
  tags: ['beta'],
  args: {
    ...inboxSection,
  },
} satisfies Meta<typeof DialogList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const GroupedByDate: Story = {
  args: {},
};

export const SearchResults: Story = {
  args: {
    title: '14 treff i innboks',
    description: (
      <p>
        Begrens søket til{' '}
        <Button variant="tinted" size="mini">
          Innboks
        </Button>{' '}
        <Button variant="tinted" size="mini">
          Arkiv
        </Button>
        {' eller '}
        <Button variant="tinted" size="mini">
          Papirkurv
        </Button>
      </p>
    ),
    items: inboxSearchResults.items,
    groups: {},
  },
};

export const Description: Story = {
  args: {
    description: <p>Her finner du dialoger du har valgt å arkivere.</p>,
    items: inboxSection.items
      .filter((item) => item.archived)
      .map((item) => ({
        ...item,
        groupId: 'archived',
      })),
  },
};

export const AsLink: Story = {
  args: {
    items: inboxSection.items.map((item) => ({
      ...item,
      as: 'a',
      href: '#',
    })),
  },
};

export const Ungrouped: Story = {
  args: { groups: undefined },
};

export const WithExtendedStatus: Story = {
  args: {
    items: inboxSection.items.slice(0, 5).map((item, index) => ({
      ...item,
      extendedStatusLabel: index % 2 === 0 ? 'Venter på svar' : undefined,
    })),
  },
};

export const Loading: Story = {
  args: {
    items: inboxSection.items.slice(0, 5).map((item) => ({
      ...item,
      loading: true,
    })),
  },
};
