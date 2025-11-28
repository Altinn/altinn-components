import cx from 'classnames';
import type { ElementType, MouseEventHandler } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { ButtonBase } from '../Button';
import { useRootContext } from '../RootProvider';
import { DigdirLogomark } from './DigdirLogomark.tsx';
import styles from './headerLogo.module.css';

export interface HeaderLogoProps {
  className?: string;
  as?: ElementType;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  badge?: BadgeProps;
}

const ARIA_LABELS: Record<string, string> = {
  nn: 'Gå til framsida',
  en: 'Go to homepage',
};

export const HeaderLogo = ({ className, as = 'a', href = '/', badge }: HeaderLogoProps) => {
  const { languageCode } = useRootContext();
  const title = ARIA_LABELS[languageCode ?? ''] ?? 'Gå til forsiden';
  return (
    <ButtonBase as={as} className={cx(styles.logo, className)} href={href}>
      <DigdirLogomark title={title} />
      {badge && <Badge {...badge} />}
    </ButtonBase>
  );
};
