import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './footerBase.module.css';

export interface FooterBaseProps {
  className?: string;
  children?: ReactNode;
}

export const FooterBase = ({ className, children }: FooterBaseProps) => {
  return (
    <footer className={cx(styles.footer, className)}>
      <div className={styles.grid}>{children} </div>
    </footer>
  );
};
