import type { ReactNode } from 'react';
import {
  type BackButtonProps,
  Breadcrumbs,
  type BreadcrumbsLinkProps,
  Button,
  ContextMenu,
  type ContextMenuProps,
  Flex,
} from '../';
import styles from './pageNav.module.css';

export type PageNavColor = 'neutral' | 'company' | 'person';
export type PageNavPadding = 0 | 2;

export interface PageNavProps {
  color?: PageNavColor;
  padding?: PageNavPadding;
  backButton?: BackButtonProps;
  breadcrumbs?: BreadcrumbsLinkProps[];
  menu?: ContextMenuProps;
  children?: ReactNode;
}

/**
 * Page navigation bar with Back button and controls.
 */
export const PageNav = ({
  color,
  padding,
  breadcrumbs,
  backButton = {
    as: 'a',
    label: 'Back',
  },
  menu,
  children,
}: PageNavProps) => {
  return (
    <Flex as="nav" direction="row" align="center" justify="between" color={color} padding={padding}>
      {breadcrumbs ? (
        <Breadcrumbs items={breadcrumbs} />
      ) : (
        <Button {...backButton} variant="text" icon="arrow-left">
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
