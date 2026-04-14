import type { ReactNode } from 'react';
import {
  type BackButtonProps,
  Button,
  type Color,
  ContextMenu,
  type ContextMenuProps,
  PageBase,
  PageMenu,
  type PageMenuProps,
} from '..';

import { ArrowUndoIcon } from '@navikt/aksel-icons';
import styles from './dialogLayout.module.css';

export interface DialogLayoutProps {
  /** Back button */
  backButton?: BackButtonProps;
  /** Context menu */
  contextMenu?: ContextMenuProps;
  /** Page menu */
  pageMenu?: PageMenuProps;
  /** Children */
  children?: ReactNode;
  /** Color for override **/
  color?: Color | undefined;
}

/**
 * Dialog layout with navigation,
 */

export const DialogLayout = ({ backButton, contextMenu, pageMenu, children, color }: DialogLayoutProps) => {
  return (
    <PageBase spacing={0} color={color} bleed>
      <article className={styles.article}>
        {backButton && (
          <nav className={styles.backButton}>
            <Button {...backButton} size="sm" variant="ghost">
              <ArrowUndoIcon />
              <span>{backButton?.label || 'Back'}</span>
            </Button>
          </nav>
        )}
        <span className={styles.controls}>{contextMenu && <ContextMenu {...contextMenu} />}</span>
        {children}
      </article>
      <PageMenu items={pageMenu?.items} />
    </PageBase>
  );
};
