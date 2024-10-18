import { ReactNode, MouseEventHandler } from "react";
import {
  ButtonBase,
  type ButtonColor,
  type ButtonSize,
  type ButtonVariant,
} from "./ButtonBase";
import { Icon } from "../Icon";
import cx from "classnames";

import styles from "./button.module.css";

export interface ButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  reverse?: boolean;
  selected?: boolean;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  icon?: string;
  label?: string;
  children?: ReactNode;
}

export const Button = ({
  size = "md",
  variant,
  color,
  reverse = false,
  selected = false,
  icon,
  label = "Label",
  href,
  onClick,
  children,
}: ButtonProps) => {
  return (
    <ButtonBase
      size={size}
      variant={variant}
      color={color}
      selected={selected}
      href={href}
      onClick={onClick}
      className={cx(
        styles.button,
        reverse ? styles.reverse : "",
        styles[variant]
      )}
    >
      <span className={styles.label} data-size={size}>
        {children || label}
      </span>
      {icon ? (
        <span className={styles.icon} data-size={size}>
          <Icon name={icon} />
        </span>
      ) : (
        ""
      )}
    </ButtonBase>
  );
};
