import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import {
  SELF_PARTY_UUID,
  buildAuthorizedParties,
  getAuthorizedPartiesData,
  useAccountSelectorDemo,
  useGlobalHeader,
} from '../../../examples';
import { type AuthorizedParty, useAccountSelector } from '../../hooks';
import { RootProvider } from '../RootProvider';
import { AccountSelector, type AccountSelectorProps } from './AccountSelector';

const meta = {
  title: 'Layout/AccountSelector',
  component: AccountSelector,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    accountMenu: undefined,
    loading: false,
  },
  argTypes: {
    accountMenu: { control: 'object' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof AccountSelector>;

export default meta;

export const WithAccounts = () => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;

  return (
    <RootProvider>
      <AccountSelector {...accountSelector} />
    </RootProvider>
  );
};

export const NoAccounts = (args: AccountSelectorProps) => {
  return (
    <RootProvider>
      <AccountSelector {...args} accountMenu={{ items: [], groups: {}, currentAccount: undefined }} />
    </RootProvider>
  );
};

export const Loading = (args: AccountSelectorProps) => {
  return (
    <RootProvider>
      <AccountSelector {...args} accountMenu={{ items: [], groups: {}, currentAccount: undefined }} loading />
    </RootProvider>
  );
};

/** Drives the standalone AccountSelector via the useAccountSelector hook. The
 * full-Layout equivalents live under Layout/AccountSelector/In Layout. */
const AccountSelectorDemo = ({ parties }: { parties: AuthorizedParty[] }) => {
  const accountSelector = useAccountSelectorDemo(parties);
  return (
    <RootProvider languageCode="nb">
      <AccountSelector {...accountSelector} />
    </RootProvider>
  );
};

export const UsingUseAccountHook = () => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_PARTY_UUID);
  const authorizedParties = getAuthorizedPartiesData();
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: SELF_PARTY_UUID,
    currentAccountUuid: currentAccountUuid,
    onSelectAccount: (accountId: string) => {
      setCurrentAccountUuid(accountId);
    },
    languageCode: 'nb',
    isLoading: false,
    showDeletedUnits: showDeletedAccounts,
    onShowDeletedUnitsChange: (newValue: boolean) => {
      setShowDeletedAccounts(newValue);
    },
  });
  return (
    <RootProvider languageCode="nb">
      <AccountSelector {...accountSelector} />
    </RootProvider>
  );
};

export const ThreeAccounts = () => <AccountSelectorDemo parties={buildAuthorizedParties(3)} />;

export const FourAccountsOneDeleted = () => <AccountSelectorDemo parties={buildAuthorizedParties(4, 1)} />;

export const SixAccountsThreeDeleted = () => <AccountSelectorDemo parties={buildAuthorizedParties(6, 3)} />;

export const TenAccountsNoneDeleted = () => <AccountSelectorDemo parties={buildAuthorizedParties(10)} />;
