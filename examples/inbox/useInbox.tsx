import { ArchiveIcon, ArrowRedoIcon, EyeClosedIcon, TrashIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { inboxSection, useInboxLayout, useInboxSearch, useInboxToolbar } from '../';
import { ListItemSelect } from '../../lib';
import type {
  DialogLayoutProps,
  DialogListItemProps,
  DialogListProps,
  LayoutProps,
  MenuProps,
  SearchbarProps,
  ToolbarProps,
} from '../../lib';
import { getContextMenu } from './';
import { dialogs } from './dialogs';

import { ContextMenu } from '../../lib';

interface UseInboxDialogProps extends DialogListItemProps {
  backButton?: DialogLayoutProps['backButton'];
  contextMenu?: DialogLayoutProps['contextMenu'];
  pageMenu?: DialogLayoutProps['pageMenu'];
}

export interface UseInboxProps extends LayoutProps {
  pageId?: string;
  dialogId?: string;
  dialog?: UseInboxDialogProps;
  layout?: LayoutProps;
  search?: SearchbarProps;
  toolbar?: ToolbarProps;
  results?: DialogListProps;
  bulkMode?: boolean;
  bulkMenu?: MenuProps;
  bulkIds?: string[];
  unselectAll?: () => void;
}

export const useInbox = ({ pageId = 'inbox', ...props }: UseInboxProps): UseInboxProps => {
  const layout = useInboxLayout({ pageId });
  const toolbar = useInboxToolbar();
  const search = useInboxSearch({
    name: 'search',
    placeholder: 'Søk i innboksen',
  });

  const groups = inboxSection?.groups;

  const archived = dialogs.filter((item) => item?.archived).map((item) => item.id) || [];

  const trashed = dialogs.filter((item) => item?.trashed).map((item) => item.id) || [];

  const seen = dialogs.filter((item) => item?.seenByLog).map((item) => item.id) || [];

  const [bulkIds, setBulkIds] = useState<string[]>(props.bulkIds || []);
  const [seenIds, setSeenIds] = useState(seen);
  const [unreadIds, setUnreadIds] = useState<string[]>([]);
  const [archivedIds, setArchivedIds] = useState(archived);
  const [trashedIds, setTrashedIds] = useState(trashed);

  const [dialogId, setDialogId] = useState(props?.dialogId || '');

  const onDialogId = (id: string) => {
    setSeenIds((prevState) => {
      const prev = prevState.filter((prevId) => prevId !== id);
      return [...prev, id];
    });
    setUnreadIds((prevState) => prevState.filter((prevId) => prevId !== id));
    setDialogId(id);
  };

  const onUnread = (id: string) => {
    setUnreadIds((prevState) => {
      const prev = prevState.filter((prevId) => prevId !== id);
      return [...prev, id];
    });
  };

  const onArchive = (id: string) => {
    setArchivedIds((prevState) => {
      const prev = prevState.filter((prevId) => prevId !== id);
      return [...prev, id];
    });
  };

  const onTrash = (id: string) => {
    setTrashedIds((prevState) => {
      const prev = prevState.filter((prevId) => prevId !== id);
      return [...prev, id];
    });
  };

  const onSelect = (id: string) => {
    setBulkIds((prevState) => {
      const selected = prevState.includes(id);
      const prev = prevState.filter((prevId) => prevId !== id);
      if (selected) {
        return prev;
      }
      return [...prev, id];
    });
  };

  const items = dialogs
    ?.filter((item) => typeof item.id === 'string')
    .map((item) => {
      const { id } = item as { id: string };

      const trashed = trashedIds.includes(id);
      const archived = archivedIds.includes(id);
      const selected = bulkIds.includes(id);

      return {
        ...item,
        trashed,
        archived,
        selected,
      };
    })
    ?.filter((item) => {
      if (pageId === 'drafts' && !item.draftsLabel) {
        return false;
      }

      if (pageId === 'sent' && !item.sentCount) {
        return false;
      }

      if (pageId === 'archive' && !item.archived) {
        return false;
      }

      if (pageId === 'trash' && !item.archived) {
        return false;
      }

      if (item.archived || item.trashed) {
        return false;
      }

      return true; // Default case for inbox
    })
    .map((item) => {
      const { id, trashed, archived } = item as {
        id: string;
        trashed: boolean;
        archived: boolean;
      };

      const seenByLogItems =
        item.seenByLog?.items ||
        (seenIds.includes(id) && [
          {
            seenAt: '2023-10-01T12:00:00Z',
            name: 'Mathias Dyngeland',
          },
        ]);

      const unread = unreadIds.includes(id) || !seenIds.includes(id);

      const contextMenu = getContextMenu({
        id,
        unread,
        trashed,
        archived,
        onUnread,
        onArchive,
        onTrash,
        onSelect,
      });

      return {
        ...item,
        archived,
        archivedAtLabel: archived ? 'Arkivert' : undefined,
        trashed,
        trashedAtLabel: trashed ? 'Arkivert' : undefined,
        href: undefined,
        recipient: layout?.header?.currentAccount,
        unread,
        seenByLog: seenByLogItems && {
          ...item.seenByLog,
          items: seenByLogItems,
        },
        ariaLabel: item.title,
        controls: <ContextMenu {...contextMenu} />,
        badge: unread && {
          size: 'xs',
          label: 'Ny',
        },
        as: 'button',
        onClick: () => item.id && onDialogId(item.id),
      };
    }) as DialogListItemProps[];

  const dialog = (dialogId && items?.find((item) => item.id === dialogId)) || undefined;

  const bulkMenu = {
    items: [
      {
        id: '1',
        icon: ArrowRedoIcon,
        title: 'Del og gi tilgang',
      },
      {
        id: '2',
        icon: EyeClosedIcon,
        title: 'Marker som ulest',
      },
      {
        id: '3',
        icon: ArchiveIcon,
        title: 'Flytt til arkiv',
      },
      {
        id: '4',
        icon: TrashIcon,
        title: 'Flytt til papirkurv',
      },
    ],
  };

  if (bulkIds?.length > 0) {
    return {
      bulkMode: true,
      bulkMenu,
      bulkIds,
      unselectAll: () => setBulkIds([]),
      pageId,
      layout: {
        ...layout,
        sidebar: {
          hidden: true,
        },
      },
      search,
      results: {
        groups,
        items: items.map((item) => {
          return {
            ...item,
            onClick: () => onSelect(item.id!),
            controls: (
              <ListItemSelect aria-labelledby={item.id!} checked={item?.selected} onClick={() => onSelect(item.id!)} />
            ),
          };
        }),
      },
    };
  }

  return {
    pageId,
    dialogId,
    dialog: dialog && {
      ...dialog,
      backButton: {
        onClick: () => onDialogId(''),
        label: 'Tilbake',
      },
    },
    layout,
    search,
    toolbar,
    results: {
      groups,
      items,
    },
  };
};
