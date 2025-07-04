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

export const Default: Story = {
  args: { groups: undefined },
};

export const GroupedByDate: Story = {
  args: {},
};

export const GroupedByRoute: Story = {
  args: inboxSearchResults,
};
