import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import { Skeleton } from '../Skeleton';
import styles from './metaItemBase.module.css';

export type MetaItemVariant = 'solid' | 'outline' | 'dotted' | 'rounded' | 'text';
export type MetaItemSize = 'xs' | 'sm';
export type MetaItemColor = 'subtle';

export interface MetaItemBaseProps {
  as?: ElementType;
  loading?: boolean;
  reverse?: boolean;
  variant?: MetaItemVariant;
  size?: MetaItemSize;
  color?: MetaItemColor;
  datetime?: string;
  progress?: number;
  className?: string;
  children?: ReactNode;
}

export const MetaItemBase = ({
  as,
  loading,
  reverse,
  variant = 'text',
  size,
  color,
  progress,
  datetime,
  className,
  children,
  ...rest
}: MetaItemBaseProps) => {
  const Component = as || 'span';

  return (
    <Component
      data-size={size}
      data-color={color}
      data-variant={variant}
      data-progress={progress}
      dateTime={datetime}
      className={cx(styles.item, { [styles.reverse]: reverse }, className)}
      {...rest}
    >
      <Skeleton loading={loading}>{children}</Skeleton>
    </Component>
  );
};
