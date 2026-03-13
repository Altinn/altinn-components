import type { Meta } from '@storybook/react-vite';
import { useGlobalHeader } from '../../../examples';
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
