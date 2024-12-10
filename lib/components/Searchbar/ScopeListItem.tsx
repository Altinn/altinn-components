import type { ElementType, ReactElement } from 'react';
import type { BadgeProps } from '../Badge';
import { ListItem, type ListItemInputProps } from '../List/';
import styles from './scopeListItem.module.css';

export interface ScopeListItemProps extends ListItemInputProps {
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  badge?: BadgeProps;
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
