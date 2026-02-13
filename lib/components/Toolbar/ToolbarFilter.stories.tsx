import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { Button } from '../Button';
import { Section } from '../Page';
import { SelectDateFilter } from './SelectDateFilter';
import { Toolbar } from './Toolbar.tsx';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter';
import { inboxFilters, timeFilter } from './example.data';
import { useInboxFilter } from './example.hooks';

const meta = {
  title: 'Toolbar/ToolbarFilter',
  component: ToolbarFilter,
  parameters: {},
  args: {},
} satisfies Meta<typeof ToolbarFilter>;

export default meta;

export const Controlled = () => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({});
  return (
    <Toolbar>
      <ToolbarFilter
        getFilterLabel={(name) => filterState?.[name]?.join(',') || 'Choose ' + name}
        filterState={filterState}
        onFilterStateChange={setFilterState}
        filters={inboxFilters.map((item) => ({ ...item, removable: true }))}
      />
      <Button onClick={() => setFilterState({})}>Reset</Button>
    </Toolbar>
  );
};

export const Removable = () => {
  const inboxFilter = useInboxFilter({
    filters: inboxFilters?.map((item) => ({ ...item, removable: true })),
    defaultFilterState: { status: ['requires-action'], unread: ['true'] },
  });
  return (
    <Toolbar>
      <ToolbarFilter {...inboxFilter} />
    </Toolbar>
  );
};

export const Datepicker = () => {
  const inboxFilter = useInboxFilter({
    filters: [{ ...timeFilter, as: SelectDateFilter }],
    defaultFilterState: {},
  });
  return (
    <Toolbar>
      <ToolbarFilter {...inboxFilter} />
      <Section margin="section">State: {JSON.stringify(inboxFilter.filterState)}</Section>
    </Toolbar>
  );
};
