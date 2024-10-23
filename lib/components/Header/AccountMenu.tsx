import { EventHandler, type MouseEventHandler, useState } from "react";
import { HeaderButton } from "./HeaderButton";
import { Menu, type MenuItemProps, type MenuHeaderProps } from "../Menu";
import styles from "./accountMenu.module.css";
import cx from "classnames";
import type { AvatarType } from "../Avatar";

export type Account = {
  type: AvatarType;
  group: string;
  name: string;
  selected: boolean;
};

export interface AccountMenuProps {
  expanded: boolean;
  onToggle: MouseEventHandler;
  accounts: Account[];
  accountsEmptyLabel?: string;
  accountGroups: Record<string, MenuHeaderProps>;
  getAccountSearchLabel: (hits: number) => string;
  label: string;
  menu: MenuItemProps[];
  menuGroups: Record<string, MenuHeaderProps>;
  className?: string;
}

export const AccountMenu = ({
  className,
  expanded,
  onToggle,
  accounts,
  accountGroups,
  getAccountSearchLabel,
  menu,
  menuGroups,
  label = "Menu",
}: AccountMenuProps) => {
  const accountMenu: MenuItemProps[] = accounts.map((account) => ({
    group: account.group,
    selected: account.selected,
    title: account.name,
    avatar: {
      type: account.type,
      name: account.name,
    },
  }));

  const selectedAccount = accountMenu.find((account) => account.selected);

  const [selectAccount, setSelectAccount] = useState<boolean>(false);
  const [q, setQ] = useState<string>("");

  const onToggleAccounts = () => {
    setSelectAccount((prevState) => !prevState);
  };

  const accountMenuItem: MenuItemProps = {
    ...selectedAccount,
    selected: false,
    size: "lg",
    onClick: onToggleAccounts,
  };

  const globalMenu = [accountMenuItem, ...menu];

  const filteredAccountMenu = q
    ? accountMenu
        .filter((item) => item?.title?.toLowerCase().includes(q.toLowerCase()))
        .map((item) => {
          return {
            ...item,
            group: "search",
          };
        })
    : accountMenu;

  const filterAccountGroups = q
    ? {
        search: {
          title: getAccountSearchLabel(filteredAccountMenu.length),
        },
      }
    : accountGroups;

  const accountSearch = {
    type: "search",
    placeholder: "Finn konto",
    onChange: (event: React.ChangeEvent<HTMLInputElement>) =>
      setQ(event.target.value),
  };

  const accountSwitcher: MenuItemProps[] = [
    {
      title: "Avbryt",
      icon: "arrow-left",
      onClick: onToggleAccounts,
    },
    accountSearch,
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
        label={label}
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
