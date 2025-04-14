import {
  ListItem,
  type ListItemProps,
  ContextMenu,
  type ContextMenuProps,
  Flex,
  Badge,
  ListItemControls,
} from "..";

import { HeartFillIcon, HeartIcon } from "@navikt/aksel-icons";
export type AccountListItemType = "person" | "company" | "group";

export interface AccountListItemProps extends ListItemProps {
  id?: string;
  type?: AccountListItemType;
  favourite?: boolean;
  contextMenu?: ContextMenuProps;
  label?: string;
}

export const AccountListItem = ({
  size = "md",
  expanded,
  type,
  avatar,
  avatarGroup,
  title,
  description,
  label,
  favourite = false,
  contextMenu,
  children,
  ...item
}: AccountListItemProps) => {
  const controls = (
    <ListItemControls>
      <Flex
        align="center"
        spacing={2}
        style={{ position: "relative", fontSize: "1.25rem" }}
      >
        {label ? (
          <Badge color={type === "group" ? "neutral" : type}>{label}</Badge>
        ) : favourite ? (
          <HeartFillIcon />
        ) : (
          <HeartIcon />
        )}
      </Flex>
      {contextMenu && <ContextMenu {...contextMenu} size="sm" />}
    </ListItemControls>
  );

  return (
    <ListItem
      {...item}
      size={size}
      avatar={avatar}
      avatarGroup={
        avatarGroup && { ...avatarGroup, size: size === "md" ? "sm" : "xs" }
      }
      title={title}
      description={expanded ? undefined : description}
      expanded={expanded}
      selected={expanded}
      badge={controls}
      linkIcon
    >
      {children}
    </ListItem>
  );
};
