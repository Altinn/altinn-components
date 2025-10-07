import { type ChangeEvent, useMemo, useState } from 'react';
import type { BookmarksSectionProps, EditableBookmarkProps } from '../../lib';
import { bookmarksItems } from './bookmarksItems';

export const useBookmarks = (): BookmarksSectionProps => {
  const [expandedId, setExpandedId] = useState<string>('');
  const [inputValue, setInputValue] = useState<Record<string, string>>({});

  const items = useMemo(
    () =>
      bookmarksItems.map((item) => ({
        ...item,
        id: item.id,
        expandIconAltText: 'Eksmpander',
        inputValue: (typeof inputValue[item.id] === 'undefined' ? item.title : inputValue[item.id]) ?? '',
        onChange: (e: ChangeEvent<HTMLInputElement>) => {
          setInputValue((prevState) => ({
            ...prevState,
            [item.id]: e.target.value,
          }));
        },
        as: 'a',
        href: '#' + item.id,
        onToggle: () => onToggle(item.id),
        saveButton: {
          ...item.saveButton,
          onClick: () => {
            alert(`Lagre søk med tittel ${inputValue[item.id]}`);
          },
        },
        expanded: expandedId === item.id,
      })),
    [expandedId, inputValue],
  );

  const onToggle = (id: string) => {
    setExpandedId((prevState) => {
      if (prevState === id) {
        return '';
      }
      return id;
    });
  };

  return {
    title: '3 lagrede søk',
    untitled: 'Uten tittel',
    titleField: {
      label: 'Tittel',
      placeholder: 'Uten tittel',
    },
    description: 'Sist oppdatert: 3 minutter siden.',
    items: items as EditableBookmarkProps[],
    expandedId,
    onToggle,
  };
};
