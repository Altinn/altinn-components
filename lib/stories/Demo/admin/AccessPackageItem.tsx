import { ListItem, AvatarGroup, type ListItemProps } from '../../../components';
import { AccessControls } from "./AccessControls"

export type AccessPackageItemVariant = "access" | undefined

export interface AccessPackageItemProps extends ListItemProps {
  variant?: string;
  access?: any
}

export const AccessPackageItem = ({
  variant,
  theme = "subtle",
  icon = "package",
  size = "sm",
  linkIcon = false,
  access,
  users,
  ...props
}: AccessPackageItemProps) => {

  if (variant === "access") {
    return (
      <ListItem
      {...props}
        color={!access && "neutral"}
        theme={theme}
        size={size}
        icon={icon}
        controls={<AccessControls access={access} />}
      />
    )
  }

  if (users) {
    return <ListItem {...props} icon={icon} color={!users?.length && "neutral" }theme={theme} controls={<AvatarGroup size="xs" items={users} />} linkIcon={linkIcon} />
    
  }

    return <ListItem {...props} icon={icon} theme={theme} linkIcon={linkIcon} />




};
