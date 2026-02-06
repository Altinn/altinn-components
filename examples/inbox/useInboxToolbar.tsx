import { ArrowDownRightIcon, Buildings2Icon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { defaultAccounts, useAccountMenu } from '../';
import type {
  AvatarGroupProps,
  AvatarProps,
  DialogListItemProps,
  FilterState,
  ToolbarFilterProps,
  ToolbarProps,
} from '../../lib';

interface UseInboxToolbarProps {
  accountId?: string;
  items?: DialogListItemProps[];
}

export const useInboxToolbar = ({ accountId, items }: UseInboxToolbarProps): ToolbarProps => {
  const accountMenu = useAccountMenu({
    accountId,
    accounts: defaultAccounts,
    includeGroups: true,
  });

  const currentAccount = accountMenu?.currentAccount;

  const childAccountOptions = defaultAccounts
    ?.filter((item) => item.parentId === accountId)
    ?.map((child) => {
      const item = accountMenu?.items?.find((item) => item.id === child.id);
      return {
        value: item?.id,
        icon: item?.icon,
        title: item?.name,
        description: 'Org. nr. ' + child?.uniqueId,
      };
    });

  const parentAccountOptions =
    (childAccountOptions?.length === 1 && [
      {
        value: accountId,
        icon: Buildings2Icon,
        title: 'Hovedenhet',
        description: currentAccount?.description,
        groupId: '1',
      },
      {
        value: childAccountOptions[0].value,
        icon: ArrowDownRightIcon,
        title: 'Underenhet',
        description: childAccountOptions[0].description,
        groupId: '1',
      },
    ]) ||
    (childAccountOptions?.length > 1 && [
      {
        value: accountId,
        icon: Buildings2Icon,
        title: 'Hovedenhet',
        description: currentAccount?.description,
        groupId: '1',
      },
      ...childAccountOptions,
    ]);

  const avatarGroup =
    currentAccount?.icon && 'items' in currentAccount.icon
      ? (currentAccount.icon.items as AvatarGroupProps['items'])
      : undefined;

  const groupIdOptions = avatarGroup?.map((avatar: AvatarProps) => {
    const item = accountMenu?.items?.find((item) => item.id === avatar?.id);
    return {
      name: 'groupIds',
      role: 'checkbox',
      value: item?.id,
      icon: item?.icon,
      title: item?.name,
      description: item?.description,
    };
  });

  const groupOptions = parentAccountOptions || groupIdOptions;

  const groupFilters = groupOptions && {
    removable: false,
    name: 'groupIds',
    label: groupOptions?.length + ' aktører',
    items: groupOptions,
    size: 'md',
  };

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
    name: 'status',
    removable: true,
    label: 'Velg mappe',
    items: Object.keys(folderById).map((label) => ({
      name: 'status',
      role: 'checkbox',
      value: label,
      label: label,
      count: folderById[label],
    })),
  };

  const senderFilters = {
    name: 'sender',
    removable: true,
    label: 'Velg avsender',
    items: Object.keys(senderById).map((label) => ({
      name: 'sender',
      role: 'checkbox',
      value: label,
      label: label,
      count: senderById[label],
    })),
  };

  const statusFilters = {
    name: 'status',
    removable: true,
    label: 'Velg status',
    items: Object.keys(statusById).map((label) => ({
      name: 'status',
      role: 'checkbox',
      value: label,
      label: label,
      count: statusById[label].toString(),
    })),
  };

  //@ts-ignore
  const filters: ToolbarFilterProps['filters'] = [groupFilters, folderFilters, senderFilters, statusFilters].filter(
    (filter) => filter && filter?.items?.length > 0,
  );

  const defaultFilterState = groupFilters?.items?.length
    ? {
        groupIds: groupFilters.items
          .map(({ value }: { value?: string | number }) => value)
          .filter((v): v is string | number => v !== undefined),
      }
    : {};

  const [filterState, setFilterState] = useState<FilterState>(defaultFilterState);

  const getFilterLabel: ToolbarFilterProps['getFilterLabel'] = (
    name: string,
    value: (string | number)[] | undefined,
  ): string | undefined => {
    if (name === 'groupIds' && value?.length) {
      return value?.length === 1 ? '1 aktør' : value?.length + ' aktører';
    }
  };

  const onFilterStateChange = (newFilterState: FilterState) => {
    setFilterState(newFilterState);
  };

  return {
    accountMenu,
    filter: {
      filters,
      filterState,
      onFilterStateChange,
      getFilterLabel,
      removeLabel: 'Fjern filter',
    },
  };
};
