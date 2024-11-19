import type { ReactNode } from 'react';
import styles from './toolbarFilterBase.module.css';

export interface ToolbarFilterBaseProps {
  children?: ReactNode;
  expanded?: boolean;
}

export const ToolbarFilterBase = ({ expanded = false, children }: ToolbarFilterBaseProps) => {
  return (
    <div className={styles.base} aria-expanded={expanded}>
      {children}
    </div>
  );
};
