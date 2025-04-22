import type { ReactNode } from 'react';
import {
  type BackButtonProps,
  ContextMenu,
  type ContextMenuProps,
  PageBase,
  PageMenu,
  type PageMenuProps,
  PageNav,
  Section,
} from '..';

export interface DialogLayoutProps {
  /** Back button */
  backButton?: BackButtonProps;
  /** Context menu */
  contextMenu?: ContextMenuProps;
  /** Page menu */
  pageMenu?: PageMenuProps;
  /** Children */
  children?: ReactNode;
}

/**
 * Dialog layout with navigation,
 */

export const DialogLayout = ({ backButton, contextMenu, pageMenu, children }: DialogLayoutProps) => {
  return (
    <PageBase theme="subtle" spacing={0} bleed>
      <Section theme="default" shadow="xs">
        <PageNav
          color="neutral"
          padding={2}
          backButton={backButton}
          controls={contextMenu && <ContextMenu {...contextMenu} />}
        />
        <Section as="article" padding="page" spacing={6}>
          {children}
        </Section>
      </Section>
      <PageMenu items={pageMenu?.items} />
    </PageBase>
  );
};
