import type { ReactElement, ReactNode } from "react";
import { ListItemBase, type ListItemBaseProps } from "./ListItemBase";
import { ListItemHeader, type ListItemHeaderProps } from "./ListItemHeader";

export interface ListItemProps extends ListItemBaseProps, ListItemHeaderProps {
  /** List item id */
  id?: string;
  /** Custom className */
  className?: string;
  /** Element is loading, display a placeholder */
  loading?: boolean;
  /** Title */
  title?: ListItemHeaderProps["title"];
  /** Optional description */
  description?: ListItemHeaderProps["description"];
  /** List item icon */
  icon?: ListItemHeaderProps["icon"];
  /** List item avatar */
  avatar?: ListItemHeaderProps["avatar"];
  /** List item avatarGroup */
  avatarGroup?: ListItemHeaderProps["avatarGroup"];
  /** Optional badge */
  badge?: ListItemHeaderProps["badge"];
  /** Whether to display the item with a link icon */
  linkIcon?: ListItemHeaderProps["linkIcon"];
  /** Custom label */
  label?: ReactNode | (() => ReactElement);
}

export interface ListItemInputProps extends ListItemProps {
  id: string;
  /** Child items */
  items?: ListItemProps[];
}

export const ListItem = ({
  className,
  variant = "default",
  color,
  loading,
  collapsible,
  expanded,
  size = "sm",
  icon,
  avatar,
  avatarGroup,
  title,
  description,
  badge,
  linkIcon = false,
  label,
  select,
  selected,
  controls,
  children,
  interactive,
  ...rest
}: ListItemProps) => {
  /** Set label */
  const applicableLabel = typeof label === "function" ? label() : label;

  return (
    <ListItemBase
      variant={variant}
      color={color}
      size={size}
      selected={selected}
      expanded={expanded}
      loading={loading}
      interactive={interactive}
    >
      <ListItemHeader
        className={className}
        color={color}
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
        interactive={interactive}
        {...rest}
      >
        {applicableLabel}
      </ListItemHeader>
      {expanded ? children : null}
    </ListItemBase>
  );
};
