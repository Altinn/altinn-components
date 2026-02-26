import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './modalFooter.module.css';
export interface ModalFooterProps {
  children?: ReactNode;
  sticky?: boolean;
}

export const ModalFooter = ({ children, sticky = false, ...props }: ModalFooterProps) => {
  return (
    <div className={cx(styles.footer, sticky && styles.sticky)} {...props}>
      {children}
    </div>
  );
};
