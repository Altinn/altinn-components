import type { ElementType, ReactNode } from 'react';
import { Button } from '../Button';
import styles from './pageNav.module.css';

export interface PageBackButtonProps {
  as?: ElementType;
  href?: string;
  label?: string;
}

export interface PageNavProps {
  backButton?: PageBackButtonProps;
  children?: ReactNode;
}

/**
 * Page navigation bar with back button or breadcrumbs.
 */
export const PageNav = ({
  backButton = {
    as: 'a',
    label: 'Back',
  },
  children,
}: PageNavProps) => {
  return (
    <nav className={styles.nav}>
      <Button {...backButton} variant="text" color="secondary" icon="arrow-left">
        {backButton?.label || 'Back'}
      </Button>
      <div className={styles.action}>{children}</div>
    </nav>
  );
};
