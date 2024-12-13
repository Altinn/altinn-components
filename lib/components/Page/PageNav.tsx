import type { ReactNode } from 'react';
import { type BackButtonProps, Button, ContextMenu, type ContextMenuProps, Section, type SectionProps } from '../';
import styles from './pageNav.module.css';

export type PageNavPadding = 'none' | 'sm';

export interface PageNavProps extends SectionProps {
  padding?: PageNavPadding;
  backButton?: BackButtonProps;
  menu?: ContextMenuProps;
  children?: ReactNode;
}

/**
 * Page navigation bar with Back button and controls.
 */
export const PageNav = ({
  padding = 'none',
  backButton = {
    as: 'a',
    label: 'Back',
  },
  menu,
  children,
}: PageNavProps) => {
  return (
    <Section flex="row" align="center" justify="between" padding={padding}>
      <Button {...backButton} variant="text" color="secondary" icon="arrow-left">
        {backButton?.label || 'Back'}
      </Button>
      <div className={styles.controls}>
        {children}
        {menu && <ContextMenu {...menu} />}
      </div>
    </Section>
  );
};
