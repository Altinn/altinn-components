import {
  ContextMenu,
  type ContextMenuProps,
  type QueryItemProps,
  QueryLabel,
  SettingsItem,
  type SettingsItemProps,
} from '..';

import { MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@navikt/aksel-icons';

export interface BookmarksSettingsItemProps extends SettingsItemProps {
  /** Query params */
  params?: QueryItemProps[];
  /** Context menu */
  contextMenu?: ContextMenuProps;
  /** Toggle function */
  onToggle?: () => void;
}

export const BookmarksSettingsItem = ({
  id,
  loading,
  title,
  params,
  onToggle,
  contextMenu,
  ...rest
}: BookmarksSettingsItemProps) => {
  const applicableContextMenu = contextMenu || {
    id: 'context-menu' + id,
    items: [
      {
        icon: PencilIcon,
        title: 'Rediger tittel',
        onClick: onToggle,
      },
      {
        icon: TrashIcon,
        title: 'Slett søk',
        onClick: onToggle,
      },
    ],
  };

  return (
    <SettingsItem
      {...rest}
      id={id}
      icon={MagnifyingGlassIcon}
      loading={loading}
      title={title}
      description={title && <QueryLabel params={params} size="xs" />}
      label={!title && !loading && <QueryLabel params={params} />}
      controls={applicableContextMenu && <ContextMenu {...applicableContextMenu} />}
      linkIcon
      /*
      controls={
        onToggle && (
          <Button
            size="xs"
            variant="outline"
            onClick={onToggle}
            icon={PencilIcon}
          >
            Endre
          </Button>
        )
      }
        */
    />
  );
};
