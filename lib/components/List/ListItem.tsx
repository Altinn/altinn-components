import type { ElementType, ReactElement, ReactNode } from 'react';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import type { BadgeProps } from '../Badge';
import type { IconProps, SvgElement } from '../Icon';
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
  /** Element type of the list-item header label. Defaults to h2 */
  titleAs?: ElementType;
  /** Optional description */
  description?: string;
  /** List item icon */
  icon?: SvgElement | IconProps | ReactNode | undefined;
  /** List item avatar */
  avatar?: AvatarProps;
  /** List item avatarGroup */
  avatarGroup?: AvatarGroupProps;
  /** Custom label */
  label?: ReactNode | (() => ReactElement);
  /** Optional badge */
  badge?: BadgeProps | ReactNode | undefined;
  /** Whether to display the item with a link icon */
  linkIcon?: boolean;
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
  titleAs,
  description,
  badge,
  linkIcon = false,
  label,
  select,
  selected,
  controls,
  children,
  interactive,
  id,
  ...rest
}: ListItemProps) => {
  /** Set label */
  const applicableLabel = typeof label === 'function' ? label() : label;

  return (
    <ListItemBase
      variant={variant}
      color={color}
      theme={theme}
      shadow={shadow}
      selected={selected}
      expanded={expanded}
      title={title}
      loading={loading}
      interactive={interactive}
      id={id}
    >
      <ListItemHeader
        className={className}
        color={color}
        theme={theme}
        loading={loading}
        linkIcon={linkIcon}
        collapsible={collapsible}
        expanded={expanded}
        select={select}
        size={size}
        title={title}
        description={description}
        icon={icon}
        avatar={avatar}
        avatarGroup={avatarGroup}
        badge={badge}
        controls={controls}
        titleAs={titleAs}
        interactive={interactive}
        {...rest}
      >
        {applicableLabel}
      </ListItemHeader>
      {expanded ? children : null}
    </ListItemBase>
  );
};
