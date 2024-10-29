import type { MouseEventHandler, ElementType } from "react";
import { ButtonBase } from "../Button";
import { DigdirLogomark } from "./DigdirLogomark.tsx";
import styles from "./headerLogo.module.css";
import cx from "classnames";

export interface HeaderLogoProps {
  className?: string;
  as?: ElementType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
}

export const HeaderLogo = ({
  className,
  as = "a",
  title = "Altinn",
  href = "/",
}: HeaderLogoProps) => {
  return (
    <ButtonBase as={as} className={cx(styles.logo, className)} href={href}>
      <DigdirLogomark className={styles.symbol} />
      <span className={styles.text}>{title}</span>
    </ButtonBase>
  );
};
