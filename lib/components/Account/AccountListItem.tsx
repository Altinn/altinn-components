import { type ContextMenuProps, ListItem, type ListItemProps } from '..';

import { AccountListItemControls, type AccountListItemControlsProps } from './AccountListItemControls';

export type AccountListItemType = 'person' | 'company' | 'group';

export interface AccountListItemProps extends ListItemProps, AccountListItemControlsProps {
  id: string;
  type: AccountListItemType;
  name: string;
  title?: string;
  groupId?: string; // Optional, used for grouping accounts
  uniqueId?: string; // Organization number or personal identification number
  parentId?: string; // Optional, used for hierarchical relationships
  accountIds?: string[]; // Optional, used for grouping accounts
  isCurrentEndUser?: boolean; // Indicates if this account is the current end user
  isDeleted?: boolean; // Indicates that the account has been deleted
  contextMenu?: ContextMenuProps;
  label?: string;
}

export const AccountListItem = ({
  id,
  type,
  size,
  expanded,
  icon,
  title,
  description,
  isCurrentEndUser,
  isDeleted,
  badge,
  favourite = false,
  favouriteLabel,
  onToggleFavourite,
  contextMenu,
  children,
  interactive,
  ...item
}: AccountListItemProps) => {
  return (
    <ListItem
      {...item}
      size={size}
      icon={icon}
      title={title}
      description={expanded ? undefined : description}
      expanded={expanded}
      selected={expanded}
      controls={
        !expanded && (
          <AccountListItemControls
            id={id}
            type={type}
            favourite={favourite}
            favouriteLabel={favouriteLabel}
            badge={badge}
            isCurrentEndUser={isCurrentEndUser}
            isDeleted={isDeleted}
            onToggleFavourite={onToggleFavourite}
            contextMenu={contextMenu}
          />
        )
      }
      linkIcon
      interactive={interactive}
    >
      {children}
    </ListItem>
  );
};
