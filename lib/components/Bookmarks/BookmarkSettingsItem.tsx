import { ContextMenu, type ContextMenuProps, type QueryItemProps, SettingsItemBase, type SettingsItemProps } from '..';

import { MagnifyingGlassIcon } from '@navikt/aksel-icons';
import { BookmarkSettingsItemLabel } from './BookmarkSettingsItemLabel';

export interface BookmarkSettingsItemProps {
  /** Bookmark id */
  id: string;
  /** Group id */
  groupId?: string;
  /** Icon */
  icon?: SettingsItemProps['icon'];
  /** Loading */
  loading?: boolean;
  /** Optional title */
  title?: string;
  /** Icon */
  highlightWords?: SettingsItemProps['highlightWords'];
  /** Optional title */
  untitled?: string;
  /** Query params */
  params?: QueryItemProps[];
  /** Context menu */
  contextMenu?: ContextMenuProps;
  /** Render as **/
  as?: React.ElementType;
}

export const BookmarkSettingsItem = ({
  id,
  icon = MagnifyingGlassIcon,
  loading,
  title,
  highlightWords,
  params,
  contextMenu,
  ...rest
}: BookmarkSettingsItemProps) => {
  return (
    <SettingsItemBase
      {...rest}
      id={id}
      icon={icon}
      loading={loading}
      label={
        <BookmarkSettingsItemLabel highlightWords={highlightWords} loading={loading} params={params} title={title} />
      }
      controls={contextMenu && <ContextMenu {...contextMenu} />}
      linkIcon
    />
  );
};
