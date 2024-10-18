import { ReactNode, MouseEventHandler } from "react";
import {
  ButtonBase,
  type ButtonColor,
  type ButtonSize,
  type ButtonVariant,
} from "./ButtonBase";
import { Icon } from "../Icon";
import styles from "./comboButton.module.css";
import cx from "classnames";

export interface ComboButtonProps {
  size?: ButtonSize;
  variant?: ButtonVariant;
  color?: ButtonColor;
  selected?: boolean;
  label?: string;
  icon?: string;
  children?: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onIconClick?: MouseEventHandler<HTMLButtonElement>;
}

export const ComboButton = ({
  size = "md",
  variant,
  color,
  selected = false,
  label = "Label",
  icon = "x-mark",
  children,
  className,
  onClick,
  onIconClick,
}: ComboButtonProps) => {
  return (
    <ButtonBase
      as="div"
      size={size}
      variant={variant}
      color={color}
      selected={selected}
      className={cx(styles.button, className)}
    >
      <ButtonBase size={size} onClick={onIconClick} className={styles.icon}>
        <Icon name={icon} />
      </ButtonBase>
      <span data-size={size} className={styles.divider}></span>
      <ButtonBase size={size} onClick={onClick} className={styles.label}>
        {children || label}
      </ButtonBase>
    </ButtonBase>
  );
};
