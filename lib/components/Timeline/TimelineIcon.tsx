import { XMarkIcon } from '@navikt/aksel-icons';
import { type ReactNode, isValidElement } from 'react';
import {
  Avatar,
  AvatarGroup,
  type AvatarGroupProps,
  type AvatarProps,
  type Color,
  Icon,
  type IconProps,
  type SvgElement,
  type Theme,
  isAvatarGroupProps,
  isAvatarProps,
  isIconProps,
} from '..';
import styles from './timelineIcon.module.css';

export type TimelineIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface TimelineIconProps {
  loading?: boolean;
  size?: TimelineIconSize;
  icon?: AvatarProps | AvatarGroupProps | IconProps | SvgElement | ReactNode;
  color?: Color;
  theme?: Theme;
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

export const TimelineIcon = ({ loading, size, color, theme, icon }: TimelineIconProps) => {
  if (!icon) {
    return null;
  }

  if (loading) {
    return <Icon className={styles.icon} svgElement={XMarkIcon} loading={true} />;
  }

  return (
    <div className={styles.icon} data-color={color} data-size={size}>
      {(isAvatarProps(icon) && <Avatar {...icon} />) ||
        (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
        (isIconProps(icon) && <Icon {...(icon as IconProps)} theme={theme} />) ||
        (isReactNode(icon) && icon) || <Icon theme={theme} svgElement={icon as SvgElement} />}
    </div>
  );
};
