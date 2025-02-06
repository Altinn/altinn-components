import cx from 'classnames';
import { type ReactNode, isValidElement } from 'react';
import {
  type AvatarGroupProps,
  type AvatarProps,
  Badge,
  type BadgeProps,
  Icon,
  type IconProps,
  ListItemControls,
  ListItemIcon,
  type ListItemIconSize,
  ListItemLabel,
  ListItemLink,
  type ListItemLinkProps,
  ListItemSelect,
  type ListItemSelectProps,
  type ListItemSize,
  type SvgElement,
} from '..';
import styles from './listItemHeader.module.css';

export interface ListItemHeaderProps extends ListItemLinkProps {
  /** Header is loading */
  loading?: boolean;
  /** Header size */
  size?: ListItemSize;
  /** Optional classname */
  className?: string;
  /** Select controls */
  select?: ListItemSelectProps;
  /** Collapsible item, sets linkIcon to "chevron down" */
  collapsible?: boolean;
  /** Item is expanded, sets linkIcon to "chevron up" */
  expanded?: boolean;
  /** Title */
  title?: string;
  /** Description */
  description?: string;
  /** List item icon */
  icon?: SvgElement | IconProps | ReactNode | undefined;
  /** List item avatar */
  avatar?: AvatarProps;
  /** List item avatarGroup */
  avatarGroup?: AvatarGroupProps;
  /** Optional icon indicating behaviour */
  linkIcon?: SvgElement | undefined | null;
  /** Optional badge */
  badge?: BadgeProps | ReactNode | undefined;
  /** Custom controls */
  controls?: ReactNode;
  /** Custom label */
  children?: ReactNode;
}

export const ListItemHeader = ({
  as,
  loading,
  disabled,
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
  avatarGroup,
  linkIcon,
  badge,
  controls,
  className,
  children,
}: ListItemHeaderProps) => {
  /** Map ListItemSize to ListItemIconSize */
  const iconSizeMap: Record<ListItemSize, ListItemIconSize> = {
    xs: 'sm',
    sm: 'md',
    md: 'lg',
    lg: 'lg',
    xl: 'xl',
  };

  /** Set default icon size */
  const applicableIconSize = iconSizeMap[size];

  /** Badge can be custom, or a Badge object. */
  const renderBadge = (): ReactNode => {
    if (badge && typeof badge === 'object' && 'label' in badge) {
      return <Badge {...(badge as BadgeProps)} />;
    }
    if (isValidElement(badge)) {
      return badge;
    }
    return null;
  };

  return (
    <header className={styles.header} data-size={size}>
      <div className={styles.link}>
        {select && (
          <ListItemSelect {...select} className={styles.select} size={applicableIconSize as ListItemIconSize} />
        )}
        <ListItemLink
          interactive={!!controls}
          className={cx(styles.link, className)}
          as={as}
          href={href}
          onClick={onClick}
          onKeyPress={onKeyPress}
          tabIndex={tabIndex}
          loading={loading}
          disabled={disabled || loading}
          size={size}
        >
          <ListItemIcon
            loading={loading}
            size={applicableIconSize as ListItemIconSize}
            icon={icon}
            avatar={avatar}
            avatarGroup={avatarGroup}
          />
          <ListItemLabel size={size} loading={loading} title={title} description={description}>
            {children}
          </ListItemLabel>
          {controls && (
            <>
              {renderBadge()}
              {linkIcon && <Icon svgElement={linkIcon} size={applicableIconSize as ListItemIconSize} />}
            </>
          )}
        </ListItemLink>
      </div>
      <ListItemControls className={styles.controls}>
        {controls ? (
          controls
        ) : (
          <>
            {renderBadge()}
            {linkIcon && <Icon svgElement={linkIcon} size={applicableIconSize as ListItemIconSize} />}
          </>
        )}
      </ListItemControls>
    </header>
  );
};
