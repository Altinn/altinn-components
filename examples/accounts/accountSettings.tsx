import { type AccountDataGroups, type AccountDataProps, accounts, getAccountItems, sortAccountsByKey } from './';

export const getAccountSettings = ({
  accounts,
}: {
  accounts?: AccountDataProps[];
}) => {
  const groups: AccountDataGroups = {};

  const unsortedItems = getAccountItems({ accounts });
  const sortedItems = sortAccountsByKey(unsortedItems, 'name');

  /** Remove current user and groups and group by relationships */

  const items: AccountDataProps[] = sortedItems
    ?.filter((item) => item.type !== 'group' && !item.isCurrentEndUser)
    ?.map((item) => {
      const { id, name, parentId } = item;

      if (parentId) {
        return {
          ...item,
          groupId: parentId,
        };
      }

      groups[id] = {
        title: name,
      };

      return {
        ...item,
        groupId: id,
        badge: undefined,
      };
    });

  return {
    items,
    groups,
  };
};

export const accountSettings = getAccountSettings({ accounts });
