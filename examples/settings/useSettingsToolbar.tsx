import { type ChangeEvent, useState } from 'react';
import type { ToolbarProps, ToolbarMenuProps } from '../../lib';

export const useSettingsToolbar = ({ accountMenu }: ToolbarProps) => {
  const [q, setQ] = useState('');

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  if (accountMenu) {
    return {
      accountMenu: {
        ...accountMenu,
        variant: "solid",
        items: accountMenu?.items?.filter((item) => item.id !== 'user'),
        virtualized: true,
      } as ToolbarMenuProps,
      search: {
        name: 'search',
        placeholder: 'Søk i innstillinger',
        value: q,
        onChange: onSearchChange,
      },
    };
  }

  return {
    search: {
      name: 'search',
      placeholder: 'Søk i innstillinger',
      value: q,
      onChange: onSearchChange,
    },
  };
};
