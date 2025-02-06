import { XMarkIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { IconOrAvatar, type IconOrAvatarProps } from '../';
import styles from './listItemIcon.module.css';

import { Icon, type IconSize } from '../Icon';

export type ListItemIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ListItemIconProps extends IconOrAvatarProps {
  loading?: boolean;
  children?: ReactNode;
}

export const ListItemIcon = ({ loading, size = 'sm', icon, avatar, avatarGroup, children }: ListItemIconProps) => {
  if (!icon && !avatar && !avatarGroup && !children) {
    return null;
  }

  if (loading) {
    return <Icon svgElement={XMarkIcon} size={size as IconSize} loading={true} />;
  }

  return (
    <span className={styles.listIcon}>
      {children || <IconOrAvatar size={size} icon={icon} avatar={avatar} avatarGroup={avatarGroup} />}
    </span>
  );
};
