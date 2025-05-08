import { ArrowLeftIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { type BackButtonProps, Breadcrumbs, type BreadcrumbsLinkProps, Button, Flex } from '../';
import styles from './pageNav.module.css';

export type PageNavColor = 'neutral' | 'company' | 'person';
export type PageNavPadding = 0 | 2;

export interface PageNavProps {
  color?: PageNavColor;
  padding?: PageNavPadding;
  backButton?: BackButtonProps;
  breadcrumbs?: BreadcrumbsLinkProps[];
  controls?: ReactNode;
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
  controls,
}: PageNavProps) => {
  return (
    <Flex as="nav" direction="row" align="center" justify="between" color={color} padding={padding}>
      {breadcrumbs ? (
        <Breadcrumbs items={breadcrumbs} />
      ) : (
        <Button {...backButton} variant="text" size="sm" icon={ArrowLeftIcon}>
          {backButton?.label || 'Back'}
        </Button>
      )}
      {controls && <div className={styles.controls}>{controls}</div>}
    </Flex>
  );
};
