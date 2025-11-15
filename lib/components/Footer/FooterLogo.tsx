import cx from 'classnames';
import { DigdirLogomark } from '../Header/DigdirLogomark.tsx';
import styles from './footerLogo.module.css';

export interface FooterLogoProps {
  className?: string;
  title?: string;
}

export const FooterLogo = ({ className, title = 'Digdir' }: FooterLogoProps) => {
  return (
    <div className={cx(styles.logo, className)}>
      <DigdirLogomark className={styles.symbol} aria-hidden />
      <span>{title}</span>
    </div>
  );
};
