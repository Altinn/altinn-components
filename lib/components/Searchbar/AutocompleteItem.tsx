import { Badge, type BadgeProps, MenuItem, type MenuItemProps, type QueryItemProps, QueryLabel } from '..';

import styles from './autocompleteItem.module.css';

export type AutocompleteItemType = 'scope' | 'suggest' | 'dialog' | 'bookmark' | 'information' | 'menuitem';

export interface AutocompleteItemProps extends MenuItemProps {
  role?: AutocompleteItemType;
  /** Badge */
  badge?: BadgeProps;
  /** Query params */
  params?: QueryItemProps[];
}

export const AutocompleteItem = ({
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
        label={<QueryLabel params={params} />}
        controls={badge && <Badge {...badge} />}
        size={size || 'md'}
        linkIcon
      />
    );
  }

  /** custom label */
  if (label) {
    return (
      <MenuItem
        {...props}
        role={role}
        label={label}
        className={styles.item}
        controls={badge && <Badge {...badge} />}
        size={size || 'md'}
        linkIcon
      />
    );
  }

  /** generic menu item, aka a  */
  return <MenuItem {...props} role={role} controls={badge && <Badge {...badge} />} size={size} linkIcon />;
};
