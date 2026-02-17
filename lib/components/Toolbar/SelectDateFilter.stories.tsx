import type { Meta } from '@storybook/react-vite';
import { Toolbar, ToolbarFilter } from './';
import { SelectDateFilter } from './SelectDateFilter';
import { timeFilter } from './example.data';
import { useInboxFilter } from './example.hooks';

const meta = {
  title: 'Toolbar/SelectDateFilter',
  component: SelectDateFilter,
  parameters: {},
  args: {},
} satisfies Meta<typeof SelectDateFilter>;

export default meta;

export const Datepicker = () => {
  const inboxFilter = useInboxFilter({
    filters: [{ ...timeFilter, as: SelectDateFilter }],
    defaultFilterState: {},
  });
  return (
    <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>
  );
};

export const RemovableDatepicker = () => {
  const inboxFilter = useInboxFilter({
    filters: [{ ...timeFilter, as: SelectDateFilter, removable: true }],
    defaultFilterState: {},
  });

  return (
    <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>
  );
};

export const CustomName = () => {
  const items = timeFilter.items.map((item) => {
    return {
      ...item,
      name: 'date',
    };
  });

  const inboxFilter = useInboxFilter({
    filters: [{ ...timeFilter, items, name: 'date', as: SelectDateFilter }],
    defaultFilterState: {},
  });
  return (
    <div>
      <Toolbar>
        <ToolbarFilter {...inboxFilter} />
      </Toolbar>
      <hr />
      {JSON.stringify(inboxFilter.filterState)}
    </div>
  );
};
