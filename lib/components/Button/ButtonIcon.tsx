import cx from 'classnames';
import { type ReactNode, isValidElement } from 'react';
import type { ButtonSize } from '.';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  Icon,
  type IconProps,
  type SvgElement,
  isAvatarGroupProps,
  isAvatarProps,
  isIconProps,
} from '..';
import styles from './buttonIcon.module.css';

export interface ButtonIconProps {
  icon?: IconProps | SvgElement | AvatarProps | AvatarGroupProps | ReactNode;
  iconAltText?: string;
  size?: ButtonSize;
  altText?: string;
  className?: string;
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

export const ButtonIcon = ({ icon, size, iconAltText, className }: ButtonIconProps) => {
  return (
    <span className={cx(styles.wrapper, className)} data-size={size} aria-label={iconAltText}>
      {(isAvatarProps(icon) && <Avatar {...icon} className={styles.avatar} />) ||
        (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
        (isIconProps(icon) && <Icon {...(icon as IconProps)} className={styles.icon} />) ||
        (isReactNode(icon) && icon) || <Icon svgElement={icon as SvgElement} className={styles.icon} />}
    </span>
  );
};
