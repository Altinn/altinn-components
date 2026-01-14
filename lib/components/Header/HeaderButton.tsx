import { PadlockLockedIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { ElementType } from 'react';
import { Avatar, type AvatarProps } from '../Avatar';
import { AvatarGroup, type AvatarGroupProps } from '../Avatar';
import { Badge, type BadgeProps } from '../Badge';
import { ButtonBase, type ButtonProps } from '../Button';
import { Icon, type SvgElement } from '../Icon';

import styles from './headerButton.module.css';

export interface HeaderButtonProps extends ButtonProps {
  label?: string;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  as?: ElementType;
  className?: string;
  expanded?: boolean;
  icon?: SvgElement;
  badge?: BadgeProps | undefined;
  tabIndex?: number;
}

export const HeaderButton = ({
  className,
  as = 'button',
  color = 'company',
  variant = 'solid',
  avatar,
  avatarGroup,
  icon = PadlockLockedIcon,
  expanded,
  label = 'Menu',
  badge,
  ...buttonProps
}: HeaderButtonProps) => {
  if (expanded) {
    return (
      <ButtonBase {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <span className={cx(styles.icon, styles.closeIcon)}>
          <Icon svgElement={XMarkIcon} />
        </span>
        {badge && <Badge {...badge} className={styles.badge} />}
      </ButtonBase>
    );
  }

  if (avatarGroup) {
    return (
      <ButtonBase {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <AvatarGroup {...avatarGroup} className={styles.avatarGroup} />
        {badge && <Badge {...badge} className={styles.badge} />}
      </ButtonBase>
    );
  }

  if (avatar) {
    return (
      <ButtonBase {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <Avatar type={avatar?.type} name={avatar?.name} style={{ fontSize: '2.25rem' }} />
        {badge && <Badge {...badge} className={styles.badge} />}
      </ButtonBase>
    );
  }

  return (
    <ButtonBase {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
      <span className={styles.label}>{label}</span>
      <span className={cx(styles.icon, styles.loginIcon)}>
        <Icon svgElement={icon} />
      </span>
      {badge && <Badge {...badge} className={styles.badge} />}
    </ButtonBase>
  );
};
