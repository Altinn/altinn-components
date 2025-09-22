import { useState } from 'react';
import {
  type AccountDataProps,
  type AccountSettingsById,
  defaultAccounts,
  groupAccountsByParent,
  useAccountsToolbar,
} from './';

export type UseAccountsProps = {
  accountId?: string | null;
  accounts?: AccountDataProps[];
  includeGroups?: boolean;
};

export const useAccounts = ({ accountId, accounts = defaultAccounts, includeGroups = true }: UseAccountsProps) => {
  /** toggle favourites */

  const defaultFavouriteIds = accounts?.filter((item) => item.favourite).map((item) => item.id) as string[];

  const [favouriteIds, setFavouriteIds] = useState<string[]>(defaultFavouriteIds);

  const onToggleFavourite = (id: string) => {
    setFavouriteIds((prevState) => {
      if (prevState.includes(id)) {
        return prevState.filter((favId) => favId !== id);
      }
      return [...prevState, id];
    });
  };
  /* editable settings */

  const defaultSettingsAccount = accounts[0];
  const defaultSettings: AccountSettingsById = {};

  /** All people + all companies */

  const allPeople = accounts?.filter((item) => item.type === 'person');
  const allPeopleItem = {
    id: 'all-people',
    type: 'group',
    name: 'Alle personer',
    accountIds: allPeople?.map((item) => {
      return item.id;
    }),
  } as AccountDataProps;

  const allCompanies = accounts?.filter((item) => item.type === 'company');
  const allCompanyÌtem = {
    id: 'all-companies',
    type: 'group',
    name: 'Alle virksomheter',
    accountIds: allCompanies?.map((item) => {
      return item.id;
    }),
  } as AccountDataProps;

  accounts?.map((item) => {
    const { id, smsAlerts, emailAlerts, email, phone } = item;

    defaultSettings[id] = {
      smsAlerts,
      emailAlerts,
      email: email || defaultSettingsAccount?.email,
      phone: phone || defaultSettingsAccount?.phone,
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

  /** filter items */

  const allAccouns = [...accounts, allCompanyÌtem, allPeopleItem];

  const filteredAccounts = allAccouns?.filter((item) => {
    if (!includeGroups && item.type === 'group') {
      return false;
    }

    return true;
  });

  /** setup items */

  const defaultItems = filteredAccounts.map((item) => {
    const settings = settingsById[item.id] || {};

    return {
      ...item,
      ...settings,
      favourite: favouriteIds.includes(item.id),
    };
  });

  /* group items */

  const { groups, items } = groupAccountsByParent(defaultItems);

  /* current account */

  const defaultAccount =
    items?.find((item) => item.id === accountId) || items?.find((item) => item.type === accountId) || items?.[0];

  const [currentAccount, setCurrentAccount] = useState<AccountDataProps | undefined>(
    defaultAccount as AccountDataProps | undefined,
  );

  const onSelectAccount = (id: string) => {
    const account = items?.find((item) => item.id === id);
    setCurrentAccount({
      id: account?.id,
      name: account?.name,
      type: account?.type,
      icon: account?.icon,
      description: account?.description,
    } as AccountDataProps);
  };

  const [expandedId, setExpandedId] = useState<string>('');

  const onToggle = (id: string) => {
    setExpandedId((prevState) => {
      if (prevState === id) {
        return '';
      }
      return id;
    });
  };

  const toolbar = useAccountsToolbar(items as AccountDataProps[]);

  return {
    toolbar,
    groups,
    items,
    defaultAccount,
    currentAccount,
    onSelectAccount,
    onToggleFavourite,
    onSettingsChange,
    expandedId,
    onToggle,
  };
};
