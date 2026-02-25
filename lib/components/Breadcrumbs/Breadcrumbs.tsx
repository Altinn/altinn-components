import { ArrowRightIcon } from '@navikt/aksel-icons';
import { BreadcrumbsLink, type BreadcrumbsLinkProps } from '../';
import styles from './breadcrumbs.module.css';

export interface BreadcrumbsProps {
  ariaLabel?: string;
  className?: string;
  items?: BreadcrumbsLinkProps[];
}

export const Breadcrumbs = ({ ariaLabel = 'Breadcrumbs', className, items = [] }: BreadcrumbsProps) => {
  return (
    <nav className={className} aria-label={ariaLabel}>
      <ol className={styles.list}>
        {items.map((item, index) => {
          const { label, ...itemProps } = item;

          if (items?.length > index + 1) {
            return (
              <li className={styles.item} key={index}>
                <BreadcrumbsLink {...itemProps}>{label}</BreadcrumbsLink>
                <ArrowRightIcon className={styles.icon} aria-hidden />
              </li>
            );
          }

          return (
            <li className={styles.item} key={index}>
              <BreadcrumbsLink {...itemProps} as="span" aria-current="page">
                {label}
              </BreadcrumbsLink>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};
