import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import { type ReactElement, type ReactNode, isValidElement } from 'react';
import {
  Badge,
  type BadgeProps,
  Icon,
  MenuItemBase,
  type MenuItemBaseProps,
  MenuItemIcon,
  type MenuItemIconProps,
  MenuItemLabel,
  type MenuItemLabelProps,
} from '../';

import styles from './menuItem.module.css';

export interface MenuItemProps extends MenuItemBaseProps {
  id?: string;
  type?: string;
  groupId?: string | number;
  loading?: boolean;
  collapsible?: boolean;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  title?: MenuItemLabelProps['title'];
  description?: MenuItemLabelProps['description'];
  highlightWords?: MenuItemLabelProps['highlightWords'];
  icon?: MenuItemIconProps['icon'];
  iconTheme?: MenuItemIconProps['theme'];
  iconBadge?: MenuItemIconProps['badge'];
  badge?: BadgeProps | ReactNode | undefined;
  /** Custom controls */
  controls?: ReactNode;
  linkIcon?: boolean;
  className?: string;
  label?: ReactNode | (() => ReactElement);
  items?: MenuItemProps[];
  'data-testid'?: string;
}

export const MenuItem = ({
  as = 'a',
  size = 'md',
  color,
  variant,
  collapsible,
  expanded,
  icon,
  iconTheme,
  iconBadge,
  title,
  description,
  highlightWords,
  badge,
  controls,
  loading,
  linkIcon,
  label,
  ariaLabel,
  ...rest
}: MenuItemProps) => {
  const applicableLabel = typeof label === 'function' ? label() : label;

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
      return <Badge {...(badge as BadgeProps)} className={styles.badge} />;
    }
    if (isValidElement(badge)) {
      return badge;
    }
    return null;
  };

  return (
    <MenuItemBase
      as={as}
      size={size}
      variant={variant}
      color={color}
      expanded={expanded}
      ariaLabel={ariaLabel}
      hidden={loading}
      {...rest}
    >
      <MenuItemIcon loading={loading} size={size} icon={icon} theme={iconTheme} badge={iconBadge} />
      <MenuItemLabel
        loading={loading}
        title={title}
        description={description}
        highlightWords={highlightWords}
        size={size}
      >
        {applicableLabel}
      </MenuItemLabel>
      <span className={styles.controls}>
        {!loading && renderBadge()}
        {!loading && controls}
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
      </span>
    </MenuItemBase>
  );
};
