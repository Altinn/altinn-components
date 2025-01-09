import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import styles from './backdrop.module.css';

export type BackdropColor = 'transparent' | 'inherit';

export interface BackdropProps {
  className?: string;
  color?: BackdropColor;
  onClick?: MouseEventHandler;
}

export const Backdrop = ({ className, color, onClick }: BackdropProps) => {
  return <div className={cx(styles.backdrop, className)} data-color={color} onMouseDown={onClick} />;
};
