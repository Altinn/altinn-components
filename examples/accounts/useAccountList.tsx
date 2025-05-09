import { useState } from 'react';
import { accountListItems, useAccountListToolbar } from '../';

export const useAccountList = () => {
  const [expandedId, setExpandedId] = useState<string>('');

  const onToggle = (id: string) => {
    setExpandedId((prevState) => {
      if (prevState === id) {
        return '';
      }
      return id;
    });
  };

  const toolbar = useAccountListToolbar();
  const items = accountListItems.map((item, index) => {
    const itemId = item?.id || 'index' + index;

    return {
      ...item,
      collapsible: true,
      expanded: itemId === expandedId,
      onClick: () => onToggle(itemId),
    };
  });

  const search = toolbar?.search;
  const q = search?.value;

  if (q) {
    const filteredItems = items.filter((item) => item.title.toLowerCase().includes(q.toLowerCase()));

    const count = filteredItems.length;

    const title = count > 0 ? count + ' treff' : 'Ingen treff';

    return {
      toolbar,
      items,
      results: {
        title,
        items: filteredItems,
      },
    };
  }

  const breadcrumbs = [
    {
      label: 'Forside',
    },
    {
      label: 'Seksjon',
    },
    {
      label: 'Side',
    },
  ];

  const favourites = items?.filter((item) => item.type === 'group' || item.favourite);

  const otherItems = items?.filter((item) => item.type !== 'group' && !item.favourite);

  return {
    breadcrumbs,
    toolbar,
    items,
    favourites,
    otherItems,
    expandedId,
    onToggle,
  };
};
