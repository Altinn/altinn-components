import { useState } from "react";
import type {
  Account,
  AccountMenuProps,
  AccountListItemProps,
} from "../../lib";

import {
  defaultAccounts,
  accountMenuGroups,
  accountMenuSearch,
  getAccountItems,
} from "./";

type UseAccountMenuProps = {
  accountId?: string;
  accounts?: AccountListItemProps[];
  items?: AccountListItemProps[];
} & Omit<AccountMenuProps, "items">;

export const useAccountMenu = ({
  accountId,
  accounts = defaultAccounts,
  ...props
}: UseAccountMenuProps) => {
  const items = props?.items || getAccountItems({ accounts });
  const groups = props?.groups || accountMenuGroups;
  const search = props?.search || accountMenuSearch;

  /* if no accountId, return first account */
  const defaultAccount =
    items?.find((item) => item.id === accountId) ||
    items?.find((item) => item.type === accountId) ||
    items?.[0];

  const [currentAccount, setCurrentAccount] = useState<Account | undefined>(
    defaultAccount as Account | undefined
  );

  const onSelectAccount = (id: string) => {
    const account = items?.find((item) => item.id === id);
    setCurrentAccount({
      id: account?.id,
      name: account?.name,
      type: account?.type,
      description: account?.description,
    } as Account);
  };

  return {
    ...props,
    items,
    groups,
    search,
    currentAccount,
    onSelectAccount,
  };
};
