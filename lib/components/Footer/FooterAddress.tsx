import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './footerAddress.module.css';

export interface FooterAddressProps {
  className?: string;
  children?: ReactNode;
}

export const FooterAddress = ({ className, children }: FooterAddressProps) => {
  return <address className={cx(styles.address, className)}>{children}</address>;
};
