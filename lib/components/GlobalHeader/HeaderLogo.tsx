import cx from 'classnames';
import type { ElementType } from 'react';
import { Badge, type BadgeProps } from '../Badge';
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

  const Component = as;

  return (
    <Component className={cx(styles.logo, className)} href={href}>
      <DigdirLogomark title={title} />
      {badge && <Badge {...badge} />}
    </Component>
  );
};
