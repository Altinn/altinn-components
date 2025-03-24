import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@navikt/aksel-icons';

import cx from 'classnames';
import { ElementType, type ReactNode, isValidElement, useId } from 'react';
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
  ListItemLink,
  type ListItemLinkProps,
  ListItemSelect,
  type ListItemSelectProps,
  type ListItemSize,
  type ListItemTheme,
  type SvgElement,
} from '..';
import styles from './listItemHeader.module.css';

export interface ListItemHeaderProps extends ListItemLinkProps {
  /** The color of the list item. */
  color?: ListItemColor;
  /** The theme of the list item. */
  theme?: ListItemTheme;
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
  title?: string;
  /** Element type of the list-item header label. Defaults to h2*/
  titleAs?: ElementType;
  /** Description */
  description?: string;
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
  theme,
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
  titleAs,
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
    <div className={styles.wrapper}>
      <header
        className={cx(styles.header, className)}
        data-color={color}
        data-theme={theme}
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
          <span className={styles.linkTitle}>{ariaLabel || title}</span>
        </ListItemLink>
        <div className={styles.content} data-size={size}>
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
          <ListItemLabel size={size} loading={loading} title={title} description={description} id={listItemLabelId} titleAs={titleAs}>
            {children}
          </ListItemLabel>
        </div>
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
