import type { Meta } from '@storybook/react';
import { header, useAccountMenu, useInboxSearch } from '../../../examples';
import { Header, type HeaderProps } from './Header';

const meta = {
  title: 'Layout/Header',
  component: Header,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {
    ...header,
    search: {
      name: 'inbox-search',
      placeholder: 'Søk i Altinn',
    },
  },
} satisfies Meta<typeof Header>;

export default meta;

export const Default = (args: HeaderProps) => {
  const search = useInboxSearch(args.search!);
  const menu = useAccountMenu(args.menu!);

  return <Header {...args} currentAccount={menu.currentAccount} menu={menu} search={search!} />;
};
