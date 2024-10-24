import cx from 'classnames';
import {Avatar, type AvatarProps, type AvatarSize, type AvatarType} from '.';
import styles from './avatarGroup.module.css';
import {useMemo} from 'react';

export interface AvatarGroupProps {
  items?: AvatarProps[];
  maxItemsCount?: number;
  type?: AvatarType;
  size?: AvatarSize;
  className?: string;
}

export const AvatarGroup = ({ items = [], maxItemsCount = 4, type, size = 'sm', className }: AvatarGroupProps) => {
  const maxItems = useMemo(() => items.slice(0, maxItemsCount), [items, maxItemsCount]);

  if (items?.length === 0) {
    return <div className={styles.avatarGroup} />;
  }

  return (
    <ul className={cx(styles.reset, styles.group, styles[size], className)} data-count={maxItems?.length}>
      {maxItems.map((avatar, index) => {
        const lastLegalAvatarReached = index === maxItemsCount - 1;
        const customLabel = avatar.customLabel || lastLegalAvatarReached ? items.length.toString() : undefined;
        return (
          <li className={cx(styles.reset, styles.item)} key={avatar.name}>
            <Avatar
              name={avatar.name}
              customLabel={customLabel}
              imageUrl={avatar.imageUrl}
              imageUrlAlt={avatar.imageUrlAlt}
              type={avatar?.type || type}
              size={size}
              outline
            />
          </li>
        );
      })}
    </ul>
  );
};
