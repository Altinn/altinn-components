import type {ElementType, ReactNode} from 'react';
import {ButtonBase} from '../Button';
import {Badge} from '../Badge';
import {Icon, type iconsMap} from '../Icon';
import styles from './menuItem.module.css';
import cx from 'classnames';

export type MenuItemSize = 'sm' | 'md' | 'lg';

export interface MenuItemBaseProps {
  as?: ElementType;
  children?: ReactNode;
  size?: MenuItemSize;
  linkIcon?: keyof typeof iconsMap;
  badge?: string | number | undefined;
  collapsible?: boolean;
  expanded?: boolean;
  selected?: boolean;
  disabled?: boolean;
  className?: string;
}

export const MenuItemBase = ({
  as = 'a',
  size,
  linkIcon,
  badge,
  collapsible = false,
  expanded = false,
  selected = false,
  disabled = false,
  className,
  children,
  ...rest
}: MenuItemBaseProps) => {
  const applicableIcon =
    collapsible && expanded ? 'chevron-up' : collapsible ? 'chevron-down' : linkIcon ? 'chevron-right' : linkIcon;

  return (
    <ButtonBase
      as={as}
      size={size}
      disabled={disabled}
      selected={selected}
      className={cx(styles?.item, className)}
      {...rest}
    >
      <div className={styles.content}>
        {children}
        {badge && <Badge>{badge}</Badge>}
      </div>
      <div className={styles?.action}>
        {applicableIcon && <Icon name={applicableIcon} className={styles?.actionIcon} />}
      </div>
    </ButtonBase>
  );
};
