import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogList } from '..';
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
  args: inboxSearchResults,
};

export const SingleGroup: Story = {
  args: {
    items: inboxSection.items
      .filter((item) => item.archived)
      .map((item) => ({
        ...item,
        groupId: 'archived',
      })),
    groups: {
      archived: {
        title: 'Arkivert',
        description: (
          <p>
            <strong>Her finner du dialoger du har valgt å arkivere.</strong> Det er ikke et journal- og arkivsystem. Om
            dialogen blir oppdatert vil du finne den igjen i innboksen.
          </p>
        ),
      },
    },
  },
};

export const Ungrouped: Story = {
  args: { groups: undefined },
};
