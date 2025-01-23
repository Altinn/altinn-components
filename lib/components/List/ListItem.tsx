import type { ReactElement, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { IconName, IconProps } from '../Icon';
import { ListItemBase, type ListItemBaseProps } from './ListItemBase';
import { ListItemHeader, type ListItemHeaderProps } from './ListItemHeader';

export interface ListItemProps extends ListItemBaseProps, ListItemHeaderProps {
  /** List item id */
  id?: string;
  /** Custom className */
  className?: string;
  /** Element is loading, display a placeholder */
  loading?: boolean;
  /** Title */
  title?: string;
  /** Optional description */
  description?: string;
  /** List item icon */
  icon?: IconName | IconProps | ReactNode | undefined;
  /** List item avatar */
  avatar?: AvatarProps;
  /** List item avatarGroup */
  avatarGroup?: AvatarGroupProps;
  /** Optional icon indicating behaviour */
  linkIcon?: IconName | undefined;
  /** Custom label */
  label?: ReactNode | (() => ReactElement);
  /** Optional badge */
  badge?: BadgeProps | ReactNode | undefined;
}

export interface ListItemInputProps extends ListItemProps {
  id: string;
  /** Child items */
  items?: ListItemProps[];
}

export const ListItem = ({
  className,
  variant = 'solid',
  color,
  theme = 'default',
  shadow = 'xs',
  loading,
  collapsible,
  expanded,
  size = 'sm',
  icon,
  avatar,
  avatarGroup,
  title,
  description,
  badge,
  linkIcon = 'chevron-right',
  label,
  select,
  controls,
  children,
  ...rest
}: ListItemProps) => {
  const applicableLinkIcon = collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : linkIcon;
  const applicableLabel = typeof label === 'function' ? label() : label;

  if (expanded) {
    return (
      <ListItemBase
        interactive={false}
        variant={variant}
        color={color}
        theme={theme}
        shadow={shadow}
        expanded={expanded}
      >
        <ListItemBase theme="transparent" interactive={!controls} size={size} color={color} loading={loading} {...rest}>
          <ListItemHeader
            className={className}
            loading={loading}
            select={select}
            size={size}
            title={title}
            description={description}
            icon={icon}
            avatar={avatar}
            avatarGroup={avatarGroup}
            badge={badge}
            linkIcon={applicableLinkIcon}
            controls={controls}
            {...rest}
          >
            {applicableLabel}
          </ListItemHeader>
        </ListItemBase>
        {children}
      </ListItemBase>
    );
  }

  return (
    <ListItemBase
      interactive={!controls}
      variant={variant}
      color={color}
      theme={theme}
      shadow={shadow}
      expanded={expanded}
      loading={loading}
      {...rest}
    >
      <ListItemHeader
        className={className}
        loading={loading}
        select={select}
        size={size}
        title={title}
        description={description}
        icon={icon}
        avatar={avatar}
        avatarGroup={avatarGroup}
        badge={badge}
        linkIcon={applicableLinkIcon}
        controls={controls}
        {...rest}
      >
        {applicableLabel}
      </ListItemHeader>
    </ListItemBase>
  );
};
