import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import type { Color } from '../../types';
import { Skeleton } from '../Skeleton';
import { Tooltip } from '../Tooltip';
import { MetaItemIcon, type MetaItemIconProps } from './MetaItemIcon';
import styles from './metaItem.module.css';

export type MetaItemVariant = 'default' | 'tinted';
export type MetaItemSize = 'xs' | 'sm';
export type MetaItemColor = Color;

export interface MetaItemProps {
  loading?: boolean;
  reverse?: boolean;
  /**  Render as element */
  as?: ElementType;
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Color */
  color?: MetaItemColor;
  /** Icon name */
  icon?: MetaItemIconProps['icon'];
  /** Label */
  children?: ReactNode;
  /** Datetime in ISO format */
  datetime?: string;
  /** Tooltip */
  tooltip?: string;
  /** classname */
  className?: string;
  /** OnClick handler */
  onClick?: () => void;
}

export const MetaItem = ({
  as,
  loading,
  className,
  reverse,
  size = 'xs',
  variant,
  color,
  icon,
  children,
  datetime,
  tooltip,
  ...rest
}: MetaItemProps) => {
  const Component = as || datetime ? 'time' : 'span';

  if (tooltip) {
    return (
      <Tooltip content={tooltip} placement="bottom">
        <Component
          data-size={size}
          data-color={color}
          data-variant={variant}
          dateTime={datetime}
          className={cx(styles.item, className)}
          {...rest}
        >
          <Skeleton loading={loading}>
            {!loading && icon && <MetaItemIcon size={size} icon={icon} />}
            <span className={styles.label}>{children}</span>
          </Skeleton>
        </Component>
      </Tooltip>
    );
  }

  return (
    <Component
      data-size={size}
      data-color={color}
      data-variant={variant}
      dateTime={datetime}
      className={cx(styles.item, className)}
      {...rest}
    >
      <Skeleton loading={loading}>
        {!loading && icon && <MetaItemIcon size={size} icon={icon} />}
        <span className={styles.label}>{children}</span>
      </Skeleton>
    </Component>
  );
};
