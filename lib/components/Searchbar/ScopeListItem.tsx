import type { ElementType, ReactElement } from 'react';
import type { BadgeProps } from '../Badge';
import { ListItem, type ListItemProps } from '../List/';
import styles from './scopeListItem.module.css';

export interface ScopeListItemProps extends ListItemProps {
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  badge: BadgeProps;
  loading?: boolean;
  label?: string | (() => ReactElement);
}

export const ScopeListItem = ({ as = 'a', label, ...rest }: ScopeListItemProps) => {
  return (
    <ListItem className={styles.item} linkIcon="chevron-right" {...rest}>
      {typeof label === 'function' ? label() : label}
    </ListItem>
  );
};
