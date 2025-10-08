import { type AccountDataGroups, type AccountDataProps, accounts } from '.';

export const getAccountItem = ({
  id = 'company',
  type = 'company',
  name = 'Company Name',
  isCurrentEndUser = false,
  isDeleted = false,
  favourite,
  accountIds,
  uniqueId,
  parentId,
  phone,
  email,
  smsAlerts,
  emailAlerts,
  address,
}: AccountDataProps) => {
  const getAccountIcon = () => {
    if (type === 'group') {
      const avatarGroup = accountIds
        ?.map((id) => {
          const account = accounts.find((a) => a.id === id);
          return account ? { id: account.id, name: account.name, type: account.type } : null;
        })
        .filter(Boolean);

      return {
        items: avatarGroup,
      };
    }

    if (parentId) {
      return {
        type,
        name,
        variant: 'outline',
      };
    }

    return {
      type,
      name,
    };
  };

  const getAccountBadge = () => {
    if (type === 'group') {
      return {
        label: accountIds?.length + ' aktører',
      };
    }
    if (isDeleted) {
      return {
        color: 'alert',
        variant: 'base',
        label: 'Slettet',
      };
    }

    if (isCurrentEndUser) {
      return {
        color: 'person',
        label: 'Deg',
      };
    }

    return undefined;
  };

  const getAccountDescription = () => {
    if (type === 'company' && parentId) {
      const parentAccount = accounts.find((a) => a.id === parentId);

      return '↳ Org. nr: ' + uniqueId + ', del av ' + parentAccount?.name;

      /*
      return (
        "Org. nr: " + uniqueId + " →  Underenhet av " + parentAccount?.uniqueId
      );*/
    }
    if (type === 'company' && uniqueId) {
      return 'Org. nr: ' + uniqueId;
    }
    if (type === 'person' && uniqueId) {
      return 'Fødselsnummer: ' + uniqueId;
    }
  };

  const icon = getAccountIcon();
  const description = getAccountDescription();
  const badge = getAccountBadge();

  const parent = accounts.find((a) => a.id === parentId);
  const parentName = parent ? parent.name : null; //
  const groupName = parentName ? [parentName, name].join('-') : name;

  return {
    id,
    groupName,
    type,
    name,
    icon,
    favourite,
    badge,
    title: name,
    description,
    parentName,
    parentId,
    accountIds,
    isDeleted,
    isCurrentEndUser,
    uniqueId,
    phone,
    email,
    smsAlerts,
    emailAlerts,
    address,
  };
};

export function sortAccountsByKey<AccountDataProps>(
  data: AccountDataProps[],
  key: keyof AccountDataProps,
  reverse = false,
): AccountDataProps[] {
  return data.slice().sort((a, b) => {
    const aVal = a[key] || 'a';
    const bVal = b[key] || 'a';

    if (aVal === bVal) return 0;
    if (aVal === undefined) return 1;
    if (bVal === undefined) return -1;

    if (aVal < bVal) return reverse ? 1 : -1;
    return reverse ? -1 : 1;
  });
}

export const getAccountItems = ({
  accounts,
}: {
  accounts?: AccountDataProps[];
}) => {
  const unordered = accounts?.map((item) => getAccountItem(item));
  const items = sortAccountsByKey(unordered as AccountDataProps[], 'name');

  return items;
};

export const groupAccountsByParent = (accounts: AccountDataProps[]) => {
  const groups: AccountDataGroups = {
    a1: {
      title: 'Deg selv',
    },
    a2: { title: '' },
    a3: { title: '' },
    a4: { title: '' },
    b1: {
      title: 'Personer',
    },
    b2: {
      title: '',
    },
    c1: {
      title: 'Virksomheter',
    },
    c2: {
      title: '',
    },
  };

  const unordered = [...accounts]?.map((item) => getAccountItem(item));

  const sortedByName = sortAccountsByKey(unordered as AccountDataProps[], 'name');

  const sortedByParentId = sortAccountsByKey(sortedByName as AccountDataProps[], 'parentId');

  /** Group accounts by relationships */

  const groupedItems: AccountDataProps[] = sortedByParentId?.map((item) => {
    const { id, name, type, favourite, parentName, isCurrentEndUser, isDeleted } = item;

    if (isCurrentEndUser) {
      return {
        ...item,
        groupId: 'a1',
      };
    }

    if (type === 'person') {
      return {
        ...item,
        groupId: favourite ? 'a2' : 'b1',
      };
    }

    if (type === 'company') {
      const groupName = parentName || name;
      const groupId = isDeleted ? 'c2' + groupName : 'c1' + groupName;

      groups[groupId] = {
        title: '',
      };

      return {
        ...item,
        groupName,
        groupId: favourite ? 'a2' : groupId,
      };
    }

    if (type === 'group' && id === 'all-people') {
      return {
        ...item,
        groupId: 'a4',
      };
    }

    if (type === 'group' && id === 'all-companies') {
      return {
        ...item,
        groupId: 'a4',
      };
    }

    if (type === 'group') {
      return {
        ...item,
        groupId: 'a3',
      };
    }

    return item;
  });

  /* set title of first favourite group */

  const favourites = groupedItems?.filter((item) => item.favourite || item.type === 'group');

  const sortedFavourites = sortAccountsByKey(favourites as AccountDataProps[], 'groupId');

  const firstFavouriteGroup = sortedFavourites[0];

  if (firstFavouriteGroup?.groupId) {
    groups[firstFavouriteGroup.groupId] = {
      title: 'Favoritter',
    };
  }

  /* set title of first company group */

  const companies = groupedItems?.filter((item) => item.type === 'company' && !item.favourite);
  const sortedCompanies = sortAccountsByKey(companies as AccountDataProps[], 'groupId');

  const firstCompanyGroup = sortedCompanies[0];

  if (firstCompanyGroup?.groupId) {
    groups[firstCompanyGroup.groupId] = {
      title: 'Virksomheter',
    };
  }

  const items = sortAccountsByKey(groupedItems as AccountDataProps[], 'groupId');

  return {
    items,
    groups,
  };
};
