import type { Meta } from '@storybook/react-vite';
import { Flex } from '..';
import type { LayoutProps } from '../';
import { footer, header, inboxMenu, useLayout } from '../../../examples';

import { Layout } from './Layout';

const meta = {
  title: 'Layout/Layout',
  component: Layout,
  //  tags: ["autodocs"],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    theme: 'subtle',
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
  const layout = useLayout(args);
  return <Layout {...layout}>{args.children}</Layout>;
};

export const HiddenSidebar = (args: LayoutProps) => {
  const layout = useLayout(args);

  return (
    <Layout
      {...layout}
      sidebar={{
        ...args.sidebar,
        hidden: true,
      }}
    >
      {args.children}
    </Layout>
  );
};

export const Fullscreen = (args: LayoutProps) => {
  const layout = useLayout(args);

  return (
    <Layout {...layout} theme="default" sidebar={undefined}>
      {args.children}
    </Layout>
  );
};
