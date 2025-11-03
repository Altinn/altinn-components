import { ContextMenu, type ContextMenuProps, IconButton, ListItemControls } from '..';

import { XMarkIcon } from '@navikt/aksel-icons';

export interface NotificationItemControlsProps {
  className?: string;
  loading?: boolean;
  dismissable?: boolean;
  dismissLabel?: string;
  onDismiss?: () => void;
  contextMenu?: ContextMenuProps;
}

export const NotificationItemControls = ({
  className,
  loading,
  dismissable,
  dismissLabel,
  onDismiss,
  contextMenu,
}: NotificationItemControlsProps) => {
  if (loading) {
    return null;
  }

  return (
    <ListItemControls className={className}>
      {contextMenu && <ContextMenu {...contextMenu} />}
      {dismissable && (
        <IconButton
          rounded
          variant="text"
          icon={XMarkIcon}
          iconAltText={dismissLabel || 'Dismiss'}
          onClick={onDismiss}
          size="xs"
        />
      )}
    </ListItemControls>
  );
};
