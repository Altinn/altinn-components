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
  endUserLabel?: string; // Label for the end user, if any
  accountLabel?: string; // Label for the badge, if any
  contextMenu?: ContextMenuProps;
  label?: string;
}

export const AccountListItem = ({
  id,
  size,
  expanded,
  type,
  icon,
  title,
  description,
  isCurrentEndUser,
  endUserLabel = 'Your account',
  accountLabel,
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
      badge={
        !expanded && (
          <AccountListItemControls
            id={id}
            favourite={favourite}
            favouriteLabel={favouriteLabel}
            isCurrentEndUser={isCurrentEndUser}
            accountLabel={isCurrentEndUser ? endUserLabel : accountLabel}
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
