import { XMarkIcon } from '@navikt/aksel-icons';
import { type ReactNode, isValidElement } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  type BadgeProps,
  Icon,
  type IconProps,
  type IconTheme,
  type SvgElement,
} from '..';
import styles from './iconOrAvatar.module.css';

export type IconOrAvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IconOrAvatarProps {
  loading?: boolean;
  size?: IconOrAvatarSize;
  icon?: IconProps | SvgElement | ReactNode;
  iconTheme?: IconTheme;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  badge?: BadgeProps | undefined;
}

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

const isIconProps = (icon: IconProps | SvgElement | ReactNode): icon is IconProps => {
  return (icon as IconProps).svgElement !== undefined || (icon as IconProps).iconUrl !== undefined;
};

export const IconOrAvatar = ({ loading, size, icon, iconTheme, avatar, avatarGroup }: IconOrAvatarProps) => {
  if (!icon && !avatar && !avatarGroup) {
    return null;
  }

  if (loading) {
    return <Icon className={styles.icon} svgElement={XMarkIcon} loading={true} />;
  }

  /** Icon can be custom, a svg or an Icon object. */
  if (icon) {
    if (isIconProps(icon)) {
      return <Icon className={styles.icon} theme={icon.theme || iconTheme} {...(icon as IconProps)} />;
    }

    if (isReactNode(icon)) {
      return icon;
    }

    return <Icon className={styles.icon} svgElement={icon as SvgElement} theme={iconTheme} />;
  }

  /** Avatar or AvatarGroup */

  if (avatar) {
    return <Avatar {...avatar} size={avatar.size || size} className={styles.avatar} />;
  }

  if (avatarGroup) {
    return <AvatarGroup {...avatarGroup} className={styles.avatarGroup} />;
  }
};
