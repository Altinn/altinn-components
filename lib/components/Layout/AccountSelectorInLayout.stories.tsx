import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { Flex, RootProvider } from '..';
import type { LayoutProps } from '../';
import { Layout } from '../';
import {
  footer,
  getAuthorizedPartiesData,
  header,
  inboxMenu,
  skipLink,
  useGlobalMenu,
  useLayout,
} from '../../../examples';
import { type AuthorizedParty, useAccountSelector } from '../../hooks';

// Add custom story args interface for easier testing
interface LayoutStoryArgs extends LayoutProps {
  forceOpenFullScreen?: boolean | undefined;
}

/**
 * AccountSelector demos rendered inside a full Layout, so you can see how the
 * selector behaves alongside the header, sidebar and global menu. The same
 * cases are available as standalone-component stories under Layout/AccountSelector.
 */
const meta = {
  title: 'Layout/AccountSelector/In Layout',
  component: Layout,
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    theme: 'subtle',
    skipLink,
    header,
    footer,
    sidebar: {
      menu: inboxMenu,
    },
    children: (
      <Flex
        align="center"
        justify="center"
        style={{
          border: '1px dashed',
          width: '100%',
          height: '100%',
          gap: 5,
        }}
      >
        Content
        <a href="https://altinn.no">with a focusable item</a>
      </Flex>
    ),
    color: 'company',
    forceOpenFullScreen: undefined,
  },
  argTypes: {
    color: { control: 'select', options: ['company', 'neutral', 'person'] },
    forceOpenFullScreen: {
      control: 'select',
      options: [true, false, undefined],
    },
  },
} satisfies Meta<LayoutStoryArgs>;

export default meta;

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

/** Shared demo wiring for the account-count stories below. */
const AccountSelectorDemo = ({ args, parties }: { args: LayoutStoryArgs; parties: AuthorizedParty[] }) => {
  const layout = useLayout(args);
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });

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
      <Layout
        {...args}
        {...layout}
        header={{
          ...layout.header,
          accountSelector: accountSelector,
          globalMenu: globalMenu,
        }}
      >
        {args.children}
      </Layout>
    </RootProvider>
  );
};

export const UsingUseAccountHook = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false); // Get actual value from user profile
  const [currentAccountUuid, setCurrentAccountUuid] = useState<string | undefined>(SELF_UUID);
  const authorizedParties = getAuthorizedPartiesData(); // Fetch your authorized parties data from external source
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
      <Layout
        {...args}
        {...layout}
        header={{
          ...layout.header,
          accountSelector: accountSelector,
          globalMenu: globalMenu,
        }}
      >
        {args.children}
      </Layout>
    </RootProvider>
  );
};

// 3 accounts, none deleted: no search field, no "show deleted" toggle.
export const ThreeAccounts = (args: LayoutStoryArgs) => <AccountSelectorDemo args={args} parties={buildParties(3)} />;

// 4 accounts, one deleted: no search field (<= 5), but the toggle is shown.
export const FourAccountsOneDeleted = (args: LayoutStoryArgs) => (
  <AccountSelectorDemo args={args} parties={buildParties(4, 1)} />
);

// 6 accounts, three deleted: search field shown (> 5) and the toggle is shown.
export const SixAccountsThreeDeleted = (args: LayoutStoryArgs) => (
  <AccountSelectorDemo args={args} parties={buildParties(6, 3)} />
);

// 10 accounts, none deleted: search field shown (> 5), no toggle.
export const TenAccountsNoneDeleted = (args: LayoutStoryArgs) => (
  <AccountSelectorDemo args={args} parties={buildParties(10)} />
);
