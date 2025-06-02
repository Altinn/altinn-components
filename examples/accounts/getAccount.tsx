import type { AccountListItemProps } from "../../lib";
import { Avatar } from "../../lib";
import { ArrowDownRightIcon } from "@navikt/aksel-icons";
import { accounts } from ".";

export const getAccountItem = ({
  id = "company",
  type = "company",
  name = "Company Name",
  isCurrentEndUser = false,
  isDeleted = false,
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
    if (type === "group") {
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

    if (parentId) {
      return (
        <span style={{ position: "relative" }}>
          <Avatar name={name} type={type} />
          <div
            data-theme="default"
            style={{
              display: "flex",
              position: "absolute",
              fontSize: ".5em",
              bottom: 0,
              right: 0,
              padding: ".125em",
              marginBottom: "-.25em",
              marginRight: "-.5em",
            }}
          >
            <ArrowDownRightIcon
              style={{ fontSize: "1em" }}
              aria-label="Subunit"
            />
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
    if (type === "group") {
      return {
        label: accountIds?.length + " aktører",
      };
    }
    if (isDeleted) {
      return {
        color: "alert",
        variant: "base",
        label: "Slettet",
      };
    }

    if (isCurrentEndUser) {
      return {
        color: "person",
        label: "Deg",
      };
    }
  };

  const getAccountDescription = () => {
    if (type === "company" && parentId) {
      const parentAccount = accounts.find((a) => a.id === parentId);

      return "Org. nr: " + uniqueId + ", del av " + parentAccount?.name;

      /*
      return (
        "Org. nr: " + uniqueId + " →  Underenhet av " + parentAccount?.uniqueId
      );*/
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
  };
};

function sortAccountsByKey<AccountListItemProps>(
  data: AccountListItemProps[],
  key: keyof AccountListItemProps,
  reverse = false
): AccountListItemProps[] {
  return data.slice().sort((a, b) => {
    const aVal = a[key] || "a";
    const bVal = b[key] || "a";

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
  accounts?: AccountListItemProps[];
}) => {
  const unordered = accounts?.map((item) => getAccountItem(item));
  const items = sortAccountsByKey(unordered as AccountListItemProps[], "name");

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
