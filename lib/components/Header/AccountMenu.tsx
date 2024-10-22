import type { MouseEventHandler } from "react";
import { HeaderButton } from "./HeaderButton";
import { Menu, MenuItemProps } from "../Menu";
import styles from "./accountMenu.module.css";
import cx from "classnames";

export type Account = {
  type: string;
  name: string;
};

export interface AccountMenuProps {
  className: string;
  expanded: boolean;
  onToggle: MouseEventHandler;
  account: Account;
  items: MenuItemProps[];
  className: string;
}

export const AccountMenu = ({
  className,
  expanded,
  onToggle,
  account,
  items,
}: AccountMenuProps) => {
  const accountMenuItem = {
    size: "lg",
    title: account?.name,
    avatar: {
      type: account?.type,
      name: account?.name,
    },
  };

  const accountMenu = items ? [accountMenuItem, ...items] : [accountMenuItem];

  return (
    <div className={cx(styles.button, className)}>
      <HeaderButton
        as="div"
        avatar={account}
        onClick={onToggle}
        expanded={expanded}
      ></HeaderButton>
      <div className={styles?.dropdown} aria-expanded={expanded}>
        <Menu theme="global" items={accountMenu} />
      </div>
    </div>
  );
};
