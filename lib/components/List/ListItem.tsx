import cx from 'classnames';
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

/**
 * `ListItem` is a compound component that combines `ListItemBase` and `ListItemHeader`
 * to render a stylized, optionally interactive list item with support for various visual states
 * such as loading, selection, and expansion. It supports customization of appearance through variants,
 * shadows, borders, and iconography.
 *
 * @param {Object} props - Component props
 * @param {string} [props.id] - Unique identifier for the list item.
 * @param {'default' | 'subtle' | 'tinted'} [props.variant='default'] - Visual style variant of the item.
 * @param {string} [props.className] - Custom class name for additional styling.
 * @param {boolean} [props.loading] - Whether to show a loading placeholder.
 * @param {ReactNode | () => ReactElement} [props.label] - Custom label, can be a node or a function returning a ReactElement.
 * @param {ReactNode} [props.title] - Title content of the item.
 * @param {ReactNode} [props.description] - Optional description beneath the title.
 * @param {string} [props.ariaLabel] - ARIA label used for accessibility, defaults to `title` if not provided.
 * @param {ReactNode} [props.icon] - Icon element displayed alongside the content.
 * @param {ReactNode} [props.badge] - Optional badge displayed near the title.
 * @param {boolean} [props.linkIcon=false] - Whether to display a link icon.
 * @param {...ListItemBaseProps} props - Additional props inherited from `ListItemBase` for layout and interaction.
 * @param {...ListItemHeaderProps} props - Additional props inherited from `ListItemHeader` for header controls and behavior.
 *
 * @returns {ReactElement} Rendered ListItem component.
 */
export const ListItem = ({
  className,
  color,
  variant = 'default',
  shadow = 'xs',
  border = 'none',
  loading,
  disabled,
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
}: ListItemProps): ReactElement => {
  const applicableLabel = typeof label === 'function' ? label() : label;
  return (
    <ListItemBase
      className={cx(styles.item, className)}
      size={size}
      color={color}
      variant={variant}
      shadow={shadow}
      border={border}
      disabled={disabled}
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
        disabled={disabled}
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
