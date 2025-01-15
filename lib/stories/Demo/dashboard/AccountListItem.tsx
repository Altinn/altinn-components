import {
  type AvatarType,
  Badge,
  IconButton,
  ListItemBase,
  ListItemHeader,
  type ListItemInputProps,
} from '../../../components';

export interface UserAccountProps extends ListItemInputProps {
  id: string;
  /** Account name */
  name: string;
  /** Account type */
  type: AvatarType;
  /** Loading */
  loading?: boolean;
  /** Expanded */
  expanded?: boolean;
  /** Toggle */
  onToggle?: (id: string) => void;
  /** Render as **/
  as?: React.ElementType;
}

export const AccountListItem = ({
  id,
  size = 'md',
  expanded,
  loading,
  name,
  type,
  children,
  badge,
  as = 'button',
  ...rest
}: UserAccountProps) => {
  return (
    <ListItemBase {...rest} loading={loading} expanded={expanded}>
      <ListItemHeader
        {...rest}
        as={as}
        size={size}
        title={name}
        description={type}
        loading={loading}
        linkIcon={expanded ? 'chevron-up' : 'chevron-down'}
        badge={{ ...badge, label: badge?.label + ' roller' }}
        avatar={{ type, name }}
      />
      {children}
    </ListItemBase>
  );
};
