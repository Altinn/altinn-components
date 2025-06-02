import { ChevronDownIcon, ChevronRightIcon, ChevronUpIcon } from '@navikt/aksel-icons';
import type { ElementType, ReactNode } from 'react';
import {
  type BadgeProps,
  Icon,
  MenuItemBase,
  type MenuItemColor,
  MenuItemIcon,
  type MenuItemIconProps,
  MenuItemLabel,
  type MenuItemLabelProps,
  type MenuItemSize,
  type MenuItemTheme,
} from '../';

import styles from './menuItem.module.css';

export interface MenuItemProps {
  id: string;
  type?: string;
  tabIndex?: number;
  interactive?: boolean;
  as?: ElementType;
  size?: MenuItemSize;
  color?: MenuItemColor;
  theme?: MenuItemTheme;
  href?: string;
  onClick?: () => void;
  hidden?: boolean;
  active?: boolean;
  collapsible?: boolean;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  groupId?: string | number;
  title?: MenuItemLabelProps['title'];
  description?: MenuItemLabelProps['description'];
  icon?: MenuItemIconProps['icon'];
  iconTheme?: MenuItemIconProps['theme'];
  iconBadge?: MenuItemIconProps['badge'];
  badge?: BadgeProps | undefined;
  /** Custom controls */
  controls?: ReactNode;
  linkIcon?: boolean;
  className?: string;
  label?: ReactNode;
  items?: MenuItemProps[];
}

export const MenuItem = ({
  as = 'a',
  size = 'md',
  color,
  theme,
  collapsible,
  expanded,
  icon,
  iconTheme,
  iconBadge,
  title,
  description,
  badge,
  controls,
  linkIcon,
  label,
  ...rest
}: MenuItemProps) => {
  /** Set applicable Icon */
  const applicableIcon = collapsible
    ? expanded
      ? ChevronUpIcon
      : ChevronDownIcon
    : linkIcon
      ? ChevronRightIcon
      : undefined;

  return (
    <MenuItemBase as={as} size={size} theme={theme} color={color} expanded={expanded} {...rest}>
      <MenuItemIcon size={size} icon={icon} theme={iconTheme} badge={iconBadge} />
      <MenuItemLabel title={title} description={description} size={size} badge={badge}>
        {label}
      </MenuItemLabel>
      <span className={styles.controls}>
        {controls ? (
          <span style={{ position: 'relative' }}>{controls}</span>
        ) : (
          <>
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
      </span>
    </MenuItemBase>
  );
};
