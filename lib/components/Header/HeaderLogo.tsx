import { MouseEventHandler, ElementType } from "react";
import { ButtonBase } from "../Button";
import { DigdirSymbol } from "./DigdirSymbol";
import { RiksSymbol } from "./RiksSymbol";
import styles from "./headerLogo.module.css";

export interface LogoProps {
  as?: ElementType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string;
}

export const HeaderLogo = ({
  as = "a",
  logo = "altinn",
  text = "Altinn",
  href = "/",
}: LogoProps) => {
  return (
    <ButtonBase as={as} className={styles.logo} href={href}>
      {logo === "riks" ? (
        <RiksSymbol className={styles.riksSymbol} />
      ) : (
        <DigdirSymbol className={styles.symbol} />
      )}
      <span className={styles.text}>{text}</span>
    </ButtonBase>
  );
};
