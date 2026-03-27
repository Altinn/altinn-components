import { useState } from 'react';
import type { ToolbarFilterProps } from '../../lib/components';
import { formatDateRange } from './formatDate';
import { inboxFilters } from './inboxFilters';

export const useInboxFilter = ({ filters = inboxFilters, defaultFilterState = {} }) => {
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>(defaultFilterState);

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
    const hasDrafts = (filterState?.drafts?.length ?? 0) > 0 ? 'Utkast' : undefined;
    const hasAttachments = (filterState?.attachments?.length ?? 0) > 0 ? 'Vedlegg' : undefined;
    const hasSent = (filterState?.sent?.length ?? 0) > 0 ? 'Sendt' : undefined;
    const hasReceived = (filterState?.received?.length ?? 0) > 0 ? 'Mottatt' : undefined;

    return [hasDrafts, hasAttachments, hasSent, hasReceived].filter(Boolean).join(' + ');
  };

  const getTimeFilterLabel = () => {
    const fromDate = filterState?.fromDate?.[0]?.toString();
    const toDate = filterState?.toDate?.[0]?.toString();

    if (fromDate && toDate) {
      return formatDateRange(fromDate, toDate);
    }

    if (fromDate) {
      return formatDateRange(fromDate);
    }

    const values = filterState?.time || [];
    const count = values?.length;

    const options = filters?.find((item) => item.name === 'time')?.items;
    const labels = values?.map((value) => options?.find((option) => option.value === value)?.title);

    return count === 1 ? labels?.[0] : count > 1 ? `${count} tider` : 'Tid';
  };

  const getStatusLabel = () => {
    const values = filterState?.status || [];
    const count = values?.length;

    const options = filters?.find((item) => item.name === 'status')?.items;
    const labels = values?.map((value) => options?.find((option) => option.value === value)?.title);

    const unreadLabel = (filterState?.unread?.length ?? 0) > 0 ? 'Ulest' : undefined;
    const statusLabel = count === 1 ? labels?.[0] : count > 1 ? `${count} statuser` : undefined;
    return [unreadLabel, statusLabel].filter(Boolean).join(' + ');
  };

  const getFilterLabel = (name: string) => {
    switch (name) {
      case 'status':
        return getStatusLabel() || 'Status';
      case 'time':
        return getTimeFilterLabel() || 'Tid';
      case 'seenBy':
        return getSeenByFilterLabel() || 'Sett av';
      case 'content':
        return getContentFilterLabel() || 'Innhold';
      default:
        return name;
    }
  };

  return {
    addLabel: 'Legg til filter',
    submitLabel: 'Show results',
    addNextLabel: 'Legg til',
    filters: filters?.map((filter) => {
      return {
        ...filter,
        removable: true,
      };
    }),
    filterState,
    onFilterStateChange: setFilterState,
    getFilterLabel: getFilterLabel as ToolbarFilterProps['getFilterLabel'],
  };
};
