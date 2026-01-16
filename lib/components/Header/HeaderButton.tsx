import { PadlockLockedIcon, XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import { Avatar, type AvatarProps } from '../Avatar';
import { AvatarGroup, type AvatarGroupProps } from '../Avatar';
import { Badge, type BadgeProps } from '../Badge';
import { Button, type ButtonProps } from '../Button';
import { Icon, type SvgElement } from '../Icon';

import styles from './headerButton.module.css';

export interface HeaderButtonProps extends ButtonProps {
  label?: string;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  expanded?: boolean;
  badge?: BadgeProps | undefined;
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
      <Button {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <span className={cx(styles.icon, styles.closeIcon)}>
          <Icon svgElement={XMarkIcon} />
        </span>
        {badge && <Badge {...badge} className={styles.badge} />}
      </Button>
    );
  }

  if (avatarGroup) {
    return (
      <Button {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <AvatarGroup {...avatarGroup} className={styles.avatarGroup} />
        {badge && <Badge {...badge} className={styles.badge} />}
      </Button>
    );
  }

  if (avatar) {
    return (
      <Button {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
        <span className={styles.label}>{label}</span>
        <Avatar type={avatar?.type} name={avatar?.name} style={{ fontSize: '2.25rem' }} />
        {badge && <Badge {...badge} className={styles.badge} />}
      </Button>
    );
  }

  return (
    <Button {...buttonProps} as={as} variant={variant} color={color} className={cx(styles.button, className)}>
      <span className={styles.label}>{label}</span>
      <span className={cx(styles.icon, styles.loginIcon)}>
        <Icon svgElement={icon as SvgElement} />
      </span>
      {badge && <Badge {...badge} className={styles.badge} />}
    </Button>
  );
};
