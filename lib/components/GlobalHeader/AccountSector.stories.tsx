import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { getAuthorizedPartiesData } from '../../../examples';
import { useAccountSelector } from '../../hooks/useAccountSelector';
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
    externalFullScreen: undefined,
    loading: false,
  },
  argTypes: {
    accountMenu: { control: 'object' },
    externalFullScreen: { control: 'boolean' },
    loading: { control: 'boolean' },
  },
} satisfies Meta<typeof AccountSelector>;

export default meta;

export const WithAccounts = () => {
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const authorizedParties = getAuthorizedPartiesData();
  const selfAccountUuid = '167536b5-f8ed-4c5a-8f48-0279507e53ae';
  const onToggleFavorite = (uuid: string) => {
    setFavoriteUuids((prev) => (prev.includes(uuid) ? prev.filter((id) => id !== uuid) : [...prev, uuid]));
  };
  const accountSelector = useAccountSelector({
    partyListDTO: authorizedParties,
    favoriteAccountUuids: favoriteUuids,
    onToggleFavorite: onToggleFavorite,
    selfAccountUuid,
  });

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
