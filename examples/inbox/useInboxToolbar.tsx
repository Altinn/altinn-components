import { useState } from 'react';
import { defaultAccounts, useAccountMenu } from '../';
import type { DialogListItemProps, FilterState, ToolbarProps } from '../../lib';

interface UseInboxToolbarProps {
  items?: DialogListItemProps[];
}

export const useInboxToolbar = ({ items }: UseInboxToolbarProps): ToolbarProps => {
  const [filterState, setFilterState] = useState<FilterState>({
    //    from: ["skatt", "brreg"],
  });

  // collect facets from items

  const folderById: { [key: string]: number } = {
    Innboks: 0,
    Utkast: 0,
    Sendt: 0,
    Papirkurv: 0,
    Arkiv: 0,
  };
  const senderById: { [key: string]: number } = {};
  const statusById: { [key: string]: number } = {};

  items?.map((item) => {
    if (item?.trashed) {
      folderById.Papirkurv++;
    } else if (item?.archived) {
      folderById.Arkiv++;
    }

    if (item?.sentCount) {
      folderById.Sendt++;
    }

    if (item?.draftsLabel) {
      folderById.Utkast++;
    } else {
      folderById.Innboks++;
    }

    if (item?.sender?.name) {
      if (!senderById[item.sender.name]) {
        senderById[item.sender.name] = 0;
      }
      senderById[item.sender.name]++;
    }
    if (item?.status?.label) {
      if (!statusById[item.status.label]) {
        statusById[item.status.label] = 0;
      }
      statusById[item.status.label]++;
    }
  });

  const folderFilters = {
    removable: true,
    name: 'status',
    optionType: 'radio',
    label: 'Velg mappe',
    options: Object.keys(folderById).map((label) => ({
      value: label,
      label: label,
      badge: {
        label: folderById[label].toString(),
      },
    })),
  };

  const senderFilters = {
    removable: true,
    name: 'sender',
    optionType: 'checkbox',
    label: 'Velg avsender',
    options: Object.keys(senderById).map((label) => ({
      value: label,
      label: label,
      badge: {
        label: senderById[label].toString(),
      },
    })),
  };

  const statusFilters = {
    removable: true,
    name: 'status',
    optionType: 'checkbox',
    label: 'Velg status',
    options: Object.keys(statusById).map((label) => ({
      value: label,
      label: label,
      badge: {
        label: statusById[label].toString(),
      },
    })),
  };

  const filters = [folderFilters, senderFilters, statusFilters];

  // setup account menu

  const accountMenu = useAccountMenu({
    accounts: defaultAccounts,
  });

  // onFilterStateChange
  const onFilterStateChange = (newFilterState: FilterState) => {
    setFilterState(newFilterState);
    console.log('Filter state changed:', newFilterState);
    // Handle filter state change, e.g., update the displayed items based on the new filter
  };

  return {
    accountMenu,
    filters,
    //    filters: inboxFilters,
    filterState,
    onFilterStateChange,
    removeButtonAltText: 'remove',
  } as ToolbarProps;
};
