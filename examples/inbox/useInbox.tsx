import { useState } from 'react';
import { type UseInboxQuery, useFloatingDropdown, useInboxLayout, useInboxSearch, useInboxToolbar } from '../';
import type { FloatingDropdownProps, GlobalHeaderProps, MenuItemProps } from '../../lib';
import type {
  ActivityLogProps,
  AvatarProps,
  BulkButtonProps,
  DialogContactProps,
  DialogLayoutProps,
  DialogListItemProps,
  DialogListProps,
  HeaderProps,
  LayoutProps,
  SeenByLogProps,
  ToolbarProps,
} from '../../lib';
import { ContextMenu } from '../../lib';
import { dialogContact, getContextMenu, getSeenByLog } from './';
import { dialogs, getDialogList } from './dialogs';
import { useInboxAccounts } from './useInboxAccounts';

interface UseInboxDialogProps extends DialogListItemProps {
  backButton?: DialogLayoutProps['backButton'];
  contextMenu?: DialogLayoutProps['contextMenu'];
  pageMenu?: DialogLayoutProps['pageMenu'];
  contact?: DialogContactProps;
}

interface UseInboxModalProps {
  id?: string;
  type?: string;
  title?: string;
  activityLog?: ActivityLogProps;
  seenByLog?: SeenByLogProps;
}

export interface UseInboxProps extends LayoutProps {
  defaultAccountId?: string;
  query?: UseInboxQuery;
  pageId?: string;
  pageTitle?: string;
  searchTitle?: string;
  dialogId?: string;
  dialog?: UseInboxDialogProps;
  layout?: LayoutProps;
  toolbar?: ToolbarProps;
  results?: DialogListProps;
  bulkMode?: boolean;
  bulkActions?: BulkButtonProps[];
  bulkIds?: string[];
  unselectAll?: () => void;
  modalId?: string;
  modal?: UseInboxModalProps;
  closeModal?: () => void;
  floatingDropdown?: FloatingDropdownProps;
}

function getAccountIdFromUrl(): string {
  const parsedUrl = new URL(window.location.href);
  return parsedUrl.searchParams.get('accountId') ?? '';
}

export const useInbox = ({
  defaultAccountId = 'user',
  pageId = 'inbox',
  query,
  ...props
}: UseInboxProps): UseInboxProps => {
  const accountId = getAccountIdFromUrl() || defaultAccountId;

  const layout = useInboxLayout({ accountId, pageId });
  const floatingDropdown = useFloatingDropdown({
    showNewFunctionalityText: 'Show new functionality',
    helpPagesText: 'Help pages',
    exitText: 'Exit',
  });

  const archived = dialogs.filter((item) => item?.archived).map((item) => item.id) || [];
  const trashed = dialogs.filter((item) => item?.trashed).map((item) => item.id) || [];
  const seen = dialogs.filter((item) => item?.seenByLog).map((item) => item.id) || [];

  const [bulkIds, setBulkIds] = useState<string[]>(props.bulkIds || []);
  const [seenIds, setSeenIds] = useState(seen);
  const [unreadIds, setUnreadIds] = useState<string[]>([]);
  const [archivedIds, setArchivedIds] = useState(archived);
  const [trashedIds, setTrashedIds] = useState(trashed);

  const [dialogId, setDialogId] = useState(props?.dialogId || '');
  const [modalId, setModalId] = useState<string>('');
  const [modalType, setModalType] = useState<string>('');

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

  const onRead = (id: string) => {
    setUnreadIds((prevState) => {
      return prevState.filter((prevId) => prevId !== id);
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

  const onModal = (id: string, type: string) => {
    setModalId(id);
    setModalType(type);
  };

  const list = getDialogList(dialogs, query?.q);

  const listItems = list.items
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
      if (query?.q) {
        return true;
      }

      if (pageId === 'drafts' && !item.draftsLabel) {
        return false;
      }

      if (pageId === 'sent' && !item.sentCount) {
        return false;
      }

      if (pageId === 'archive' && !item.archived) {
        return false;
      }

      if (pageId === 'trash' && !item.trashed) {
        return false;
      }

      if (pageId !== 'drafts' && item.draftsLabel) {
        return false;
      }

      if (pageId !== 'archive' && item.archived) {
        return false;
      }

      if (pageId !== 'trash' && item.trashed) {
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

      const seenByLog = seenIds.includes(id)
        ? getSeenByLog([
            ...(item?.seenByLog?.items || []),
            {
              id: 'user',
              seenAt: '2023-10-01T12:00:00Z',
              seenAtLabel: '',
              name: 'Mathias Dyngeland',
              isEndUser: true,
            },
          ])
        : getSeenByLog(item?.seenByLog?.items);

      const unread = unreadIds.includes(id) || !seenIds.includes(id);

      const contextMenu = getContextMenu({
        id,
        unread,
        trashed,
        archived,
        seenByLog: seenByLog as SeenByLogProps,
        onRead,
        onUnread,
        onArchive,
        onTrash,
        onSelect,
        onModal,
      });

      const header = layout?.header as HeaderProps;

      return {
        ...item,
        groupId: pageId !== 'inbox' ? undefined : item.groupId,
        archived,
        archivedAtLabel: archived ? 'Arkivert' : undefined,
        trashed,
        trashedAtLabel: trashed ? 'Arkivert' : undefined,
        href: undefined,
        recipient: header?.currentAccount,
        unread: trashed || archived ? false : unread,
        seenByLog,
        ariaLabel: item.title,
        controls: <ContextMenu {...contextMenu} />,
        badge:
          (archived && {
            variant: 'subtle',
            color: 'neutral',
            label: 'Arkiv',
            size: 'sm',
          }) ||
          (trashed && {
            variant: 'subtle',
            color: 'neutral',
            label: 'Papirkurv',
            size: 'sm',
          }) ||
          (unread && {
            size: 'xs',
            label: 'Ny',
          }),
        as: 'button',
        onClick: () => item.id && onDialogId(item.id),
      };
    }) as DialogListItemProps[];

  const dialog = (dialogId && listItems?.find((item) => item.id === dialogId)) || undefined;

  const contextMenu =
    dialog &&
    getContextMenu({
      id: dialogId,
      unread: dialog?.unread,
      trashed: dialog?.trashed,
      archived: dialog?.archived,
      seenByLog: dialog?.seenByLog,
      onRead,
      onUnread,
      onArchive,
      onTrash,
      onSelect,
      onModal,
    });

  // create toolbar

  const { accountMenu, subAccountMenu, currentAccount, defaultAccount } = useInboxAccounts({
    accountId,
  });

  const toolbarMenus = subAccountMenu ? [accountMenu, subAccountMenu] : [accountMenu];

  const toolbar = useInboxToolbar({
    query,
    menus: toolbarMenus as ToolbarProps['menus'],
  });

  // duplicate items if grouped view

  const groupView = currentAccount?.type === 'group';
  const groupIds = toolbar?.filter?.filterState?.groupIds || [accountId];

  const itemsByGroupId: { [key: string]: DialogListItemProps } = {};

  listItems?.map((item) => {
    groupIds?.map((id) => {
      const itemId = [id, item.id].join('-');

      const recipient = accountMenu?.items.find((item) => item.id === id);

      itemsByGroupId[itemId] = {
        ...item,
        recipient: recipient?.icon as AvatarProps,
        color: recipient?.role as DialogListItemProps['color'],
        id: itemId,
        grouped: groupIds.length > 1, // groupView && true,
      };
    });
  });

  const items = Object.values(itemsByGroupId) as DialogListItemProps[];
  //  const items = sortDialogsByKey(groupItems, "updatedAtLabel", true);

  const search = useInboxSearch({
    name: 'search',
    placeholder: 'Søk i innboksen',
    value: query?.q,
  });

  const modalDialog = (modalId && items?.find((item) => item.id === modalId)) || undefined;

  const modal = modalDialog && {
    id: modalId,
    type: modalType,
    title: modalDialog?.title,
    seenByLog: modalDialog?.seenByLog,
  };

  //  set group view stuff

  const color = currentAccount?.type === 'company' ? 'company' : 'person';

  // get title + search title

  const currentPage = layout?.sidebar?.menu?.items?.find((item: MenuItemProps) => item.id === pageId);

  const pageTitle = currentPage?.title;
  const searchTitle = items?.length > 0 ? items?.length + ' treff' : 'Ingen treff';

  return {
    floatingDropdown,
    modal,
    modalId,
    closeModal: () => setModalId(''),
    pageId,
    pageTitle,
    searchTitle,
    dialogId,
    dialog: dialog && {
      ...dialog,
      contextMenu,
      contact: dialogContact,
      backButton: {
        onClick: () => onDialogId(''),
        label: 'Tilbake',
      },
    },
    bulkIds,
    layout: {
      ...layout,
      theme: 'inbox',
      color,
      header: {
        ...(layout?.header as HeaderProps),
        globalMenu: {
          ...layout?.header?.globalMenu,
        } as GlobalHeaderProps,
        currentAccount: groupView ? defaultAccount : currentAccount,
        search,
      },
    } as LayoutProps,
    toolbar,
    results: {
      groups: list.groups,
      items,
    },
  };
};
