import { ArrowDownRightIcon } from '@navikt/aksel-icons';
import { type AccountDataGroups, type AccountDataProps, accounts } from '.';
import { Avatar } from '../../lib';

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
  const getAccountGroupId = () => {
    if (isCurrentEndUser) {
      return 'primary';
    }
    if (favourite) {
      return 'favourites';
    }
    if (type === 'group') {
      return 'groups';
    }

    return 'secondary';
  };

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
      return (
        <span style={{ position: 'relative', display: 'inline-block' }}>
          <Avatar name={name} type={type} />
          <div
            data-theme="default"
            style={{
              display: 'flex',
              position: 'absolute',
              fontSize: '.5em',
              bottom: '0',
              right: '0',
              padding: '.125em',
              transform: 'translate(40%, 40%)',
            }}
          >
            <ArrowDownRightIcon style={{ fontSize: '1em' }} aria-label="Subunit" />
          </div>
        </span>
      );
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
  };

  const getAccountDescription = () => {
    if (type === 'company' && parentId) {
      const parentAccount = accounts.find((a) => a.id === parentId);

      return 'Org. nr: ' + uniqueId + ', del av ' + parentAccount?.name;

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
  const groupId = getAccountGroupId();
  const badge = getAccountBadge();

  return {
    id,
    groupId,
    type,
    name,
    icon,
    favourite,
    badge,
    title: name,
    description,
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

  const primaryAccounts = items?.filter((item) => item.groupId === 'primary') as AccountDataProps[];

  const favouriteAccounts = items?.filter((item) => item.groupId === 'favourites') as AccountDataProps[];

  const groupAccounts = items?.filter((item) => item.groupId === 'groups') as AccountDataProps[];

  const secondaryAccounts = items?.filter((item) => item.groupId === 'secondary') as AccountDataProps[];

  const sortedAccounts = [...primaryAccounts, ...favouriteAccounts, ...groupAccounts, ...secondaryAccounts];

  return sortedAccounts;
};

export const groupAccountsByParent = (accounts: AccountDataProps[]) => {
  const groups: AccountDataGroups = {};

  const sortedItems = sortAccountsByKey(accounts as AccountDataProps[], 'name');

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
