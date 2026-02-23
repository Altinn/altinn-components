import { Button, type ButtonProps, Icon, type SvgElement } from '..';

import styles from './pageMenu.module.css';

export interface PageMenuButtonProps extends ButtonProps {
  id: string;
  title: string;
  icon?: SvgElement;
}

export interface PageMenuProps {
  items?: PageMenuButtonProps[];
}

/**
 * Page menu
 */

export const PageMenu = ({ items }: PageMenuProps) => {
  return (
    <nav data-size="sm" className={styles.buttonGroup}>
      {items?.map((item) => {
        const { icon, title, ...rest } = item;
        return (
          <Button variant="ghost" key={item.id} className={styles.button} size="sm" {...rest}>
            {icon && <Icon svgElement={icon} />}
            <span>{title}</span>
          </Button>
        );
      })}
    </nav>
  );
};
