import { type MouseEventHandler, useState } from "react";
import { HeaderButton } from "./HeaderButton";
import { Menu, type MenuHeaderProps, type MenuItemProps } from "../Menu";
import styles from "./globalMenu.module.css";
import cx from "classnames";
import type { AvatarType } from "../Avatar";

export type Account = {
  type: AvatarType;
  name: string;
  selected?: boolean;
  group?: string;
};

export type AccountSearch = {
  placeholder: string;
  getResultsLabel?: (hits: number) => string;
  hidden?: boolean;
};

export interface GlobalMenuProps {
  expanded: boolean;
  onToggle: MouseEventHandler;
  menu: MenuItemProps[];
  menuGroups?: Record<string, MenuHeaderProps>;
  accounts?: Account[];
  accountGroups?: Record<string, MenuHeaderProps>;
  menuLabel?: string;
  backLabel?: string;
  accountSearch?: AccountSearch;
  className?: string;
}

const defaultResultLabel = (hits: number) => `${hits} hits`;

export const GlobalMenu = ({
  className,
  expanded,
  onToggle,
  accounts = [],
  accountGroups = {},
  accountSearch,
  menu = [],
  menuGroups,
  menuLabel = "Menu",
  backLabel = "Back",
}: GlobalMenuProps) => {
  const accountMenu: MenuItemProps[] = accounts.map((account) => ({
    group: account.group || "search",
    selected: account.selected,
    title: account.name,
    avatar: {
      type: account.type,
      name: account.name,
    },
  }));

  const selectedAccount = accountMenu.find((account) => account.selected);
  const [selectAccount, setSelectAccount] = useState<boolean>(false);
  const [filterString, setFilterString] = useState<string>("");

  const onToggleAccounts = () => {
    setSelectAccount((prevState) => !prevState);
  };

  const accountMenuItem: MenuItemProps = {
    ...selectedAccount,
    selected: false,
    size: "lg",
    onClick: onToggleAccounts,
  };

  const globalMenu = selectedAccount ? [accountMenuItem, ...menu] : menu;

  const filteredAccountMenu = filterString
    ? accountMenu
        .filter((item) =>
          item?.title?.toLowerCase().includes(filterString.toLowerCase())
        )
        .map((item) => {
          return {
            ...item,
            group: "search",
          };
        })
    : accountMenu;

  const filterAccountGroups = filterString
    ? {
        search: {
          title:
            accountSearch?.getResultsLabel?.(filteredAccountMenu.length) ??
            defaultResultLabel(filteredAccountMenu.length),
        },
      }
    : accountGroups;

  const accountSearchItem = {
    type: "search",
    placeholder: accountSearch?.placeholder ?? "Find account",
    hidden: accountSearch?.hidden,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setFilterString(event.target.value),
  };

  const accountSwitcher: MenuItemProps[] = [
    {
      title: backLabel ?? "Back",
      icon: "arrow-left",
      onClick: onToggleAccounts,
    },
    accountSearchItem,
    ...(filteredAccountMenu.length > 0
      ? filteredAccountMenu
      : [{ group: "search", hidden: true }]),
  ];

  return (
    <div className={cx(styles.button, className)}>
      <HeaderButton
        as="div"
        avatar={accountMenuItem.avatar}
        onClick={onToggle}
        expanded={expanded}
        label={menuLabel}
      />
      <div className={styles?.dropdown} aria-expanded={expanded}>
        {selectAccount ? (
          <Menu
            theme="global"
            groups={filterAccountGroups}
            items={accountSwitcher}
          />
        ) : (
          <Menu theme="global" groups={menuGroups} items={globalMenu} />
        )}
      </div>
    </div>
  );
};
