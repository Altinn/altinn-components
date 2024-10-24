import styles from "./header.module.css";
import { type ReactNode, useState } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderButton } from "./HeaderButton";
import { HeaderSearch, type HeaderSearchProps } from "./HeaderSearch";
import { type Account, GlobalMenu } from "./GlobalMenu";

export type HeaderColor = "default" | "dark" | "light";

export interface HeaderAccountProps {
  type?: string;
  name?: string;
}

type ExpandedType = "search" | "account";

export interface HeaderProps {
  headerLabel: string;
  color?: HeaderColor;
  accounts?: Account[];
  search?: HeaderSearchProps;
  children?: ReactNode;
}

export const Header = ({ accounts = [], search, headerLabel }: HeaderProps) => {
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
      {accounts.length > 0 ? (
        <GlobalMenu
          accounts={accounts}
          expanded={expandedType === "account"}
          onToggle={() => onToggle("account")}
          className={styles?.button}
          menu={[]}
          menuLabel={headerLabel}
        />
      ) : (
        <HeaderButton className={styles?.button} label={headerLabel} />
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
