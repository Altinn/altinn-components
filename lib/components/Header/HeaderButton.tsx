import type { ElementType } from "react";
import { ButtonBase, type ButtonProps } from "../Button";
import { Avatar, type AvatarProps } from "../Avatar";
import { Icon, type IconName } from "../Icon";
import cx from "classnames";

import styles from "./headerButton.module.css";

export interface HeaderButtonProps extends ButtonProps {
  label?: string;
  avatar?: AvatarProps;
  as?: ElementType;
  className?: string;
  expanded?: boolean;
  icon?: IconName;
}

export const HeaderButton = ({
  className,
  as = "button",
  avatar,
  icon = "padlock-locked",
  expanded,
  label = "Menu",
  ...buttonProps
}: HeaderButtonProps) => {
  if (expanded) {
    return (
      <ButtonBase
        {...buttonProps}
        as={as}
        className={cx(styles.button, className)}
      >
        <span className={styles.label}>{label}</span>
        <span className={cx(styles.icon, styles.closeIcon)}>
          <Icon name={"x-mark"} />
        </span>
      </ButtonBase>
    );
  }

  if (avatar) {
    return (
      <ButtonBase
        {...buttonProps}
        as={as}
        className={cx(styles.button, className)}
      >
        <span className={styles.label}>{label}</span>
        <Avatar type={avatar?.type} name={avatar?.name} size="lg" />
      </ButtonBase>
    );
  }

  return (
    <ButtonBase
      {...buttonProps}
      as={as}
      className={cx(styles.button, className)}
    >
      <span className={styles.label}>{label}</span>
      <span className={cx(styles.icon, styles.loginIcon)}>
        <Icon name={icon} />
      </span>
    </ButtonBase>
  );
};
