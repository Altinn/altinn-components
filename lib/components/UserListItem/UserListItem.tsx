import { TokenIcon } from '@navikt/aksel-icons';
import type { AvatarGroupProps, AvatarProps } from '../Avatar';
import { Badge } from '../Badge';
import type { IconProps, SvgElement } from '../Icon';
import { ListItem, ListItemLabel } from '../List';
import type { ListItemProps } from '../List';

import styles from './userListItem.module.css';

export interface UserListItemProps
  extends Pick<
    ListItemProps,
    | 'size'
    | 'controls'
    | 'onClick'
    | 'loading'
    | 'shadow'
    | 'border'
    | 'color'
    | 'linkIcon'
    | 'expanded'
    | 'collapsible'
    | 'children'
    | 'as'
    | 'interactive'
    | 'id'
    | 'className'
  > {
  /** Unique identifier for the user item */
  id: string;
  /** Name of the user */
  name: string;
  /** Type of user */
  type: 'person' | 'company' | 'system';
  /** Description details for the user */
  description?: string;
  /** Roles of the user to be displayed */
  roleNames?: string[];
  /** The explicit heading or tag of the title, if diverting from the default heading */
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'div' | 'span';
  /** Display as subUnit */
  subUnit?: boolean;
}

export const UserListItem = ({
  name,
  type,
  description,
  roleNames,
  titleAs = 'h3',
  subUnit = false,
  loading = false,
  ...props
}: UserListItemProps) => {
  const icon = { name: name, type: type, isParent: type === 'company' && !subUnit };

  const badges =
    !loading && roleNames ? (
      <div className={styles.badges}>
        {roleNames.map((role) => (
          <Badge label={role} key={role} color={props.color}>
            {role}
          </Badge>
        ))}
      </div>
    ) : undefined;

  const label = (
    <div className={styles.label} data-size={props.size}>
      <ListItemLabel
        title={{ children: name, as: titleAs }}
        description={description}
        size={props.size}
        loading={loading}
      />
      {badges}
    </div>
  );

  return <ListItem icon={icon} ariaLabel={name} label={label} description={description} loading={loading} {...props} />;
};
