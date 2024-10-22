import styles from "./header.module.css";
import { type ReactNode, useState } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderButton } from "./HeaderButton";
import { HeaderSearch, HeaderSearchProps } from "./HeaderSearch";
import { AccountMenu } from "./AccountMenu";

export type HeaderColor = "default" | "dark" | "light";

export interface HeaderAccountProps {
  type?: string;
  name?: string;
}

type ExpandedType = "search" | "account";

export interface HeaderProps {
  color?: HeaderColor;
  account?: HeaderAccountProps;
  search?: HeaderSearchProps;
  children?: ReactNode;
}

export const Header = ({ account, search }: HeaderProps) => {
  const [expandedType, setExpandedType] = useState<ExpandedType>(null);

  const onToggle = (type: ExpandedType) => {
    if (expandedType === type) {
      setExpandedType(null);
    } else {
      setExpandedType(type);
    }
  };

  const onSearchFocus = () => {
    setExpandedType("search");
  };

  const onSearchBlur = () => {
    setExpandedType(null);
  };

  return (
    <header className={styles.header}>
      <HeaderLogo className={styles?.logo} />
      {account ? (
        <AccountMenu
          className={styles?.button}
          account={account}
          expanded={expandedType === "account"}
          onToggle={() => onToggle("account")}
        ></AccountMenu>
      ) : (
        <HeaderButton className={styles?.button}></HeaderButton>
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
