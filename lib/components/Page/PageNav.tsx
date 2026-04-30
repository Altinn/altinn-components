import { ArrowLeftIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { Breadcrumbs, type BreadcrumbsLinkProps, Button, type ButtonProps, Flex } from '../';
import styles from './pageNav.module.css';

export type PageNavColor = 'neutral' | 'company' | 'person';
export type PageNavPadding = 0 | 2;

export interface PageNavProps {
  color?: PageNavColor;
  padding?: PageNavPadding;
  backButton?: ButtonProps & { as?: 'a' | 'button'; label?: string };
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
        <Button {...backButton} variant="ghost" size="sm">
          <ArrowLeftIcon />
          <span>{backButton?.label || 'Back'}</span>
        </Button>
      )}
      {controls && <div className={styles.controls}>{controls}</div>}
    </Flex>
  );
};
