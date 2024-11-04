import type { ReactNode } from 'react';
import type { MetaItemSize } from './MetaItemBase';
import styles from './meta.module.css';
export interface MetaBaseProps {
  size?: MetaItemSize;
  children?: ReactNode;
}

export const MetaBase = ({ size = 'xs', children }: MetaBaseProps) => {
  return (
    <div className={styles.meta} data-size={size}>
      {children}
    </div>
  );
};
