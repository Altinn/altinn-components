import { type ReactNode, isValidElement } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  Icon,
  type IconProps,
  type MetaItemSize,
  ProgressIcon,
  type SvgElement,
  isAvatarGroupProps,
  isAvatarProps,
  isIconProps,
} from '..';

import styles from './metaItemIcon.module.css';

export interface MetaItemIconProps {
  size?: MetaItemSize;
  progress?: number;
  icon?: IconProps | SvgElement | AvatarProps | AvatarGroupProps | ReactNode;
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

export const MetaItemIcon = ({ size = 'xs', icon, progress }: MetaItemIconProps) => {
  if (!icon && typeof progress !== 'number') {
    return false;
  }

  return (
    <span className={styles.media} data-size={size}>
      {(isAvatarProps(icon) && <Avatar {...icon} className={styles.avatar} />) ||
        (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
        (isIconProps(icon) && <Icon {...(icon as IconProps)} className={styles.icon} />) ||
        (isReactNode(icon) && icon) || <Icon svgElement={icon as SvgElement} className={styles.icon} />}

      {progress && <ProgressIcon value={progress} className={styles.icon} />}
    </span>
  );
};
