import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@navikt/aksel-icons';

import cx from 'classnames';
import { type ReactNode, isValidElement, useId } from 'react';
import {
  type AvatarGroupProps,
  type AvatarProps,
  Badge,
  type BadgeProps,
  Icon,
  type IconProps,
  type ListItemColor,
  ListItemControls,
  ListItemIcon,
  type ListItemIconSize,
  ListItemLabel,
  type ListItemLabelProps,
  ListItemLink,
  type ListItemLinkProps,
  ListItemSelect,
  type ListItemSelectProps,
  type ListItemSize,
  type SvgElement,
} from '..';
import styles from './listItem.module.css';

export interface ListItemHeaderProps extends ListItemLinkProps {
  /** The color of the list item. */
  color?: ListItemColor;
  /** Header is loading */
  interactive?: boolean;
  /** Header is loading */
  loading?: boolean;
  /** Header size */
  size?: ListItemSize;
  /** Optional classname */
  className?: string;
  /** Select controls */
  select?: ListItemSelectProps;
  /** Collapsible item */
  collapsible?: boolean;
  /** Item is expanded */
  expanded?: boolean;
  /** Whether to display the item with a link icon */
  linkIcon?: boolean;
  /** Title */
  title?: ListItemLabelProps['title'];
  /** Description */
  description?: ListItemLabelProps['description'];
  /** List item icon */
  icon?: SvgElement | IconProps | ReactNode | undefined;
  /** List item avatar */
  avatar?: AvatarProps;
  /** List item avatarGroup */
  avatarGroup?: AvatarGroupProps;
  /** Optional badge */
  badge?: BadgeProps | ReactNode | undefined;
  /** Custom controls */
  controls?: ReactNode;
  /** Custom label */
  children?: ReactNode;
  /** Active state */
  active?: boolean;
  /** Used as decerning text for the ListItem without title, defaults to title */
  ariaLabel?: string;
}

export const ListItemHeader = ({
  as,
  interactive = true,
  color,
  loading,
  disabled,
  collapsible,
  linkIcon,
  expanded,
  select,
  href,
  onClick,
  onKeyPress,
  tabIndex,
  size = 'sm',
  title,
  description,
  icon,
  avatar,
  active,
  avatarGroup,
  badge,
  controls,
  className,
  children,
  ariaLabel,
}: ListItemHeaderProps) => {
  /** Map ListItemSize to ListItemIconSize */
  const iconSizeMap: Record<ListItemSize, ListItemIconSize> = {
    xs: 'sm',
    sm: 'md',
    md: 'lg',
    lg: 'lg',
    xl: 'xl',
  };

  /** Set applicable Icon */
  const applicableIcon = collapsible
    ? expanded
      ? ChevronUpIcon
      : ChevronDownIcon
    : linkIcon
      ? ChevronRightIcon
      : undefined;

  /** Set default icon size */
  const applicableIconSize = iconSizeMap[size];

  /** Badge can be custom, or a Badge object. */
  const renderBadge = (): ReactNode => {
    if (badge && !loading && typeof badge === 'object' && 'label' in badge) {
      return <Badge {...(badge as BadgeProps)} />;
    }
    if (isValidElement(badge)) {
      return badge;
    }
    return null;
  };

  const listItemLabelId = useId();

  return (
    <div style={{ position: 'relative' }}>
      <header
        className={cx(styles.header, className)}
        data-color={color}
        data-interactive={interactive}
        data-size={size}
        data-has-active-child={active}
      >
        <ListItemLink
          interactive={interactive}
          className={cx(styles.link)}
          as={as}
          href={href}
          onClick={onClick}
          onKeyPress={onKeyPress}
          tabIndex={tabIndex}
          loading={loading}
          disabled={disabled || loading}
          active={active}
          describedby={listItemLabelId}
        >
          <span>{ariaLabel}</span>
        </ListItemLink>
        {select && (
          <ListItemSelect {...select} className={styles.select} size={applicableIconSize as ListItemIconSize} />
        )}
        <ListItemIcon
          loading={loading}
          size={applicableIconSize as ListItemIconSize}
          icon={icon}
          avatar={avatar}
          avatarGroup={avatarGroup}
        />
        <ListItemLabel size={size} loading={loading} title={title} description={description} id={listItemLabelId}>
          {children}
        </ListItemLabel>
        <ListItemControls className={styles.controls}>
          {controls && !loading ? (
            <span style={{ position: 'relative' }}>{controls}</span>
          ) : (
            <>
              {renderBadge()}
              {applicableIcon && <Icon svgElement={applicableIcon} size={applicableIconSize as ListItemIconSize} />}
            </>
          )}
        </ListItemControls>
      </header>
    </div>
  );
};
