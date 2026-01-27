import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from '../Page';
import { SelectDateFilter } from './SelectDateFilter';
import { ToolbarFilter } from './ToolbarFilter';
import { inboxFilters, timeFilter } from './example.data';
import { useInboxFilter } from './example.hooks';

const meta = {
  title: 'Toolbar/ToolbarFilter',
  component: ToolbarFilter,
  parameters: {},
  args: {},
} satisfies Meta<typeof ToolbarFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Uncontrolled: Story = {
  args: {
    filters: inboxFilters,
  },
};

export const Controlled = () => {
  const inboxFilter = useInboxFilter({
    filters: inboxFilters,
    defaultFilterState: { status: ['requires-action'], unread: ['true'] },
  });
  return <ToolbarFilter {...inboxFilter} />;
};

export const Removable = () => {
  const inboxFilter = useInboxFilter({
    filters: inboxFilters?.map((item) => ({ ...item, removable: true })),
    defaultFilterState: { status: ['requires-action'], unread: ['true'] },
  });
  return <ToolbarFilter {...inboxFilter} />;
};

export const Datepicker = () => {
  const inboxFilter = useInboxFilter({
    filters: [{ ...timeFilter, as: SelectDateFilter }],
    defaultFilterState: {},
  });
  return (
    <div>
      <ToolbarFilter {...inboxFilter} />
      <Section margin="section">State: {JSON.stringify(inboxFilter.filterState)}</Section>
    </div>
  );
};
