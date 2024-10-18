import type { ReactNode, ElementType } from 'react';
import { ButtonBase } from '../Button';
import { Badge } from '../Badge';
import { Icon } from '../Icon';
import styles from './menuItem.module.css';
import cx from 'classnames';

export type MenuItemSize = 'sm' | 'md' | 'lg';

export interface MenuItemBaseProps {
  as?: ElementType;
  children?: ReactNode;
  size?: MenuItemSize;
  linkIcon?: string;
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
  if (collapsible && expanded) {
    linkIcon = 'chevron-up';
  } else if (collapsible) {
    linkIcon = 'chevron-down';
  } else if (linkIcon) {
    linkIcon = 'chevron-right';
  }

  return (
    <ButtonBase
      as={as}
      size={size}
      disabled={disabled}
      selected={selected}
      className={cx(styles?.item, className)}
      {...rest}
    >
      <div className={styles.content}>{children}</div>
      <div className={styles?.action}>
        {badge ? <Badge>{badge}</Badge> : ''}
        {linkIcon ? <Icon name={linkIcon} className={styles?.actionIcon} /> : ''}
      </div>
    </ButtonBase>
  );
};
