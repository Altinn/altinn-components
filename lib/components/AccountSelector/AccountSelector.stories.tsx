import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { getAuthorizedPartiesData, useGlobalHeader } from '../../../examples';
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
    forceOpenFullScreen: undefined,
    loading: false,
  },
  argTypes: {
    accountMenu: { control: 'object' },
    forceOpenFullScreen: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof AccountSelector>;

export default meta;

export const WithAccounts = (args: AccountSelectorProps) => {
  const accountSelector = useGlobalHeader({}).accountSelector as AccountSelectorProps;

  return (
    <RootProvider>
      <AccountSelector {...accountSelector} forceOpenFullScreen={args.forceOpenFullScreen} />
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

const SELF_UUID = '167536b5-f8ed-4c5a-8f48-0279507e53ae';

const selfParty: AuthorizedParty = {
  partyUuid: SELF_UUID,
  name: 'SITRONGUL MEDALJONG',
  partyId: '0',
  type: 'Person',
  dateOfBirth: '1985-05-17',
  isDeleted: false,
  onlyHierarchyElementWithNoAccess: false,
  authorizedResources: [],
  authorizedRoles: [],
};

const makeOrgParty = (index: number, isDeleted: boolean): AuthorizedParty => ({
  partyUuid: `synthetic-party-${index}`,
  name: `Aktør AS ${index}`,
  organizationNumber: `${912345670 + index}`,
  partyId: `${index}`,
  type: 'Organization',
  isDeleted,
  onlyHierarchyElementWithNoAccess: false,
  authorizedResources: [],
  authorizedRoles: [],
});

/** Builds a party list with `total` accounts (including self), the first
 * `deletedCount` of the non-self accounts being deleted. */
const buildParties = (total: number, deletedCount = 0): AuthorizedParty[] => {
  const others = Array.from({ length: total - 1 }, (_, i) => makeOrgParty(i + 1, i < deletedCount));
  return [selfParty, ...others];
};

/** Shared wiring that drives the standalone AccountSelector via the
 * useAccountSelector hook. The full-Layout equivalents live under
 * Layout/AccountSelector/In Layout. */
const AccountSelectorDemo = ({ args, parties }: { args: AccountSelectorProps; parties: AuthorizedParty[] }) => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(true);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_UUID);
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  const accountSelector = useAccountSelector({
    partyListDTO: parties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: SELF_UUID,
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
      <AccountSelector {...accountSelector} forceOpenFullScreen={args.forceOpenFullScreen} />
    </RootProvider>
  );
};

export const UsingUseAccountHook = (args: AccountSelectorProps) => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false);
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_UUID);
  const authorizedParties = getAuthorizedPartiesData();
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid: SELF_UUID,
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
      <AccountSelector {...accountSelector} forceOpenFullScreen={args.forceOpenFullScreen} />
    </RootProvider>
  );
};

export const ThreeAccounts = (args: AccountSelectorProps) => (
  <AccountSelectorDemo args={args} parties={buildParties(3)} />
);

export const FourAccountsOneDeleted = (args: AccountSelectorProps) => (
  <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />
);

export const SixAccountsThreeDeleted = (args: AccountSelectorProps) => (
  <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />
);

export const TenAccountsNoneDeleted = (args: AccountSelectorProps) => (
  <AccountSelectorDemo args={args} parties={buildParties(10)} />
);
