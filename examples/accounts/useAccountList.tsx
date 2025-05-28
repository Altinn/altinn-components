import { useState } from "react";
import {
  defaultAccounts,
  accountListGroups,
  getAccountItems,
  useAccountListToolbar,
} from "../";
import type { AccountListProps, AccountListItemProps } from "../../lib";

type UseAccountListProps = {
  accounts?: AccountListItemProps[];
  accountId?: string;
  items?: AccountListItemProps[];
} & Omit<AccountListProps, "items">;

export const useAccountList = ({
  accounts = defaultAccounts,
  ...props
}: UseAccountListProps) => {
  const items = props?.items || getAccountItems({ accounts });
  const groups = props?.groups || accountListGroups;

  const defaultFavouriteIds = items
    ?.filter((item) => item.favourite)
    .map((item) => item.id) as string[];

  const [favouriteIds, setFavouriteIds] =
    useState<string[]>(defaultFavouriteIds);

  const [expandedId, setExpandedId] = useState<string>("");

  const onToggle = (id: string) => {
    console.log("onToggle", id);
    setExpandedId((prevState) => {
      if (prevState === id) {
        return "";
      }
      return id;
    });
  };

  const onToggleFavourite = (id: string) => {
    setFavouriteIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((favId) => favId !== id);
      }
      return [...prevState, id];
    });
  };

  const toolbar = useAccountListToolbar();
  const search = toolbar?.search;
  const q = search?.value;

  const filteredItems = items
    ?.filter((item) => {
      if (!q) return true;
      return item.name.toLowerCase().includes(q.toLowerCase());
    })
    .map((item) => {
      return {
        ...item,
        collapsible: true,
        expanded: item.id === expandedId,
        as: "button",
        ariaLabel: item.name,
        favourite: favouriteIds.includes(item.id),
        onToggleFavourite: () => onToggleFavourite(item.id),
        onClick: () => onToggle(item.id),
      };
    });

  // search result

  if (q) {
    const hits = filteredItems.length;
    const hitsTitle = hits ? `${hits} treff` : "Ingen treff";

    return {
      toolbar,
      items: filteredItems?.map((item) => ({
        ...item,
        groupId: "search",
      })),
      groups: {
        search: {
          title: hitsTitle,
        },
      },
    };
  }

  // grouped results

  return {
    toolbar,
    items: filteredItems,
    groups,
    expandedId,
    onToggle,
    onToggleFavourite,
  };
};
