import { useState } from 'react';
import {
  type AccountDataGroups,
  type AccountDataProps,
  type AccountSettingsById,
  accountListGroups,
  defaultAccounts,
  getAccountItems,
  useAccountListToolbar,
} from '../';

interface UseAccountListProps {
  accounts?: AccountDataProps[];
  accountId?: string;
  groups?: AccountDataGroups;
}

export const useAccountList = ({ accounts = defaultAccounts, ...props }: UseAccountListProps) => {
  const items = getAccountItems({ accounts });
  const groups = props?.groups || accountListGroups;

  /* editable settings */

  const defaultAccount = items[0];
  const defaultSettings: AccountSettingsById = {};

  items?.map((item) => {
    const { id, smsAlerts, emailAlerts, email, phone } = item;

    defaultSettings[id] = {
      smsAlerts,
      emailAlerts,
      email: email || defaultAccount?.email,
      phone: phone || defaultAccount?.phone,
    };
  });

  const [settingsById, setSettingsById] = useState(defaultSettings || {});

  const onSettingsChange = (id: string, settings = {}) => {
    setSettingsById((prevState) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          ...settings,
        },
      };
    });
  };

  /** toggle favourites */

  const defaultFavouriteIds = items?.filter((item) => item.favourite).map((item) => item.id) as string[];

  const [favouriteIds, setFavouriteIds] = useState<string[]>(defaultFavouriteIds);

  const onToggleFavourite = (id: string) => {
    setFavouriteIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((favId) => favId !== id);
      }
      return [...prevState, id];
    });
  };

  /** expand/collapse */

  const [expandedId, setExpandedId] = useState<string>('');

  const onToggle = (id: string) => {
    console.log('onToggle', id);
    setExpandedId((prevState) => {
      if (prevState === id) {
        return '';
      }
      return id;
    });
  };

  /** setup items */

  const defaultItems = items.map((item) => {
    const settings = settingsById[item.id] || {};

    return {
      ...item,
      ...settings,
      as: 'button',
      ariaLabel: item.name,
      favourite: favouriteIds.includes(item.id),
    };
  });

  const { active, results, ...toolbar } = useAccountListToolbar(defaultItems as AccountDataProps[]);

  // use results or default items
  const listItems = active ? results.items : defaultItems;
  const listGroups = active ? results.groups : groups;

  // grouped results
  return {
    toolbar,
    items: listItems,
    groups: listGroups,
    expandedId,
    onToggle,
    onToggleFavourite,
    onSettingsChange,
  };
};
