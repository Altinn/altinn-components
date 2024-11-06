import cx from 'classnames';
import styles from './backdrop.module.css';

export interface BackdropProps {
  expanded?: boolean;
  className?: string;
}

export const Backdrop = ({ expanded = false, className }: BackdropProps) => {
  return <div className={cx(styles.backdrop, className)} aria-expanded={expanded} />;
};
