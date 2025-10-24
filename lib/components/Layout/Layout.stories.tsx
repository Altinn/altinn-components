import type { Meta } from '@storybook/react-vite';
import { Flex, RootProvider } from '..';
import type { LayoutProps } from '../';
import { Layout, List, type ListItemProps, PageBase } from '../';
import { footer, header, inboxMenu, skipLink, useAccountMenu, useGlobalMenu, useLayout } from '../../../examples';
import type { AccountSelectorProps } from '../GlobalHeader/AccountSelector';

// Add custom story args interface for easier testing
interface LayoutStoryArgs extends LayoutProps {
  externalFullScreen?: boolean | undefined;
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
    externalFullScreen: undefined,
  },
  argTypes: {
    useGlobalHeader: {
      control: {
        type: 'boolean',
      },
    },
    color: { control: 'select', options: ['company', 'neutral', 'person'] },
    externalFullScreen: {
      control: 'select',
      options: [true, false, undefined],
    },
  },
} satisfies Meta<LayoutStoryArgs>;

export default meta;

export const Preview = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = { ...useAccountMenu({ accountId: 'diaspora' }), isVirtualized: true };
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  const onSearch = (queryString: string) => alert('Search entered: ' + queryString);
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenu,
    externalFullScreen: args.externalFullScreen,
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
          globalSearch: { onEnter: onSearch },
        }}
      >
        {args.children}
      </Layout>
    </RootProvider>
  );
};

export const LogInView = (args: LayoutStoryArgs) => {
  const layout = useLayout(args);
  const accountMenu = { ...useAccountMenu({ accountId: 'diaspora' }), isVirtualized: true };
  const accountMenuNotLoggedIn = { ...accountMenu, currentAccount: undefined, items: [] };
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  const onSearch = (queryString: string) => alert('Search entered: ' + queryString);
  const accountSelector: AccountSelectorProps = {
    accountMenu: accountMenuNotLoggedIn,
    externalFullScreen: args.externalFullScreen,
  };
  const onLoginClick = () => {
    alert('Login clicked');
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
          globalSearch: { onEnter: onSearch },
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
