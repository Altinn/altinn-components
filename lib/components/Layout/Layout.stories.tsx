import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import { Badge, Flex, RootProvider } from '..';
import type { LayoutProps } from '../';
import { DialogList, Heading, Layout, List, type ListItemProps, PageBase, Toolbar } from '../';
import { inboxSection } from '../../../examples';
import {
  footer,
  getAuthorizedPartiesData,
  header,
  inboxMenu,
  skipLink,
  useAccountMenu,
  useGlobalMenu,
  useLayout,
} from '../../../examples';
import { useAccountSelector } from '../../hooks';
import type { AccountSelectorProps } from '../GlobalHeader/AccountSelector';

// Add custom story args interface for easier testing
interface LayoutStoryArgs extends LayoutProps {
  forceOpenFullScreen?: boolean | undefined;
}

const meta = {
  title: 'Layout/Layout',
  component: Layout,
  //  tags: ["autodocs"],
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
    useGlobalHeader: true,
    color: 'company',
    forceOpenFullScreen: undefined,
  },
  argTypes: {
    useGlobalHeader: {
      control: {
        type: 'boolean',
      },
    },
    color: { control: 'select', options: ['company', 'neutral', 'person'] },
    forceOpenFullScreen: {
      control: 'select',
      options: [true, false, undefined],
    },
  },
} satisfies Meta<LayoutStoryArgs>;

export default meta;

export const Preview = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = {
    ...useAccountMenu({ accountId: 'diaspora' }),
    virtualized: true,
  };
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  const onSearch = (queryString: string) => alert('Search entered: ' + queryString);
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu,
    forceOpenFullScreen: args.forceOpenFullScreen,
  };
  return (
    <RootProvider>
      <Layout
        {...args}
        {...layout}
        header={{
          ...layout.header,
          accountSelector: accountSelector,
          globalMenu: globalMenu,
          globalSearch: { onSearch },
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
  const onSearch = (queryString: string) => alert('Search entered: ' + queryString);

  // Use the useAccountSelector hook to get account menu and loading state
  const [favoriteUuids, setFavoriteUuids] = useState<string[]>([]);
  const [showDeletedAccounts, setShowDeletedAccounts] = useState(false); // Get actual value from user profile
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
          globalSearch: { onSearch },
        }}
      >
        {args.children}
      </Layout>
    </RootProvider>
  );
};

export const LogInView = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = {
    ...useAccountMenu({ accountId: 'diaspora' }),
    virtualized: true,
  };
  const accountMenuNotLoggedIn = {
    ...accountMenu,
    currentAccount: undefined,
    items: [],
  };
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  const onSearch = (queryString: string) => alert('Search entered: ' + queryString);
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenuNotLoggedIn,
    forceOpenFullScreen: args.forceOpenFullScreen,
  };
  const onLoginClick = () => {
    alert('Login clicked');
  };

  console.info(globalMenu);
  return (
    <RootProvider>
      <Layout
        {...args}
        {...layout}
        header={{
          ...layout.header,
          accountSelector: accountSelector,
          globalMenu: globalMenu,
          globalSearch: { onSearch },
          onLoginClick: onLoginClick,
        }}
      >
        {args.children}
      </Layout>
    </RootProvider>
  );
};

export const WithEnglishLanguage = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = useAccountMenu({ accountId: 'diaspora' });
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu,
  };
  return (
    <RootProvider languageCode="en">
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

export const StickySidebar = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);

  return (
    <RootProvider>
      <Layout
        {...args}
        {...layout}
        sidebar={{
          ...args.sidebar,
          sticky: true,
        }}
      >
        <PageBase>
          <List
            items={
              Array.from({ length: 30 }, (_, i) => {
                const avatar = {
                  type: 'person',
                  name: i + 'Item ' + i * i,
                };

                return {
                  id: 'i' + i,
                  groupId: i > 10 ? '2' : '1',
                  icon: avatar,
                  title: `Item ${i + 1}`,
                };
              }) as ListItemProps[]
            }
          />
        </PageBase>
      </Layout>
    </RootProvider>
  );
};

export const HiddenSidebar = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);

  return (
    <RootProvider>
      <Layout
        {...args}
        {...layout}
        sidebar={{
          ...args.sidebar,
          hidden: true,
        }}
      >
        {args.children}
      </Layout>
    </RootProvider>
  );
};

export const Fullscreen = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);

  return (
    <RootProvider>
      <Layout {...args} {...layout} theme="default" sidebar={undefined}>
        {args.children}
      </Layout>
    </RootProvider>
  );
};

export const Profile = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = useAccountMenu({ accountId: 'diaspora' });
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu,
  };
  return (
    <RootProvider>
      <Layout
        {...args}
        {...layout}
        header={{
          ...layout.header,
          accountSelector: accountSelector,
          globalMenu: globalMenu,
        }}
        color="person"
      >
        {args.children}
      </Layout>
    </RootProvider>
  );
};

export const SidebarReference = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = useAccountMenu({ accountId: 'diaspora' });
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu,
  };
  return (
    <RootProvider>
      <Layout
        {...args}
        {...layout}
        header={{
          ...layout.header,
          accountSelector: accountSelector,
          globalMenu: globalMenu,
        }}
        sidebar={{
          ...args.sidebar,
          footer: <Badge label="Beta" variant="base" color="neutral" size="sm" />,
        }}
      >
        {args.children}
      </Layout>
    </RootProvider>
  );
};

export const InboxLayout = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = useAccountMenu({ accountId: 'diaspora' });
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu,
  };

  const sidebar = {
    ...layout.sidebar,
    sticky: true,
  };

  const header = {
    ...layout.header,
    accountSelector: accountSelector,
    globalMenu: globalMenu,
  };

  const breadcrumbs = [
    {
      label: 'Innboks',
      href: '#',
    },
    {
      label: 'Arkiv',
      href: '#',
    },
  ];

  const toolbar = {
    accountMenu: {
      label: accountMenu?.currentAccount?.title,
      items: accountMenu?.items,
      searchable: true,
    },
    search: {
      placeholder: 'Søk',
      collapsible: true,
    },
  };

  return (
    <RootProvider>
      <Layout {...args} {...layout} sidebar={sidebar} header={header} breadcrumbs={breadcrumbs}>
        <PageBase>
          <Heading size="xl">Page title</Heading>
          <Toolbar {...toolbar} />
          <DialogList {...inboxSection} />
        </PageBase>
      </Layout>
    </RootProvider>
  );
};
