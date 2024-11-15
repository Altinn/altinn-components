import type { ElementType, ReactNode } from 'react';
import { ListItemBase, ListItemLabel } from '../List/';
import styles from './autocompleteItem.module.css';

export interface AutocompleteItemProps {
  as?: ElementType;
  href?: string;
  onClick?: () => void;
  loading?: boolean;
  active?: boolean;
  disabled?: boolean;
  label?: string | (() => ReactNode);
  groupId?: string;
  style?: React.CSSProperties;
}

export const AutocompleteItem = ({ as = 'a', label, active, ...rest }: AutocompleteItemProps) => {
  return (
    <ListItemBase className={styles.item} as={as} size="sm" active={active} linkIcon="chevron-right" {...rest}>
      <ListItemLabel size="sm">{typeof label === 'function' ? label() : label}</ListItemLabel>
    </ListItemBase>
  );
};
