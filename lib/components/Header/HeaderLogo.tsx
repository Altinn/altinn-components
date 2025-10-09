import cx from 'classnames';
import type { ElementType, MouseEventHandler } from 'react';
import { Badge } from '../Badge/Badge.tsx';
import { ButtonBase } from '../Button';
import { DigdirLogomark } from './DigdirLogomark.tsx';
import styles from './headerLogo.module.css';

export interface HeaderLogoProps {
  className?: string;
  as?: ElementType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  title?: string;
  withBetaBadge?: boolean;
}

export const HeaderLogo = ({ className, as = 'a', title = 'Altinn', href = '/', withBetaBadge }: HeaderLogoProps) => {
  return (
    <ButtonBase as={as} className={cx(styles.logo, className)} href={href}>
      <DigdirLogomark className={styles.symbol} />
      <span className={styles.text}>{title}</span> {withBetaBadge && <Badge label="Beta" color="person" />}
    </ButtonBase>
  );
};
