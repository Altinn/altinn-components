import cx from 'classnames';
import type { ReactNode } from 'react';
import type { MetaItemSize } from './MetaItemBase';
import styles from './metaBase.module.css';
export interface MetaBaseProps {
  size?: MetaItemSize;
  className?: string;
  children?: ReactNode;
}

export const MetaBase = ({ size = 'xs', className, children }: MetaBaseProps) => {
  return (
    <section className={cx(styles.meta, className)} data-size={size}>
      {children}
    </section>
  );
};
