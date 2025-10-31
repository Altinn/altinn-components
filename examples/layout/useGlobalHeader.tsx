import { useState } from 'react';
import { localeSwitcher as localExample, useGlobalHeaderMenu, useLocale } from '../';
import { getAuthorizedPartiesData } from '../';
import type { GlobalHeaderProps } from '../../lib/components/GlobalHeader';
import { useAccountSelector } from '../../lib/hooks';

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

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(
    currentAccountIndex ? authorizedParties[currentAccountIndex].partyUuid : '167536b5-f8ed-4c5a-8f48-0279507e53ae',
  );
  const selfAccountUuid = '167536b5-f8ed-4c5a-8f48-0279507e53ae'; // Get the user's own account UUID from token or other source

  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };

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
    accountSelector: accountSelector,
    onLoginClick: onLoginClick,
    locale: localeSwitcher,
  };
};
