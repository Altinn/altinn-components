import type { ReactElement } from 'react';
import styles from './bulkFooter.module.css';
import { LayoutColor } from '../Layout';

export interface BulkFooterProps {
  hidden?: boolean;
  color?: LayoutColor;
  children?: ReactElement;
}

export const BulkFooter = ({ hidden = false, color = 'company', children }: BulkFooterProps) => {
  return (
    <footer className={styles.footer} data-color={color} aria-hidden={hidden}>
      {children}
    </footer>
  );
};
