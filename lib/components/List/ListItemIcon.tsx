import { type ReactNode, isValidElement } from 'react';
import { Avatar, AvatarGroup, type AvatarGroupProps, type AvatarProps, type AvatarSize } from '../Avatar';
import { Icon, type IconName, type IconProps, type IconSize } from '../Icon';

export type ListItemIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ListItemIconProps {
  loading?: boolean;
  size?: ListItemIconSize;
  icon?: IconProps | IconName | ReactNode;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

export const ListItemIcon = ({ loading, size = 'sm', icon, avatar, avatarGroup, children }: ListItemIconProps) => {
  if (!icon && !avatar && !avatarGroup && !children) {
    return null;
  }

  if (loading) {
    return <Icon name="x-mark" size={size as IconSize} loading={true} />;
  }

  /** Icon can be custom, a string or an Icon object. */

  if (icon) {
    if (isValidElement(icon)) {
      return icon;
    }

    const applicableIcon = typeof icon === 'string' ? ({ name: icon } as IconProps) : (icon as IconProps);

    return <Icon {...applicableIcon} size={size as IconSize} />;
  }

  /** Avatar or AvatarGroup */

  if (avatar) {
    return <Avatar {...avatar} size={size as AvatarSize} />;
  }

  if (avatarGroup) {
    return <AvatarGroup {...avatarGroup} size={size as AvatarSize} />;
  }
};
