import type { MouseEventHandler } from "react";
import { HeaderButton } from "./HeaderButton";
import { Menu, type MenuItemProps } from "../Menu";
import styles from "./accountMenu.module.css";
import cx from "classnames";
import type { AvatarType } from "../Avatar";

export type Account = {
  type: AvatarType;
  name: string;
};

export interface AccountMenuProps {
  className: string;
  expanded: boolean;
  onToggle: MouseEventHandler;
  account: Account;
  label: string;
  items: MenuItemProps[];
}

export const AccountMenu = ({
  className,
  expanded,
  onToggle,
  account,
  items,
  label = 'Menu'
}: AccountMenuProps) => {

  const { name, type } = account;

  const accountMenuItem: MenuItemProps = {
    size: "lg",
    title: name,
    avatar: {
      type,
      name,
    },
  };

  const accountMenu = [accountMenuItem, ...items];

  return (
    <div className={cx(styles.button, className)}>
      <HeaderButton
        as="div"
        avatar={account}
        onClick={onToggle}
        expanded={expanded}
        label={label}
      />
      <div className={styles?.dropdown} aria-expanded={expanded}>
        <Menu theme="global" items={accountMenu} />
      </div>
    </div>
  );
};
