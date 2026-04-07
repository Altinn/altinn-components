import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './toolbarControls.module.css';

export interface ToolbarControlsProps {
  className?: string;
  children?: ReactNode;
}

export const ToolbarControls = ({ className, children }: ToolbarControlsProps) => {
  return <span className={cx(styles.controls, className)}>{children}</span>;
};
