import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { ToolbarFilter, type ToolbarFilterProps } from './ToolbarFilter';
import { inboxFilters } from './data';

const meta = {
  title: 'MenuV2/ToolbarFilter',
  component: ToolbarFilter,
  parameters: {},
  args: {},
} satisfies Meta<typeof ToolbarFilter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Uncontrolled: Story = {
  args: {
    items: inboxFilters,
  },
};

interface ControlledProps {
  items?: ToolbarFilterProps['items'];
  defaultFilterState?: ToolbarFilterProps['filterState'];
}

export const Controlled = ({ items = inboxFilters, defaultFilterState = {} }: ControlledProps) => {
  const [filterState, setFilterState] = useState(defaultFilterState);

  const getSeenByFilterLabel = () => {
    const values = filterState?.seenBy || [];
    const count = values?.length;

    if (count > 1 && values?.includes('you') && values?.includes('others')) {
      return `Sett av deg + andre`;
    }
    if (count > 1 && values?.includes('you')) {
      return `Sett av deg + ${count - 1}`;
    }
    if (values?.includes('user')) {
      return `Sett av deg`;
    }
    if (values?.includes('others')) {
      return `Sett av andre`;
    }
    if (count) {
      return `Sett av ${count}`;
    }

    return 'Sett av ...';
  };

  const getContentFilterLabel = () => {
    const hasDrafts = (filterState?.drafts?.length ?? 0 > 0) ? 'Utkast' : undefined;
    const hasAttachments = (filterState?.attachments?.length ?? 0 > 0) ? 'Vedlegg' : undefined;
    const hasSent = (filterState?.sent?.length ?? 0 > 0) ? 'Sendt' : undefined;
    const hasReceived = (filterState?.received?.length ?? 0 > 0) ? 'Mottatt' : undefined;

    return [hasDrafts, hasAttachments, hasSent, hasReceived].filter(Boolean).join(' + ');
  };

  const getTimeFilterLabel = () => {
    const values = filterState?.time || [];
    const count = values?.length;

    const options = items?.find((item) => item.name === 'time')?.items;
    const labels = values?.map((value) => options?.find((option) => option.value === value)?.title);

    return count === 1 ? labels?.[0] : count > 1 ? `${count} tider` : undefined;
  };

  const getStatusLabel = () => {
    const values = filterState?.status || [];
    const count = values?.length;

    const options = items?.find((item) => item.name === 'status')?.items;
    const labels = values?.map((value) => options?.find((option) => option.value === value)?.title);

    const unreadLabel = (filterState?.unread?.length ?? 0) > 0 ? 'Ulest' : undefined;
    const statusLabel = count === 1 ? labels?.[0] : count > 1 ? `${count} statuser` : undefined;
    return [unreadLabel, statusLabel].filter(Boolean).join(' + ');
  };

  const getFilterLabel = (name: string) => {
    switch (name) {
      case 'status':
        return getStatusLabel();
      case 'time':
        return getTimeFilterLabel();
      case 'seenBy':
        return getSeenByFilterLabel();
      case 'content':
        return getContentFilterLabel();
      default:
        return undefined;
    }
  };

  return (
    <ToolbarFilter
      addLabel="Legg til filter"
      addNextLabel="Legg til"
      items={items}
      filterState={filterState}
      onFilterStateChange={setFilterState}
      getFilterLabel={getFilterLabel}
    />
  );
};

export const RemovableControlled = ({ items = inboxFilters, defaultFilterState = {} }: ControlledProps) => {
  const removableFilters = items?.map((filter) => ({
    ...filter,
    removable: true,
  })) as ToolbarFilterProps['items'];

  return <Controlled items={removableFilters} defaultFilterState={defaultFilterState} />;
};

export const RemovableFilterState = () => {
  return <RemovableControlled defaultFilterState={{ status: ['completed'], unread: ['true'], time: ['this-week'] }} />;
};
