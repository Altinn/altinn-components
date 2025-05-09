import type { ReactElement, ReactNode } from 'react';
import { ListItemBase, type ListItemBaseProps } from './ListItemBase';
import { ListItemHeader, type ListItemHeaderProps } from './ListItemHeader';
import styles from './listItem.module.css';

export type ListItemVariant = 'default' | 'subtle' | 'tinted';

export interface ListItemProps extends ListItemBaseProps, ListItemHeaderProps {
  /** List item id */
  id?: string;
  /** The variant of the list item. */
  variant?: ListItemVariant;
  /** Custom className */
  className?: string;
  /** Element is loading, display a placeholder */
  loading?: boolean;
  /** Title */
  title?: ListItemHeaderProps['title'];
  /** Optional description */
  description?: ListItemHeaderProps['description'];
  /** Used as decerning text for the ListItem without title, defaults to title */
  ariaLabel?: ListItemHeaderProps['ariaLabel'];
  /** List item icon */
  icon?: ListItemHeaderProps['icon'];
  /** Optional badge */
  badge?: ListItemHeaderProps['badge'];
  /** Whether to display the item with a link icon */
  linkIcon?: ListItemHeaderProps['linkIcon'];
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
  color,
  variant = 'default',
  shadow = 'xs',
  border = 'none',
  loading,
  collapsible,
  expanded,
  size,
  icon,
  label,
  title,
  description,
  badge,
  linkIcon = false,
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
      className={styles.item}
      size={size}
      color={color}
      variant={variant}
      shadow={shadow}
      border={border}
      selected={selected}
      expanded={expanded}
      loading={loading}
      interactive={interactive}
      id={id}
    >
      <ListItemHeader
        color={color}
        loading={loading}
        linkIcon={linkIcon}
        collapsible={collapsible}
        expanded={expanded}
        select={select}
        title={title}
        size={size}
        description={description}
        icon={icon}
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
