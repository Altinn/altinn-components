import { MouseEventHandler, ElementType } from "react";
import { ButtonBase } from "../Button";
import { DigdirSymbol } from "./DigdirSymbol";
import styles from "./headerLogo.module.css";

export interface LogoProps {
  as?: ElementType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

export const HeaderLogo = ({
  as = "a",
  title = "Altinn",
  href = "/",
}: LogoProps) => {
  return (
    <ButtonBase as={as} className={styles.logo} href={href}>
      <DigdirSymbol className={styles.symbol} />
      <span className={styles.text}>{title}</span>
    </ButtonBase>
  );
};
