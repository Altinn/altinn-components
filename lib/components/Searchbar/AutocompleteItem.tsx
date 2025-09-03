import { Badge, type BadgeProps, MenuItem, type MenuItemProps, type QueryItemProps, QueryLabel } from '..';

import styles from './autocompleteItem.module.css';

export type AutocompleteItemType = 'scope' | 'suggest' | 'dialog' | 'bookmark' | 'information';

export interface AutocompleteItemProps extends MenuItemProps {
  type?: AutocompleteItemType;
  /** Badge */
  badge?: BadgeProps;
  /** Query params */
  params?: QueryItemProps[];
}

export const AutocompleteItem = ({
  interactive = true,
  role = 'menuitem',
  params,
  badge,
  label,
  size = 'md',
  ...props
}: AutocompleteItemProps) => {
  /** params is a bookmark or suggested search */
  if (params) {
    return (
      <MenuItem
        {...props}
        role={role}
        interactive={interactive}
        label={<QueryLabel params={params} />}
        controls={badge && <Badge {...badge} />}
        linkIcon={interactive}
        size={size || 'md'}
      />
    );
  }

  /** custom label */
  if (label) {
    return (
      <MenuItem
        {...props}
        role={role}
        interactive={interactive}
        label={label}
        className={styles.item}
        controls={badge && <Badge {...badge} />}
        linkIcon={interactive}
        size={size || 'md'}
      />
    );
  }

  /** generic menu item, aka a  */
  return (
    <MenuItem
      {...props}
      role={role}
      interactive={interactive}
      controls={badge && <Badge {...badge} />}
      linkIcon={interactive}
      size={size}
    />
  );
};
