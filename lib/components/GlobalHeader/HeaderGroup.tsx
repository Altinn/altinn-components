import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './headerGroup.module.css';

export interface HeaderGroupProps {
  className?: string;
  children?: ReactNode;
}

export const HeaderGroup = ({ className, children }: HeaderGroupProps) => {
  return <div className={cx(styles.group, className)}>{children}</div>;
};
