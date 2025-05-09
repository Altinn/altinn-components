import type { ReactNode } from 'react';
import type { MetaItemSize, MetaItemVariant } from './MetaItemBase';
import styles from './metaItemLabel.module.css';

export interface MetaItemLabelProps {
  /** Meta size */
  size?: MetaItemSize;
  /** Variant */
  variant?: MetaItemVariant;
  /** Label */
  children?: ReactNode;
}

export const MetaItemLabel = ({ size = 'xs', variant = 'text', children }: MetaItemLabelProps) => {
  return (
    <span className={styles.label} data-variant={variant} data-size={size}>
      {children}
    </span>
  );
};
