import { XMarkIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { Flex, Icon, IconOrAvatar, type IconOrAvatarProps, type IconSize } from '../';

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
    <Flex align="center" justify="center" style={{ flexShrink: 0 }}>
      {children || <IconOrAvatar size={size} icon={icon} avatar={avatar} avatarGroup={avatarGroup} />}
    </Flex>
  );
};
