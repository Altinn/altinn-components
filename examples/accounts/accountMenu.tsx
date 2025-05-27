import type { AccountListItemProps } from "../../lib";
import { accounts, getAccountItems, generateAccounts } from "./";

export const accountMenuSearch = {
  placeholder: "Finn konto",
  name: "search-account",
  getResultsLabel: (hits = 0) => {
    if (hits) {
      return hits + " treff";
    }
    return "Ingen treff";
  },
  hidden: false,
};

export const accountMenuGroups = {
  primary: {
    title: "Deg selv og favoritter",
  },
  secondary: {
    title: "Andre kontoer",
  },
};

export const getAccountMenu = ({
  accounts,
}: {
  accounts?: AccountListItemProps[];
}) => {
  const items = getAccountItems({ accounts });

  return {
    items,
    groups: accountMenuGroups,
    search: accountMenuSearch,
  };
};

export const accountMenu = getAccountMenu({ accounts });

export const accountMenuWithLongList = getAccountMenu({
  accounts: generateAccounts(100),
});
