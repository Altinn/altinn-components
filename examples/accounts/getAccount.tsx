import type { AccountListItemProps } from "../../lib";
import { accounts } from ".";

export const getAccountItem = ({
  id = "company",
  type = "company",
  name = "Company Name",
  isCurrentEndUser = false,
  favourite,
  accountIds,
  uniqueId,
  parentId,
}: AccountListItemProps) => {
  const getAccountGroupId = () => {
    if (isCurrentEndUser) {
      return "primary";
    }
    if (favourite) {
      return "favourites";
    }
    if (type === "group") {
      return "groups";
    }

    return "secondary";
  };

  const getAccountIcon = () => {
    switch (type) {
      case "group": {
        const avatarGroup = accountIds
          ?.map((id) => {
            const account = accounts.find((a) => a.id === id);
            return account
              ? { id: account.id, name: account.name, type: account.type }
              : null;
          })
          .filter(Boolean);

        return {
          items: avatarGroup,
        };
      }

      default:
        return {
          type,
          name,
        };
    }
  };

  const getAccountDescription = () => {
    if (type === "company" && parentId) {
      const parentAccount = accounts.find((a) => a.id === parentId);
      return parentAccount?.name + ", org. nr: " + uniqueId;
    }
    if (type === "company" && uniqueId) {
      return "Org. nr: " + uniqueId;
    }
    if (type === "person" && uniqueId) {
      return "Fødselsnummer: " + uniqueId;
    }
  };

  const icon = getAccountIcon();
  const description = getAccountDescription();
  const groupId = getAccountGroupId();

  return {
    id,
    groupId,
    type,
    name,
    icon,
    favourite,
    title: name,
    description,
    parentId,
    accountIds,
    isCurrentEndUser,
    uniqueId,
  };
};

export const getAccountItems = ({
  accounts,
}: {
  accounts?: AccountListItemProps[];
}) => {
  const items = accounts?.map((item) => getAccountItem(item));

  const primaryAccounts = items?.filter(
    (item) => item.groupId === "primary"
  ) as AccountListItemProps[];

  const favouriteAccounts = items?.filter(
    (item) => item.groupId === "favourites"
  ) as AccountListItemProps[];

  const groupAccounts = items?.filter(
    (item) => item.groupId === "groups"
  ) as AccountListItemProps[];

  const secondaryAccounts = items?.filter(
    (item) => item.groupId === "secondary"
  ) as AccountListItemProps[];

  const sortedAccounts = [
    ...primaryAccounts,
    ...favouriteAccounts,
    ...groupAccounts,
    ...secondaryAccounts,
  ];

  return sortedAccounts;
};
