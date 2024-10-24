import styles from "./header.module.css";
import { type ReactNode, useState } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderButton } from "./HeaderButton";
import { HeaderSearch, type HeaderSearchProps } from "./HeaderSearch";
import { GlobalMenu, type GlobalMenuProps } from "./GlobalMenu";

export type HeaderColor = "default" | "dark" | "light";

export interface HeaderAccountProps {
  type?: string;
  name?: string;
}

type ExpandedType = "search" | "account";

export interface HeaderProps {
  color?: HeaderColor;
  globalMenu: GlobalMenuProps;
  search?: HeaderSearchProps;
}

export const Header = ({ color, search, globalMenu }: HeaderProps) => {
  const [expandedType, setExpandedType] = useState<ExpandedType | null>(null);

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
      {globalMenu && (
        <GlobalMenu
          {...globalMenu}
          expanded={expandedType === "account"}
          onToggle={() => onToggle("account")}
          className={styles?.button}
        />
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
