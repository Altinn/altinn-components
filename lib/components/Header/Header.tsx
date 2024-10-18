import styles from "./header.module.css";
import { ReactNode } from "react";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderButton } from "./HeaderButton";

export interface HeaderApp {
  logo?: string;
  name?: string;
}
export interface HeaderAccount {
  type?: string;
  name?: string;
}

export type HeaderColor = "default" | "dark" | "light";

export interface HeaderProps {
  app?: HeaderApp;
  color?: HeaderColor;
  account?: HeaderAccount;
  children?: ReactNode;
}

export const Header = ({ app, color, account, children }: HeaderProps) => {
  return (
    <header className={styles.header} data-color={color}>
      <HeaderLogo logo={app?.logo} text={app?.name} />
      {children}
      <HeaderButton avatar={account}></HeaderButton>
    </header>
  );
};
