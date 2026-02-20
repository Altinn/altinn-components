import { MagnifyingGlassIcon, PencilIcon, TrashIcon } from '@navikt/aksel-icons';
import { type ChangeEvent, useMemo, useState } from 'react';
import type { BookmarkSettingsListProps } from '../../lib';
import { bookmarksItems } from './bookmarksItems';

interface UseBookmarkSettingsProps extends BookmarkSettingsListProps {
  title?: string;
  description?: string;
  expandedId: string;
  onToggle: (id: string) => void;
  onSave: (id: string) => void;
  onClose: () => void;
}

export const useBookmarks = (): UseBookmarkSettingsProps => {
  const [expandedId, setExpandedId] = useState<string>('');
  const [inputValue, setInputValue] = useState<Record<string, string>>({});
  const [itemTitles, setItemTitles] = useState<Record<string, string>>({});
  const [deletedItems, setDeletedItems] = useState<string[]>(['']);

  const onToggle = (id: string) => {
    setExpandedId(id);
  };

  const onClose = () => {
    setExpandedId('');
  };

  const onSave = (id: string) => {
    setItemTitles((prevState) => {
      return {
        ...prevState,
        [id]: inputValue?.[id],
      };
    });
    setExpandedId('');
  };

  const onDelete = (id: string) => {
    setDeletedItems((prevState) => {
      return [...prevState, id];
    });
  };

  const getContextMenu = (id: string) => {
    return {
      items: [
        {
          groupId: '1',
          id: 'search-inbox',
          title: 'Søk i innboks ...',
          icon: MagnifyingGlassIcon,
          linkIcon: true,
        },
        {
          groupId: '2',
          id: 'edit-saved-search',
          title: 'Rediger tittel',
          icon: PencilIcon,
          onClick: () => onToggle(id),
        },
        {
          groupId: '2',
          id: 'delete-saved-search',
          title: 'Slett søk',
          icon: TrashIcon,
          onClick: () => onDelete(id),
        },
      ],
    };
  };

  const items = useMemo(
    () =>
      bookmarksItems
        .filter((item) => !deletedItems?.includes(item.id))
        .map((item) => ({
          ...item,
          id: item.id,
          title: itemTitles?.[item.id] || item?.title || undefined,
          modalProps: {
            title: 'Lagret søk',
            titleField: {
              label: 'Tittel',
              placeholder: 'Uten tittel',
              value: (typeof inputValue[item.id] === 'undefined' ? item.title : inputValue[item.id]) ?? '',
              onChange: (e: ChangeEvent<HTMLInputElement>) => {
                setInputValue((prevState) => ({
                  ...prevState,
                  [item.id]: e.target.value,
                }));
              },
            },
          },
          as: 'a',
          href: '#' + item.id,
        })),
    [deletedItems, inputValue, itemTitles],
  );

  const applicableItems = items?.map((item) => {
    return {
      ...item,
      contextMenu: getContextMenu(item.id),
    };
  });

  return {
    title: '3 lagrede søk',
    description: 'Sist oppdatert: 3 minutter siden.',
    items: applicableItems as BookmarkSettingsListProps['items'],
    expandedId,
    onToggle,
    onClose,
    onSave,
  };
};
