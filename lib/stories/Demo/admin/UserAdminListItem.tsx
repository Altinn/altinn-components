import { ListItem, type ListItemSize, type AvatarType, AvatarGroup, Avatar } from '../../../components';
import { AccessControls } from "./AccessControls"

export type UserAdminListItemType = "access" | undefined

export interface UserAdminListItemProps {
  size: ListItemSize,
  type: UserAdminListItemType,
  name: string,
  role?: string,
  items?: any
  access?: any
}

export const UserAdminListItem = ({
  variant,
  size = "md",
  type,
  name,
  role,
  items,
  access,
  ...props
}) => {

  const icon = items && <AvatarGroup items={items} size={"sm"} /> || <Avatar type={type} name={name} size="md" />

  if (variant === "access") {
    return (
      <ListItem {...props} size={size} icon={icon} title={name} description={role} controls={<AccessControls access={access}/>} />
  );
  
  }

  return (
    <ListItem {...props} size={size} icon={icon} title={name} description={role} linkIcon='chevron-right' />
);
};
