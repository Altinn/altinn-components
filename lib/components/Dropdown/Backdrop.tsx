import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import styles from './backdrop.module.css';

export interface BackdropProps {
  className?: string;
  onClick?: MouseEventHandler;
}

export const Backdrop = ({ className, onClick }: BackdropProps) => {
  return <div className={cx(styles.backdrop, className)} onMouseDown={onClick} />;
};
