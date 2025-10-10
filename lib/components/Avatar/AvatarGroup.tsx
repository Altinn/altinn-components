'use client';
import cx from 'classnames';
import { useMemo } from 'react';
import type { CSSProperties } from 'react';
import { Avatar, type AvatarProps, type AvatarSize, type AvatarType } from '.';
import styles from './avatarGroup.module.css';

/**
 * Props for the AvatarGroup components.
 */
export interface AvatarGroupProps {
  /** Array of avatars to display in the group, each specified by AvatarProps. */
  items?: AvatarProps[];
  /** Maximum number of avatars to show in the group. Remaining avatars are summarized in a "+X" label. */
  maxItemsCount?: number;
  /** Default avatar type to apply if not specified in individual items. This affects the styling. */
  defaultType?: AvatarType;
  /** Size of all avatars in the group (e.g., 'sm', 'md', 'lg'). */
  size?: AvatarSize;
  /** Additional CSS class for styling the avatar group container. */
  className?: string;
  /** Custom styles. */
  style?: CSSProperties;
}

export const isAvatarGroupProps = (icon: unknown): icon is AvatarGroupProps => {
  return typeof icon === 'object' && icon !== null && 'items' in icon;
};

/**
 * Avatar group component for displaying multiple avatars as a group.
 */
export const AvatarGroup = ({
  items = [],
  maxItemsCount = 4,
  defaultType,
  size,
  className,
  style,
}: AvatarGroupProps) => {
  const maxItems = useMemo(() => items.slice(0, maxItemsCount).reverse(), [items, maxItemsCount]);

  if (items.length === 0) {
    return <div className={styles.avatarGroup} />;
  }

  return (
    <ul className={cx(styles.group, className)} data-size={size} data-count={maxItems?.length} style={style}>
      {maxItems.map((avatar, index) => {
        const lastLegalAvatarReached = index === maxItemsCount - 1;
        const customLabel = avatar.customLabel || lastLegalAvatarReached ? items.length.toString() : undefined;
        return (
          <li className={cx(styles.item)} key={index}>
            <Avatar
              name={avatar.name}
              customLabel={customLabel}
              imageUrl={avatar.imageUrl}
              imageUrlAlt={avatar.imageUrlAlt}
              type={avatar?.type || defaultType}
              variant={avatar?.variant}
              outline
            />
          </li>
        );
      })}
    </ul>
  );
};
