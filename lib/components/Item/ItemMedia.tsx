import { XMarkIcon } from '@navikt/aksel-icons';
import { type ReactNode, isValidElement } from 'react';
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

import cx from 'classnames';
import styles from './itemMedia.module.css';

function isReactNode(value: unknown): value is ReactNode {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    typeof value === 'boolean' ||
    value === null ||
    isValidElement(value)
  );
}

export interface ItemMediaProps {
  className?: string;
  loading?: boolean;
  icon?: SvgElement | AvatarProps | AvatarGroupProps | ReactNode;
  children?: ReactNode;
}

export const ItemMedia = ({ className, loading, icon, children }: ItemMediaProps) => {
  if (!icon) {
    return null;
  }

  if (loading) {
    return (
      <div className={cx(styles.icon, className)}>
        <Icon svgElement={XMarkIcon} loading={true} />
      </div>
    );
  }

  const variant = isAvatarProps(icon)
    ? 'avatar'
    : isAvatarGroupProps(icon)
      ? 'avatarGroup'
      : isIconProps(icon)
        ? 'icon'
        : 'icon';

  return (
    <div className={cx(styles.media, className)} data-variant={variant}>
      {(isAvatarProps(icon) && <Avatar {...icon} className={styles.avatar} />) ||
        (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
        (isIconProps(icon) && <Icon {...(icon as IconProps)} className={styles.icon} />) ||
        (isReactNode(icon) && <Icon className={styles.icon}>{icon}</Icon>) || (
          <Icon className={styles.icon} svgElement={icon as SvgElement} />
        )}
      {children}
    </div>
  );
};
