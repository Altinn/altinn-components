import { ElementType } from "react";
import { ButtonBase } from "../Button";
import { Avatar, AvatarProps } from "../Avatar";
import { Icon } from "../Icon";
import cx from "classnames";

import styles from "./headerButton.module.css";

export interface HeaderButtonProps {
  className: string;
  as?: ElementType;
  expanded?: boolean;
  label?: string;
  icon?: string;
  avatar?: AvatarProps;
}

export const HeaderButton = ({
  className,
  as = "button",
  avatar,
  icon = "padlock-locked",
  expanded,
  children,
  label = "Meny",
  ...rest
}: HeaderButtonProps) => {
  if (expanded) {
    return (
      <ButtonBase {...rest} as={as} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <span className={cx(styles.icon, styles.closeIcon)}>
          <Icon name={"x-mark"} />
        </span>
      </ButtonBase>
    );
  }

  if (avatar) {
    return (
      <ButtonBase {...rest} as={as} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <Avatar type={avatar?.type} name={avatar?.name} size="lg" />
      </ButtonBase>
    );
  }

  return (
    <ButtonBase {...rest} as={as} className={cx(styles.button, className)}>
      <span className={styles.label}>{label}</span>
      <span className={cx(styles.icon, styles.loginIcon)}>
        <Icon name={icon} />
      </span>
    </ButtonBase>
  );
};
