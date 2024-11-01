import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import styles from './metaItem.module.css';

export type MetaItemVariant = 'solid' | 'outline' | 'dotted' | 'text';
export type MetaItemSize = 'xs' | 'sm' | 'md';
export type MetaItemColor = 'subtle';

export interface MetaItemBaseProps {
  as?: ElementType;
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
      className={cx(styles?.item, className)}
      {...rest}
    >
      {children}
    </Component>
  );
};
