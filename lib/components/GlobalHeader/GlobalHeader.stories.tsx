import type { Meta } from '@storybook/react-vite';
import { useEffect, useState } from 'react';
import {
  getAuthorizedPartiesData,
  header,
  useGlobalHeader,
  useGlobalMenu,
} from '../../../examples';
import { useAccountSelector } from '../../hooks';
import { RootProvider } from '../RootProvider';
import { GlobalHeader, type GlobalHeaderProps } from './';
import type { AccountSelectorProps } from './AccountSelector';

const meta = {
  title: 'Layout/GlobalHeader',
  component: GlobalHeader,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...header,
  },
} satisfies Meta<typeof GlobalHeader>;

export default meta;

export const Login = () => {
  const header = useGlobalHeader({ state: 'loggedOut' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const LoggedIn = () => {
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  const onSearch = (queryString: string) => alert('Search entered: ' + queryString);

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(
    '167536b5-f8ed-4c5a-8f48-0279507e53ae',
  );
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
  const selfAccountUuid = '167536b5-f8ed-4c5a-8f48-0279507e53ae';
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
  });
  return (
    <RootProvider>
      <GlobalHeader globalMenu={globalMenu} globalSearch={{ onSearch }} accountSelector={accountSelector} />
    </RootProvider>
  );
};

export const CompanyAccount = () => {
  const header = useGlobalHeader({ currentAccountIndex: 5 });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const ForcedFullScreenAccountSelection = () => {
  const { globalMenu, globalSearch, accountSelector, onLoginClick, locale } = useGlobalHeader({});
  return (
    <RootProvider>
      <GlobalHeader
        globalMenu={globalMenu}
        globalSearch={globalSearch}
        accountSelector={
          {
            ...accountSelector,
            forceOpenFullScreen: true,
            accountMenu: {
              ...accountSelector?.accountMenu,
              currentAccount: undefined,
            },
          } as AccountSelectorProps
        }
        onLoginClick={onLoginClick}
        locale={locale}
      />
    </RootProvider>
  );
};

export const WithCustomBadge = () => {
  const header = useGlobalHeader({});
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} badge={{ label: 'Beta', color: 'person' }} />
    </RootProvider>
  );
};

export const Loading = () => {
  const header = useGlobalHeader({ state: 'loading' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const LoadingWithForcedFullScreenAccountSelection = () => {
  const { globalMenu, globalSearch, accountSelector, onLoginClick, locale } = useGlobalHeader({ state: 'loading' });
  return (
    <RootProvider>
      <GlobalHeader
        globalMenu={globalMenu}
        globalSearch={globalSearch}
        accountSelector={
          {
            ...accountSelector,
            forceOpenFullScreen: true,
          } as AccountSelectorProps
        }
        onLoginClick={onLoginClick}
        locale={locale}
      />
    </RootProvider>
  );
};

export const LargeAccountListWithVirtualization = () => {
  const { globalMenu, globalSearch, accountSelector, onLoginClick, locale } = useGlobalHeader({
    useLargeAccountList: true,
  });
  return (
    <RootProvider>
      <GlobalHeader
        globalMenu={globalMenu}
        globalSearch={globalSearch}
        accountSelector={accountSelector}
        onLoginClick={onLoginClick}
        locale={locale}
      />
    </RootProvider>
  );
};
