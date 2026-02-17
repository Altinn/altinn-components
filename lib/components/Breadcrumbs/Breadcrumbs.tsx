import { ArrowRightIcon } from '@navikt/aksel-icons';
import { BreadcrumbsLink, type BreadcrumbsLinkProps, Icon } from '../';
import styles from './breadcrumbs.module.css';

export interface BreadcrumbsProps {
  items?: BreadcrumbsLinkProps[];
}

export const Breadcrumbs = ({ items = [] }: BreadcrumbsProps) => {
  return (
    <ul className={styles.list}>
      {items.map((item, index) => {
        const { label, ...itemProps } = item;

        if (items?.length > index + 1) {
          return (
            <li className={styles.item} key={index}>
              <BreadcrumbsLink {...itemProps}>{label}</BreadcrumbsLink>
              <Icon svgElement={ArrowRightIcon} className={styles.icon} />
            </li>
          );
        }

        return (
          <li className={styles.item} key={index}>
            <BreadcrumbsLink {...itemProps} as="span">
              {label}
            </BreadcrumbsLink>
          </li>
        );
      })}
    </ul>
  );
};
