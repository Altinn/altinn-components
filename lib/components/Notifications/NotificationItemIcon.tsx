import { XMarkIcon } from '@navikt/aksel-icons';
import { type ReactNode, isValidElement } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  Badge,
  type BadgeProps,
  Icon,
  type IconProps,
  type SvgElement,
  isAvatarGroupProps,
  isAvatarProps,
  isIconProps,
} from '..';
import styles from './notificationItemIcon.module.css';

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

export interface NotificationItemBadgeProps {
  color?: BadgeProps['color'];
  label: BadgeProps['label'];
}

export interface NotificationItemIconProps {
  loading?: boolean;
  icon?: IconProps | SvgElement | AvatarProps | AvatarGroupProps;
  badge?: NotificationItemBadgeProps | undefined;
}

export const NotificationItemIcon = ({ loading, icon, badge }: NotificationItemIconProps) => {
  if (!icon) {
    return null;
  }

  if (loading) {
    return (
      <div className={styles.icon}>
        <Icon svgElement={XMarkIcon} loading={true} />
      </div>
    );
  }

  return (
    <div className={styles.icon}>
      {(isAvatarProps(icon) && <Avatar {...icon} className={styles.avatar} />) ||
        (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
        (isIconProps(icon) && (
          <>
            <span className={styles.shape} />
            <Icon {...(icon as IconProps)} />
          </>
        )) ||
        (isReactNode(icon) && icon) || (
          <>
            <span className={styles.shape} />
            <Icon svgElement={icon as SvgElement} />
          </>
        )}
      {badge && <Badge {...badge} size="xs" variant="base" className={styles.badge} />}
    </div>
  );
};
