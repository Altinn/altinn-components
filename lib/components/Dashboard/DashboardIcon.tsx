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
  type IconTheme,
  type SvgElement,
  isAvatarGroupProps,
  isAvatarProps,
  isIconProps,
} from '..';
import styles from './dashboardIcon.module.css';

export type DashboardIconSize = 'sm' | 'md' | 'lg';

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

export interface DashboardIconProps {
  loading?: boolean;
  size?: DashboardIconSize;
  icon?: IconProps | SvgElement | AvatarProps | AvatarGroupProps;
  theme?: IconTheme;
  badge?: BadgeProps | undefined;
}

export const DashboardIcon = ({ loading, size, icon, theme, badge }: DashboardIconProps) => {
  if (!icon) {
    return null;
  }

  if (loading) {
    return <Icon className={styles.icon} svgElement={XMarkIcon} loading={true} />;
  }

  return (
    <div className={styles.icon} data-size={size}>
      {(isAvatarProps(icon) && <Avatar {...icon} />) ||
        (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
        (isIconProps(icon) && <Icon {...(icon as IconProps)} theme={icon?.theme || theme} />) ||
        (isReactNode(icon) && icon) || <Icon theme={theme} svgElement={icon as SvgElement} />}
      {badge && <Badge {...badge} className={styles.badge} />}
    </div>
  );
};
