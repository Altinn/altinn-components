import { Badge, type BadgeProps, Button, ContextMenu, type ContextMenuProps, ListItemControls } from '..';

import { HeartFillIcon, HeartIcon } from '@navikt/aksel-icons';
import { type ReactNode, isValidElement } from 'react';
export type AccountListItemType = 'person' | 'company' | 'group';

export interface AccountListItemControlsProps {
  id: string;
  type: AccountListItemType;
  isCurrentEndUser?: boolean; // Optional, used to indicate if this account is the current end user
  isDeleted?: boolean;
  favourite?: boolean; // Optional, used for marking favourite accounts
  isPreselectedParty?: boolean;
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
  isPreselectedParty = false,
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
      {!isCurrentEndUser && !isPreselectedParty && type !== 'group' && (
        <Button
          size="xs"
          variant="ghost"
          rounded
          aria-label={favouriteLabel || 'Toggle favourite'}
          onClick={() => onToggleFavourite?.(id)}
        >
          {favourite ? <HeartFillIcon /> : <HeartIcon />}
        </Button>
      )}
      {contextMenu && <ContextMenu {...contextMenu} />}
    </ListItemControls>
  );
};
