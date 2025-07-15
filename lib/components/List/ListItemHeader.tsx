import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@navikt/aksel-icons';

import cx from 'classnames';
import { type ReactNode, isValidElement, useId } from 'react';
import {
  Badge,
  type BadgeProps,
  Icon,
  type ListItemColor,
  ListItemControls,
  ListItemIcon,
  type ListItemIconProps,
  ListItemLabel,
  type ListItemLabelProps,
  ListItemLink,
  type ListItemLinkProps,
  ListItemSelect,
  type ListItemSelectProps,
  type ListItemSize,
} from '..';
import styles from './listItemHeader.module.css';

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
  icon?: ListItemIconProps['icon'];
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
  size,
  title,
  description,
  icon,
  active,
  badge,
  controls,
  className,
  children,
  ariaLabel,
}: ListItemHeaderProps) => {
  /** Set applicable Icon */
  const applicableIcon = collapsible
    ? expanded
      ? ChevronUpIcon
      : ChevronDownIcon
    : linkIcon
      ? ChevronRightIcon
      : undefined;

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

  /** Default aria-label to title */
  const setAriaLabel = ariaLabel !== undefined ? ariaLabel : typeof title === 'string' ? (title as string) : undefined;

  const listItemLabelId = useId();

  return (
    <div
      className={cx(styles.header, className)}
      data-color={color}
      data-interactive={interactive}
      data-size={size}
      data-has-active-child={active}
    >
      <ListItemLink
        as={as}
        href={href}
        onClick={onClick}
        onKeyPress={onKeyPress}
        tabIndex={tabIndex}
        loading={loading}
        disabled={disabled || loading}
        active={active}
        ariaLabel={setAriaLabel}
      />
      {select && <ListItemSelect {...select} className={styles.select} />}
      <ListItemIcon loading={loading} icon={icon} />
      <ListItemLabel
        size={size}
        loading={loading}
        title={title}
        description={description}
        id={listItemLabelId}
        className={styles.label}
      >
        {children}
      </ListItemLabel>
      <ListItemControls className={styles.controls}>
        {controls && !loading ? (
          <span>{controls}</span>
        ) : (
          <>
            {renderBadge()}
            {applicableIcon && (
              <span className={styles.linkIcon}>
                <Icon
                  svgElement={applicableIcon}
                  style={{
                    fontSize: '1.5rem',
                  }}
                />
              </span>
            )}
          </>
        )}
      </ListItemControls>
    </div>
  );
};
