import { useState } from 'react';
import { inboxSection, useInboxLayout, useInboxSearch, useInboxToolbar } from '../';
import type {
  DialogLayoutProps,
  DialogListItemProps,
  DialogListProps,
  LayoutProps,
  SearchbarProps,
  ToolbarProps,
} from '../../lib';

interface UseInboxDialogProps extends DialogListItemProps {
  backButton?: DialogLayoutProps['backButton'];
  contextMenu?: DialogLayoutProps['contextMenu'];
  pageMenu?: DialogLayoutProps['pageMenu'];
}

interface UseInboxProps extends LayoutProps {
  pageId?: string;
  dialogId?: string;
  dialog?: UseInboxDialogProps;
  layout?: LayoutProps;
  search?: SearchbarProps;
  toolbar?: ToolbarProps;
  results?: DialogListProps;
}

export const useInbox = ({ pageId = 'inbox' }: UseInboxProps): UseInboxProps => {
  const layout = useInboxLayout({ pageId });
  const toolbar = useInboxToolbar();
  const search = useInboxSearch({
    name: 'search',
    placeholder: 'Søk i innboksen',
  });

  const groups = inboxSection?.groups;

  const seenItems = inboxSection?.items.filter((item) => item.seen).map((item) => item.id) || [];

  const [seenIds, setSeenIds] = useState(seenItems);
  const [dialogId, setDialogId] = useState('');

  const onDialogId = (id: string) => {
    console.log('ID', id);
    setSeenIds((prevState) => {
      const prev = prevState.filter((prevId) => prevId !== id);
      return [...prev, id];
    });
    setDialogId(id);
  };

  const items = inboxSection?.items.map((item) => {
    const seen = seenIds.includes(item.id);

    return {
      ...item,
      href: undefined,
      seen,
      badge: seen ? undefined : item.badge,
      as: 'button',
      onClick: () => item.id && onDialogId(item.id),
    };
  }) as DialogListItemProps[];

  const dialog = (dialogId && items?.find((item) => item.id === dialogId)) || undefined;

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
