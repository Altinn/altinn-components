import cx from 'classnames';
import type { ElementType } from 'react';
import { Badge, type BadgeProps } from '../Badge';
import { Button } from '../Button';
import { useRootContext } from '../RootProvider';
import { DigdirLogomark } from './DigdirLogomark.tsx';
import styles from './headerLogo.module.css';

export interface HeaderLogoProps {
  className?: string;
  as?: ElementType;
  href?: string;
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
    <Button variant="ghost" as={as} className={cx(styles.logo, className)} href={href} title={title}>
      <DigdirLogomark className={styles.logomark} />
      <span className={styles.text}>Altinn</span>
      {badge && <Badge {...badge} />}
    </Button>
  );
};
