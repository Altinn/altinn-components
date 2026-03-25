import { XMarkIcon } from '@navikt/aksel-icons';
import React, { type ReactNode, isValidElement } from 'react';
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

/**
 * Shallow-compare two icon prop values by their identity keys,
 * so that new-but-equivalent objects produced by .map() chains
 * are treated as equal.
 */
function iconPropsEqual(prev: ListItemIconProps, next: ListItemIconProps): boolean {
  if (prev.loading !== next.loading) return false;
  if (prev.size !== next.size) return false;
  if (prev.theme !== next.theme) return false;

  // fast path: same reference
  if (prev.icon === next.icon && prev.badge === next.badge) return true;

  // compare icon by value when it's an avatar/icon object
  if (prev.icon !== next.icon) {
    const a = prev.icon;
    const b = next.icon;
    if (a == null || b == null) return a === b;
    if (typeof a !== 'object' || typeof b !== 'object') return a === b;

    // compare avatar-like objects by identity keys
    if (isAvatarProps(a) && isAvatarProps(b)) {
      if (a.name !== b.name || a.type !== b.type || a.imageUrl !== b.imageUrl || a.id !== b.id) return false;
    } else if (isAvatarGroupProps(a) && isAvatarGroupProps(b)) {
      if (a.items !== b.items) return false;
    } else {
      // can't compare safely — assume different
      return false;
    }
  }

  // compare badge by value
  if (prev.badge !== next.badge) {
    const a = prev.badge;
    const b = next.badge;
    if (a == null || b == null) return a === b;
    if (a.label !== b.label || a.color !== b.color || a.variant !== b.variant || a.size !== b.size) return false;
  }

  return true;
}

export const ListItemIcon = React.memo(({ loading, size, icon, theme, badge }: ListItemIconProps) => {
  if (!icon) {
    return null;
  }

  if (loading) {
    return <Icon className={styles.wrapper} svgElement={XMarkIcon} loading={true} />;
  }

  return (
    <div className={styles.wrapper} data-size={size}>
      {(isAvatarProps(icon) && <Avatar {...icon} className={styles.avatar} />) ||
        (isAvatarGroupProps(icon) && <AvatarGroup {...icon} className={styles.avatarGroup} />) ||
        (isIconProps(icon) && <Icon {...(icon as IconProps)} theme={icon.theme || theme} className={styles.icon} />) ||
        (isReactNode(icon) && icon) || <Icon theme={theme} svgElement={icon as SvgElement} className={styles.icon} />}
      {badge && <Badge {...badge} className={styles.badge} />}
    </div>
  );
}, iconPropsEqual);

ListItemIcon.displayName = 'ListItemIcon';
