import { HeaderButton } from "./HeaderButton";
import styles from "./accountMenu.module.css";
import { Menu, MenuItemProps } from "../Menu";

export type Account = {
  type: string;
  name: string;
};

export interface AccountMenuProps {
  expanded: boolean;
  account: Account;
  items: MenuItemProps[];
  className: string;
}

export const AccountMenu = ({ expanded, account, items }: AccountMenuProps) => {
  return (
    <div className={styles.toggle}>
      <HeaderButton
        as="div"
        avatar={account}
        expanded={expanded}
      ></HeaderButton>

      <div className={styles?.dropdown}>
        <Menu theme="global" color="subtle" items={items} />
      </div>
    </div>
  );
};
