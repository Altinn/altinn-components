import { ListItem, type ListItemSize, AvatarGroup, Avatar } from '../../../components';
import { AccessControls } from "./AccessControls"
import {ChevronRightIcon} from "@navikt/aksel-icons";

export type UserAdminListItemType = "access" | undefined

export interface UserAdminListItemProps {
  size: ListItemSize,
  variant?: string,
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
}: UserAdminListItemProps) => {

  const icon = items ? <AvatarGroup items={items} size={"sm"} /> : <Avatar type={type} name={name} size="md" />

  if (variant === "access") {
    return (
      <ListItem {...props} size={size} icon={icon} title={name} description={role} controls={<AccessControls access={access}/>} />
    );
  }

  return (
    <ListItem {...props} size={size} icon={icon} title={name} description={role} linkIcon={ChevronRightIcon} />
  );
};
