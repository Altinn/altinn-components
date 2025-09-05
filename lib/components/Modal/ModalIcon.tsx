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
  isAvatarGroupProps,
  isAvatarProps,
  isIconProps,
} from '..';
import styles from './modalIcon.module.css';

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

export interface ModalIconProps {
  loading?: boolean;
  icon?: IconProps | SvgElement | AvatarProps | AvatarGroupProps | ReactNode;
  theme?: IconTheme;
  badge?: BadgeProps | undefined;
}

export const ModalIcon = ({ loading, icon, theme }: ModalIconProps) => {
  if (!icon) {
    return null;
  }

  if (loading) {
    return <Icon className={styles.wrapper} svgElement={XMarkIcon} loading={true} />;
  }

  return (
    <div className={styles.wrapper}>
      {(isAvatarProps(icon) && <Avatar {...icon} className={styles.avatar} />) ||
        (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
        (isIconProps(icon) && <Icon {...(icon as IconProps)} theme={icon.theme || theme} className={styles.icon} />) ||
        (isReactNode(icon) && icon) || <Icon theme={theme} svgElement={icon as SvgElement} className={styles.icon} />}
    </div>
  );
};
