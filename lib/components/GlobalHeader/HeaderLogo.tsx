import cx from 'classnames';
import type { ElementType, MouseEventHandler } from 'react';
import { Badge, type BadgeProps } from '../Badge/Badge.tsx';
import { ButtonBase } from '../Button';
import { DigdirLogomark } from './DigdirLogomark.tsx';
import styles from './headerLogo.module.css';

export interface HeaderLogoProps {
  className?: string;
  as?: ElementType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  badge?: BadgeProps;
}

export const HeaderLogo = ({ className, as = 'a', href = '/', badge }: HeaderLogoProps) => {
  return (
    <ButtonBase as={as} className={cx(styles.logo, className)} href={href}>
      <DigdirLogomark />
      {badge && <Badge {...badge} />}
    </ButtonBase>
  );
};
