import {
  ArchiveIcon,
  ArrowRedoIcon,
  CheckmarkIcon,
  ClockDashedIcon,
  EyeClosedIcon,
  EyeIcon,
  TrashIcon,
} from '@navikt/aksel-icons';
import type { ContextMenuProps, SeenByLogProps } from '../../lib';

export const contextMenu: ContextMenuProps = {
  id: 'context-menu',
  items: [
    {
      groupId: '1',
      id: 'share',
      icon: ArrowRedoIcon,
      title: 'Del og gi tilgang',
    },
    {
      groupId: '1',
      id: 'unread',
      icon: EyeClosedIcon,
      title: 'Marker som ulest',
    },
    {
      groupId: '2',
      id: 'archive',
      icon: ArchiveIcon,
      title: 'Flytt til arkiv',
    },
    {
      groupId: '2',
      id: 'trash',
      icon: TrashIcon,
      title: 'Flytt til papirkurv',
    },
    {
      groupId: '2',
      id: 'select',
      icon: CheckmarkIcon,
      title: 'Legg i liste ...',
    },
    {
      groupId: '3',
      id: 'seen-by-log',
      icon: EyeIcon,
      title: 'Sett av',
    },
    {
      groupId: '3',
      id: 'activity-log',
      icon: ClockDashedIcon,
      title: 'Aktivitetslogg',
    },
  ],
};

interface GetContextMenuProps {
  id: string;
  unread?: boolean;
  archived?: boolean;
  trashed?: boolean;
  seenByLog?: SeenByLogProps;
  onUnread?: (id: string) => void;
  onArchive?: (id: string) => void;
  onTrash?: (id: string) => void;
  onSelect?: (id: string) => void;
  onModal?: (id: string, type: string) => void;
}

export const getContextMenu = ({
  id,
  unread,
  archived,
  trashed,
  seenByLog,
  onUnread,
  onArchive,
  onTrash,
  onSelect,
  onModal,
}: GetContextMenuProps): ContextMenuProps => {
  const items = contextMenu.items.map((item) => {
    switch (item.id) {
      case 'unread':
        return {
          ...item,
          disabled: unread,
          onClick: () => onUnread?.(id),
        };
      case 'archive':
        return {
          ...item,
          disabled: archived,
          onClick: () => onArchive?.(id),
        };
      case 'trash':
        return {
          ...item,
          disabled: trashed,
          onClick: () => onTrash?.(id),
        };
      case 'select':
        return {
          ...item,
          disabled: trashed,
          onClick: () => onSelect?.(id),
        };
      case 'seen-by-log':
        return {
          ...item,
          hidden: !seenByLog?.items,
          icon: { items: seenByLog?.items },
          label: seenByLog?.title,
          onClick: () => onModal?.(id, 'seen-by-log'),
        };
      case 'activity-log':
        return {
          ...item,
          onClick: () => onModal?.(id, 'activity-log'),
        };
      default:
        return item;
    }
  });

  return {
    ...contextMenu,
    id: `context-menu-${id}`,
    items,
  };
};
