import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './toolbarFilterBase.module.css';
export interface ToolbarFilterBaseProps {
  children?: ReactNode;
  expanded?: boolean;
}

export const ToolbarFilterBase = ({ expanded = false, children }: ToolbarFilterBaseProps) => {
  const filterBaseStyles = cx(styles.base, expanded && styles.expanded);

  return <div className={filterBaseStyles}>{children}</div>;
};
