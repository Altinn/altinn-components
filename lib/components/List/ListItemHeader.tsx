import cx from 'classnames';
import type { ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { IconName } from '../Icon';
import type { ListItemColor, ListItemSize } from './ListItemBase';
import { ListItemMedia } from './ListItemMedia';
import styles from './listItemHeader.module.css';

export interface ListItemHeaderProps {
  loading?: boolean;
  size?: ListItemSize;
  color?: ListItemColor;
  className?: string;
  description?: string;
  /** List item icon */
  icon?: IconName;
  /** List item avatar */
  avatar?: AvatarProps;
  /** List item avatarGroup */
  avatarGroup?: AvatarGroupProps;
  /** Optional text indicating behaviour */
  children?: ReactNode;
}

export const ListItemHeader = ({
  loading,
  size = 'sm',
  color,
  icon,
  avatar,
  avatarGroup,
  className,
  children,
}: ListItemHeaderProps) => {
  return (
    <header className={cx(styles.header, className)} data-size={size}>
      <ListItemMedia
        loading={loading}
        size={size}
        color={color}
        icon={icon}
        avatar={avatar}
        avatarGroup={avatarGroup}
      />
      {children}
    </header>
  );
};
