import { useState } from 'react';
import { localeSwitcher as localExample, useGlobalHeaderMenu, useLocale } from '../';
import { getAuthorizedPartiesData } from '../';
import type { GlobalHeaderProps } from '../../lib';
import { useAccountSelector } from '../../lib';

export const useGlobalHeader = ({
  state = 'loggedIn',
  currentAccountIndex,
  languageCode = 'nb',
}: {
  state?: 'loggedIn' | 'loggedOut' | 'loading';
  currentAccountIndex?: number;
  languageCode?: string;
}): GlobalHeaderProps => {
  const globalMenu = useGlobalHeaderMenu({});
  const localeSwitcher = useLocale({ ...localExample, locale: languageCode });
  const onSearch = (queryString: string) => alert('Search entered: ' + queryString);
  const onLoginClick = () => {
    alert('Login clicked');
  };

  // Fetch data from different sources or APIs as needed
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(
    currentAccountIndex ? authorizedParties[currentAccountIndex].partyUuid : '167536b5-f8ed-4c5a-8f48-0279507e53ae',
  );
  const selfAccountUuid = '167536b5-f8ed-4c5a-8f48-0279507e53ae'; // Get the user's own account UUID from token or other source
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false); // Get actual value from user profile

  // Handler for toggling show deleted accounts
  const onToggleShowDeletedAccounts = (newValue: boolean) => {
    setShowDeletedAccounts(newValue);
  };

  // Handler for toggling favorite accounts
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };

  // Use the useAccountSelector hook to get account menu and loading state
  const accountSelector = useAccountSelector({
    partyListDTO: state === 'loggedIn' ? authorizedParties : [],
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: state === 'loggedIn' ? selfAccountUuid : undefined,
    currentAccountUuid: state === 'loggedIn' ? currentAccountUuid : undefined,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: languageCode,
    isLoading: state === 'loading',
  });

  return {
    globalMenu,
    globalSearch: { onSearch },
    accountSelector: {
      ...accountSelector,
      showDeletedUnits: showDeletedAccounts,
      onShowDeletedUnitsChange: onToggleShowDeletedAccounts,
    },
    onLoginClick: onLoginClick,
    locale: localeSwitcher,
  };
};
