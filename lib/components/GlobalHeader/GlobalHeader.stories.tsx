import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { getAuthorizedPartiesData, header, mobileMenu, useGlobalMenu, useHeader } from '../../../examples';
import { useAccountSelector } from '../../hooks';
import { RootProvider } from '../RootProvider';
import { GlobalHeader, type GlobalHeaderProps } from './';

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

export const Login = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: null });
  return (
    <RootProvider>
      <GlobalHeader
        {...(header as GlobalHeaderProps)}
        accountSelector={{ accountMenu: { items: [], currentAccount: undefined } }}
        globalSearch={{ onSearch: () => {} }}
      />
    </RootProvider>
  );
};

export const CurrentAccount = (args: GlobalHeaderProps) => {
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
      const newAccount = authorizedParties.find(
        (party) => party.partyUuid === accountId || party.subunits?.find((sub) => sub.partyUuid === accountId),
      );
      if (newAccount && newAccount.partyUuid !== accountId) {
        // If a subunit was selected, set currentAccountUuid to that subunit's UUID
        const subunit = newAccount.subunits?.find((sub) => sub.partyUuid === accountId);
        setCurrentAccountUuid(subunit?.partyUuid);
        return;
      }
      setCurrentAccountUuid(newAccount?.partyUuid);
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

export const CompanyAccount = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const SubcompanyAccount = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora-2' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} />
    </RootProvider>
  );
};

export const MobileMenu = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} mobileMenu={mobileMenu} />
    </RootProvider>
  );
};

export const WithCustomBadge = (args: GlobalHeaderProps) => {
  const header = useHeader({ ...args, accountId: 'diaspora' });
  return (
    <RootProvider>
      <GlobalHeader {...(header as GlobalHeaderProps)} badge={{ label: 'Beta', color: 'person' }} />
    </RootProvider>
  );
};
