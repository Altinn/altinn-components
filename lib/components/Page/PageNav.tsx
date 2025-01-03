import type { ReactNode } from 'react';
import {
  type BackButtonProps,
  Breadcrumbs,
  type BreadcrumbsLinkProps,
  Button,
  ContextMenu,
  type ContextMenuProps,
  Flex,
  type FlexProps,
} from '../';
import styles from './pageNav.module.css';

export type PageNavPadding = 'none' | 'sm';
export type PageNavMargin = 'none' | 'sm';

export interface PageNavProps extends FlexProps {
  padding?: PageNavPadding;
  margin?: PageNavMargin;
  backButton?: BackButtonProps;
  breadcrumbs?: BreadcrumbsLinkProps[];
  menu?: ContextMenuProps;
  children?: ReactNode;
}

/**
 * Page navigation bar with Back button and controls.
 */
export const PageNav = ({
  padding = 'none',
  margin = 'none',
  breadcrumbs,
  backButton = {
    as: 'a',
    label: 'Back',
  },
  menu,
  children,
}: PageNavProps) => {
  return (
    <Flex as="nav" direction="row" align="center" justify="between" padding={padding} margin={margin}>
      {breadcrumbs ? (
        <Breadcrumbs items={breadcrumbs} />
      ) : (
        <Button {...backButton} variant="text" color="secondary" icon="arrow-left">
          {backButton?.label || 'Back'}
        </Button>
      )}
      <div className={styles.controls}>
        {children}
        {menu && <ContextMenu {...menu} />}
      </div>
    </Flex>
  );
};
