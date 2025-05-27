import { Badge, ContextMenu, type ContextMenuProps, IconButton, ListItemControls } from '..';

import { HeartFillIcon, HeartIcon } from '@navikt/aksel-icons';
export type AccountListItemType = 'person' | 'company' | 'group';

export interface AccountListItemControlsProps {
  id: string;
  isCurrentEndUser?: boolean; // Optional, used to indicate if this account is the current end user
  favourite?: boolean; // Optional, used for marking favourite accounts
  favouriteLabel?: string; // Optional, label for the favourite icon
  onToggleFavourite?: (id: string) => void; // Optional, callback for toggling favourite status
  accountLabel?: string; // Optional, used for displaying a badge
  contextMenu?: ContextMenuProps;
}

export const AccountListItemControls = ({
  id,
  isCurrentEndUser = false,
  accountLabel,
  favourite = false,
  favouriteLabel,
  onToggleFavourite,
  contextMenu,
}: AccountListItemControlsProps) => {
  return (
    <ListItemControls>
      {accountLabel && <Badge label={accountLabel} />}
      {!isCurrentEndUser && (
        <IconButton
          rounded
          variant="text"
          icon={favourite ? HeartFillIcon : HeartIcon}
          iconAltText={favouriteLabel || 'Toggle favourite'}
          onClick={() => onToggleFavourite?.(id)}
          size="sm"
        />
      )}
      {contextMenu && <ContextMenu {...contextMenu} size="sm" />}
    </ListItemControls>
  );
};
