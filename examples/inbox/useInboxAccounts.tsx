import { useState } from 'react';
import { defaultAccounts, useAccountMenu } from '..';

interface UseInboxAccountsProps {
  accountId?: string;
}

export const useInboxAccounts = ({ accountId }: UseInboxAccountsProps) => {
  const accountMenu = useAccountMenu({
    accountId,
    accounts: defaultAccounts,
    includeGroups: true,
  });

  const defaultAccount = accountMenu?.items?.[0];

  const [currentAccountId, setCurrentAccountId] = useState(accountId || defaultAccount?.id);

  /*


  const childAccountOptions = defaultAccounts
    ?.filter((item) => item.parentId === accountId)
    ?.map((child) => {
      const item = accountMenu?.items?.find((item) => item.id === child.id);
      return {
        value: item?.id,
        icon: item?.icon,
        title: item?.name,
        description: "Org. nr. " + child?.uniqueId,
      };
    });

  const parentAccountOptions =
    (childAccountOptions?.length === 1 && [
      {
        value: accountId,
        icon: Buildings2Icon,
        title: "Hovedenhet",
        description: currentAccount?.description,
        groupId: "1",
      },
      {
        value: childAccountOptions[0].value,
        icon: ArrowDownRightIcon,
        title: "Underenhet",
        description: childAccountOptions[0].description,
        groupId: "1",
      },
    ]) ||
    (childAccountOptions?.length > 1 && [
      {
        value: accountId,
        icon: Buildings2Icon,
        title: "Hovedenhet",
        description: currentAccount?.description,
        groupId: "1",
      },
      ...childAccountOptions,
    ]);

  const avatarGroup =
    currentAccount?.icon && "items" in currentAccount.icon
      ? (currentAccount.icon.items as AvatarGroupProps["items"])
      : undefined;

  const groupIdOptions = avatarGroup?.map((avatar: AvatarProps) => {
    const item = accountMenu?.items?.find((item) => item.id === avatar?.id);
    return {
      name: "groupIds",
      role: "checkbox",
      value: item?.id,
      icon: item?.icon,
      title: item?.name,
      description: item?.description,
    };
  });

  const groupOptions = parentAccountOptions || groupIdOptions;

  const groupFilters = groupOptions && {
    removable: false,
    name: "groupIds",
    label: groupOptions?.length + " aktører",
    items: groupOptions,
    size: "md",
  };

  */

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

  return {
    currentAccount,
    defaultAccount,
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
