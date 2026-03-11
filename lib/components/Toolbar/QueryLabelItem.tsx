import type { ReactNode } from 'react';
import styles from './queryLabelItem.module.css';
export type QueryItemType = 'scope' | 'search' | 'filter' | 'connector';
export type QueryItemSize = 'xs' | 'xxs';
export type QueryItemVariant = 'default' | 'subtle';

export interface QueryItemProps {
  type?: QueryItemType;
  size?: QueryItemSize;
  variant?: QueryItemVariant;
  value?: string;
  label?: string;
  children?: ReactNode;
}

export const QueryItem = ({ type = 'search', size = 'xs', variant = 'default', children, label }: QueryItemProps) => {
  return (
    <span className={styles.item} data-type={type} data-variant={variant} data-size={size}>
      {children || label}
    </span>
  );
};
