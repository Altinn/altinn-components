import { ListItem, AvatarGroup, type ListItemProps } from '../../../components';
import { AccessControls } from "./AccessControls"
import {ChevronRightIcon, PackageIcon} from "@navikt/aksel-icons";

export type AccessPackageItemVariant = "access" | undefined

export interface AccessPackageItemProps extends Omit<ListItemProps, 'variant'> {
  variant?: AccessPackageItemVariant;
  access?: any
  users?: ListItemProps[]
}

export const AccessPackageItem = ({
  variant,
  theme = "subtle",
  icon = PackageIcon,
  size = "sm",
  linkIcon = ChevronRightIcon,
  access,
  users,
  ...props
}: AccessPackageItemProps) => {

  if (variant === "access") {
    return (
      <ListItem
      {...props}
        color={!access ? "neutral" : undefined}
        theme={theme}
        size={size}
        icon={icon}
        controls={<AccessControls access={access} />}
      />
    )
  }

  if (users) {
    return <ListItem {...props} icon={icon} color={!users?.length ? "neutral" : undefined } theme={theme} controls={<AvatarGroup size="xs" items={users} />} linkIcon={linkIcon} />
    
  }

  return <ListItem {...props} icon={icon} theme={theme} linkIcon={linkIcon} />

};
