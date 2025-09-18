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
  /** Edit function */
  onEdit?: () => void;
  /** Delete function */
  onDelete?: () => void;
}

export const BookmarksSettingsItem = ({
  id,
  loading,
  title,
  params,
  onEdit,
  onDelete,
  contextMenu,
  ...rest
}: BookmarksSettingsItemProps) => {
  const applicableContextMenu = contextMenu || {
    id: 'context-menu' + id,
    items: [
      {
        icon: PencilIcon,
        title: 'Rediger tittel',
        onClick: onEdit,
      },
      {
        icon: TrashIcon,
        title: 'Slett søk',
        onClick: onDelete,
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
    />
  );
};
