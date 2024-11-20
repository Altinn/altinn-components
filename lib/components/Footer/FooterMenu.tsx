import cx from 'classnames';
import type { ElementType } from 'react';
import { MenuBase } from '../Menu/';
import styles from './footerMenu.module.css';

export interface FooterMenuProps {
  className?: string;
  items: FooterLinkProps[];
}

export interface FooterLinkProps {
  id: string;
  as?: ElementType;
  href?: string;
  title?: string;
  className?: string;
}

export const FooterLink = ({ as, className, title, ...rest }: FooterLinkProps) => {
  const Component = as || 'a';

  return (
    <Component className={cx(styles.link, className)} {...rest}>
      {title}
    </Component>
  );
};

export const FooterMenu = ({ className, items = [] }: FooterMenuProps) => {
  return (
    <MenuBase className={cx(styles.menu, className)}>
      <ul className={styles.list}>
        {items.map((item) => {
          return (
            <li key={item.id}>
              <FooterLink {...item} />
            </li>
          );
        })}
      </ul>
    </MenuBase>
  );
};
