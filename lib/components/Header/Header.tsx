import styles from "./header.module.css";
import { type ReactNode, useState } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderButton } from "./HeaderButton";
import { HeaderSearch, type HeaderSearchProps } from "./HeaderSearch";
import {Account, AccountMenu} from "./AccountMenu";

export type HeaderColor = "default" | "dark" | "light";

export interface HeaderAccountProps {
  type?: string;
  name?: string;
}

type ExpandedType = "search" | "account";

export interface HeaderProps {
  headerLabel: string;
  color?: HeaderColor;
  account?: Account;
  search?: HeaderSearchProps;
  children?: ReactNode;
}

export const Header = ({ account, search, headerLabel }: HeaderProps) => {
  const [expandedType, setExpandedType] = useState<ExpandedType | null>(null);

  const onToggle = (type: ExpandedType) => {
    if (expandedType === type) {
      setExpandedType(null);
    } else {
      setExpandedType(type);
    }
  };

  const onSearchFocus = () => {
    setExpandedType('search');
  };

  const onSearchBlur = () => {
    setExpandedType(null);
  };

  return (
    <header className={styles.header}>
      <HeaderLogo className={styles?.logo} />
      {account ? (
        <AccountMenu
          account={account}
          expanded={expandedType === "account"}
          onToggle={() => onToggle("account")}
          className={styles?.button}
          menu={[]}
          label={headerLabel}/>
      ) : (
        <HeaderButton className={styles?.button} label={headerLabel}/>
      )}
      {search && (
        <HeaderSearch
          {...search}
          className={styles?.search}
          expanded={expandedType === "search"}
          onBlur={onSearchBlur}
          onFocus={onSearchFocus}
        />
      )}
    </header>
  );
};
