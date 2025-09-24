import { type ChangeEvent, useState } from 'react';
import type { ToolbarProps } from '../../lib';

export const useAdminToolbar = ({ accountMenu, search }: ToolbarProps) => {
  const [q, setQ] = useState('');

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  return {
    accountMenu: {
      ...accountMenu,
      items: accountMenu?.items.filter((item) => item.id !== 'user'),
      isVirtualized: true,
    },
    search: {
      name: 'search',
      placeholder: 'Søk',
      ...search,
      value: q,
      onChange: onSearchChange,
    },
  };
};
