import { Button, ContextMenu, type ContextMenuProps, ListItemControls } from '..';

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
        <Button variant="ghost" aria-label={dismissLabel || 'Dismiss'} onClick={onDismiss} size="xs">
          <XMarkIcon style={{ fontSize: '1.5em' }} />
        </Button>
      )}
    </ListItemControls>
  );
};
