import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './itemControls.module.css';

interface ItemControlsProps {
  className?: string;
  children?: ReactNode;
}

export const ItemControls = ({ className, children }: ItemControlsProps) => {
  return <span className={cx(styles.controls, className)}>{children}</span>;
};
