import { Badge, type BadgeProps, ContextMenu, type ContextMenuProps, IconButton, ListItemControls } from '..';

import { HeartFillIcon, HeartIcon } from '@navikt/aksel-icons';
import { type ReactNode, isValidElement } from 'react';
export type AccountListItemType = 'person' | 'company' | 'group';

export interface AccountListItemControlsProps {
  id: string;
  type: AccountListItemType;
  isCurrentEndUser?: boolean; // Optional, used to indicate if this account is the current end user
  isDeleted?: boolean;
  favourite?: boolean; // Optional, used for marking favourite accounts
  favouriteLabel?: string; // Optional, label for the favourite icon
  onToggleFavourite?: (id: string) => void; // Optional, callback for toggling favourite status
  accountLabel?: string; // Optional, used for displaying a badge
  contextMenu?: ContextMenuProps;
  loading?: boolean;
  badge?: BadgeProps | ReactNode;
}

export const AccountListItemControls = ({
  id,
  type,
  badge,
  isCurrentEndUser = false,
  favourite = false,
  favouriteLabel,
  onToggleFavourite,
  contextMenu,
  loading,
}: AccountListItemControlsProps) => {
  /** Badge can be custom, or a Badge object. */
  const renderBadge = (): ReactNode => {
    if (badge && !loading && typeof badge === 'object' && 'label' in badge) {
      return <Badge {...(badge as BadgeProps)} />;
    }
    if (isValidElement(badge)) {
      return badge;
    }
    return null;
  };

  return (
    <ListItemControls>
      {badge && renderBadge()}
      {!isCurrentEndUser && type !== 'group' && (
        <IconButton
          rounded
          variant="text"
          icon={favourite ? HeartFillIcon : HeartIcon}
          iconAltText={favouriteLabel || 'Toggle favourite'}
          onClick={() => onToggleFavourite?.(id)}
          size="xs"
        />
      )}
      {contextMenu && <ContextMenu {...contextMenu} />}
    </ListItemControls>
  );
};
