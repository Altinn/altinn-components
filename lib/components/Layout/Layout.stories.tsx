import type { Meta } from '@storybook/react';
import type { GlobalMenuProps, LayoutProps, SearchbarProps } from '../';
import { footer, header, inboxMenu, useAccountMenu, useInboxSearch } from '../../examples';
import { Layout } from './Layout';

const meta = {
  title: 'Layout/Layout',
  component: Layout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    theme: 'person',
    header,
    footer,
    sidebar: {
      menu: inboxMenu,
    },
    children: <p>Content (should be hidden on mobile when menu is open).</p>,
  },
} satisfies Meta<typeof Layout>;

export default meta;

export const Default = (args: LayoutProps) => {
  const search: SearchbarProps = useInboxSearch(args.header!.search!);
  const menu: GlobalMenuProps = useAccountMenu(args.header!.menu!);

  return (
    <Layout
      {...args}
      header={{
        ...args.header,
        currentAccount: menu.currentAccount,
        menu: menu,
        search: search,
      }}
    />
  );
};
