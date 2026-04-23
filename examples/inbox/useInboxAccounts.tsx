import { useMemo, useState } from 'react';
import { defaultAccounts, useAccountMenu } from '..';
import type { AvatarGroupProps, AvatarProps } from '../../lib';

interface UseInboxAccountsProps {
  accountId?: string;
  companyCount?: number;
}

export const useInboxAccounts = ({ accountId, companyCount }: UseInboxAccountsProps) => {
  const accountMenu = useAccountMenu({
    accountId,
    accounts: defaultAccounts,
    includeGroups: true,
    companyCount,
  });

  const defaultAccount = accountMenu?.items?.[0];

  const [currentAccountId, setCurrentAccountId] = useState(accountId || defaultAccount?.id);

  const [subAccountIds, setSubAccountIds] = useState<string[]>([]);

  const items = accountMenu?.items?.map((item) => {
    return {
      id: item.id,
      groupId: item.groupId,
      size: 'md',
      icon: item.icon,
      title: item.name,
      description: item.description,
      selected: item.id === currentAccountId,
      type: item.type,
      role: item.role,
    };
  });

  const currentAccount = items?.find((item) => item.selected);

  const childAccountOptions = useMemo(
    () =>
      defaultAccounts
        ?.filter((item) => item.parentId === currentAccountId)
        ?.map((child) => {
          const item = accountMenu?.items?.find((item) => item.id === child.id);
          return {
            role: 'checkbox',
            value: item?.id,
            title: item?.name,
            description: 'Org. nr. ' + child?.uniqueId,
          };
        }),
    [currentAccountId, accountMenu?.items],
  );

  const parentAccountOptions =
    (childAccountOptions?.length === 1 && [
      {
        role: 'checkbox',
        value: accountId,
        title: 'Hovedenhet',
        description: currentAccount?.description,
        groupId: '1',
      },
      {
        role: 'checkbox',
        value: childAccountOptions[0].value,
        title: 'Underenhet',
        description: childAccountOptions[0].description,
        groupId: '1',
      },
    ]) ||
    (childAccountOptions?.length > 1 && [
      {
        value: accountId,
        role: 'checkbox',
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
      title: item?.name,
      description: item?.description,
    };
  });

  const groupOptions = parentAccountOptions || groupIdOptions;

  const subAccountMenu = groupOptions && {
    name: 'groupIds',
    label: groupOptions?.length + ' aktører',
    items: groupOptions,
    size: 'sm',
    onSelectId: (id: string) => {
      id && setSubAccountIds((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]));
    },
  };

  return {
    currentAccount,
    defaultAccount,
    subAccountIds,
    subAccountMenu,
    accountMenu: {
      searchable: true,
      groups: accountMenu?.groups,
      items,
      label: currentAccount?.title || 'Account',
      onSelectId: (id: string) => {
        id && setCurrentAccountId(id);
      },
    },
  };
};
