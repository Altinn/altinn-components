import cx from 'classnames';
import type { ElementType } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { Button } from '../Button';
import { DigdirLogomark } from './DigdirLogomark.tsx';
import styles from './headerLogo.module.css';

export interface HeaderLogoProps {
  className?: string;
  as?: ElementType;
  href?: string;
  badge?: BadgeProps;
}

export const HeaderLogo = ({ className, as = 'a', href = '/', badge }: HeaderLogoProps) => {
  return (
    <Button variant="ghost" as={as} className={cx(styles.logo, styles.text, className)} href={href}>
      <DigdirLogomark className={styles.logomark} />
      Altinn
      {badge && <Badge {...badge} />}
    </Button>
  );
};
