import type { Meta } from '@storybook/react';
import { Flex } from '..';
import type { GlobalMenuProps, LayoutProps, SearchbarProps } from '../';
import { footer, header, inboxMenu, useAccountMenu, useInboxSearch } from '../../../examples';

import { Layout } from './Layout';

const meta = {
  title: 'Layout/Layout',
  component: Layout,
  //  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    header,
    footer,
    sidebar: {
      menu: inboxMenu,
    },
    children: (
      <Flex align="center" justify="center" style={{ border: '1px dashed', width: '100%', height: '100%' }}>
        Content
      </Flex>
    ),
  },
} satisfies Meta<typeof Layout>;

export default meta;

export const Preview = (args: LayoutProps) => {
  const search: SearchbarProps = useInboxSearch(args.header!.search!);
  const menu: GlobalMenuProps = useAccountMenu(args.header!.menu!);
  return (
    <Layout
      {...args}
      header={{
        ...args.header,
        currentAccount: menu.currentAccount,
        menu: {
          ...menu,
          menuItemsVirtual: {
            isVirtualized: true,
          },
        },
        search: search,
      }}
    />
  );
};

export const HiddenSidebar = (args: LayoutProps) => {
  const search: SearchbarProps = useInboxSearch(args.header!.search!);
  const menu: GlobalMenuProps = useAccountMenu(args.header!.menu!);

  return (
    <Layout
      {...args}
      sidebar={{
        ...args.sidebar,
        hidden: true,
      }}
      header={{
        ...args.header,
        currentAccount: menu.currentAccount,
        menu: menu,
        search: search,
      }}
    />
  );
};

export const Fullscreen = (args: LayoutProps) => {
  const search: SearchbarProps = useInboxSearch(args.header!.search!);
  const menu: GlobalMenuProps = useAccountMenu(args.header!.menu!);

  return (
    <Layout
      {...args}
      theme="default"
      sidebar={undefined}
      header={{
        ...args.header,
        currentAccount: menu.currentAccount,
        menu: menu,
        search: search,
      }}
    />
  );
};
