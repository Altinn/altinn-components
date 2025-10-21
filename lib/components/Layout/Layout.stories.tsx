import type { Meta } from '@storybook/react-vite';
import { Flex, RootProvider } from '..';
import type { LayoutProps } from '../';
import { Layout, List, type ListItemProps, PageBase } from '../';
import { footer, header, inboxMenu, skipLink, useAccountMenu, useGlobalMenu, useLayout } from '../../../examples';

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
  },
  argTypes: {
    useGlobalHeader: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;

export const Preview = (args: LayoutProps) => {
  const layout = useLayout(args);
  const accountMenu = useAccountMenu({ accountId: 'diaspora' });
  const globalMenu = useGlobalMenu({ accountId: 'diaspora' });
  return (
    <RootProvider>
      <Layout
        {...args}
        {...layout}
        header={{
          ...layout.header,
          accountMenu: accountMenu,
          globalMenu: globalMenu,
        }}
      >
        {args.children}
      </Layout>
    </RootProvider>
  );
};

export const StickySidebar = (args: LayoutProps) => {
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

export const HiddenSidebar = (args: LayoutProps) => {
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

export const Fullscreen = (args: LayoutProps) => {
  const layout = useLayout(args);

  return (
    <RootProvider>
      <Layout {...args} {...layout} theme="default" sidebar={undefined}>
        {args.children}
      </Layout>
    </RootProvider>
  );
};
