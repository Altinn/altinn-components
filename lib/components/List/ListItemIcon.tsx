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
import styles from './listItemIcon.module.css';

export type ListItemIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

export interface ListItemIconProps {
  loading?: boolean;
  size?: ListItemIconSize;
  icon?: IconProps | SvgElement | AvatarProps | AvatarGroupProps | ReactNode;
  theme?: IconTheme;
  badge?: BadgeProps | undefined;
}

export const ListItemIcon = ({ loading, size, icon, theme, badge }: ListItemIconProps) => {
  if (!icon) {
    return null;
  }

  if (loading) {
    return <Icon className={styles.wrapper} svgElement={XMarkIcon} loading={true} />;
  }

  return (
    <div className={styles.wrapper} data-size={size}>
      {(isAvatarProps(icon) && (
        <Avatar
          {...icon}
          className={styles.avatar}
          innerContainerStyle={{ width: 'fit-content' }}
          avatarImageStyle={{ height: '1em', width: 'auto' }}
        />
      )) ||
        (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
        (isIconProps(icon) && <Icon {...(icon as IconProps)} theme={icon.theme || theme} className={styles.icon} />) ||
        (isReactNode(icon) && icon) || <Icon theme={theme} svgElement={icon as SvgElement} className={styles.icon} />}
      {badge && <Badge {...badge} className={styles.badge} />}
    </div>
  );
};
