import { TokenIcon } from '@navikt/aksel-icons';
import { Avatar, type AvatarGroupProps, type AvatarProps } from '../Avatar';
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
  /** The explicit level of the title, if diverting from the default size-adjusted level */
  titleAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
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
  ...props
}: UserListItemProps) => {
  let icon: IconProps | SvgElement | AvatarProps | AvatarGroupProps;

  switch (type) {
    case 'person':
      icon = { name: name, type: 'person' };
      break;
    case 'company':
      icon = { name: name, type: 'company' };
      break;
    case 'system':
      icon = TokenIcon;
      break;
    default:
      icon = { name: name, type: 'person' };
  }

  const subUnitAvatar = subUnit && <Avatar name={name} type={'company'} className={styles.subUnitAvatar} />;

  const badges = roleNames ? (
    <div className={styles.badges}>
      {roleNames.map((role) => (
        <Badge label={role} key={role}>
          {role}
        </Badge>
      ))}
    </div>
  ) : undefined;

  const label = (
    <div className={styles.label} data-size={props.size}>
      <ListItemLabel title={{ children: name, as: titleAs }} description={description} size={props.size} />
      {badges}
    </div>
  );

  return (
    <ListItem
      icon={subUnit ? subUnitAvatar : icon}
      ariaLabel={name}
      label={label}
      description={description}
      {...props}
    />
  );
};
