import cx from 'classnames';
import type { ElementType } from 'react';
import { Avatar, type AvatarProps } from '../Avatar';
import { AvatarGroup, type AvatarGroupProps } from '../Avatar';
import { ButtonBase, type ButtonProps } from '../Button';
import { Icon, type IconName } from '../Icon';

import styles from './headerButton.module.css';

export interface HeaderButtonProps extends ButtonProps {
  label?: string;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  as?: ElementType;
  className?: string;
  expanded?: boolean;
  icon?: IconName;
}

export const HeaderButton = ({
  className,
  as = 'button',
  avatar,
  avatarGroup,
  icon = 'padlock-locked',
  expanded,
  label = 'Menu',
  ...buttonProps
}: HeaderButtonProps) => {
  if (expanded) {
    return (
      <ButtonBase {...buttonProps} as={as} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <span className={cx(styles.icon, styles.closeIcon)}>
          <Icon name={'x-mark'} />
        </span>
      </ButtonBase>
    );
  }

  if (avatarGroup) {
    return (
      <ButtonBase {...buttonProps} as={as} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <AvatarGroup {...avatarGroup} size="sm" />
      </ButtonBase>
    );
  }

  if (avatar) {
    return (
      <ButtonBase {...buttonProps} as={as} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <Avatar type={avatar?.type} name={avatar?.name} size="lg" />
      </ButtonBase>
    );
  }

  return (
    <ButtonBase {...buttonProps} as={as} className={cx(styles.button, className)}>
      <span className={styles.label}>{label}</span>
      <span className={cx(styles.icon, styles.loginIcon)}>
        <Icon name={icon} />
      </span>
    </ButtonBase>
  );
};
