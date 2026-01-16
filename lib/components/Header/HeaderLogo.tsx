import cx from 'classnames';
import type { ElementType, MouseEventHandler } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { DigdirLogomark } from './DigdirLogomark.tsx';
import styles from './headerLogo.module.css';

export interface HeaderLogoProps {
  className?: string;
  as?: ElementType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  badge?: BadgeProps;
}

export const HeaderLogo = ({ className, as = 'a', title = 'Altinn', href = '/', onClick, badge }: HeaderLogoProps) => {
  const Component = as;

  return (
    <Component variant="ghost" className={cx(styles.logo, className)} href={href} onClick={onClick}>
      <DigdirLogomark className={styles.symbol} />
      <span className={styles.text}>{title}</span> {badge && <Badge {...badge} />}
    </Component>
  );
};
