import { HandshakeIcon, HeartFillIcon, HeartIcon, InboxIcon, PlusIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react';
import { AccountList, type AccountListItemProps, type AccountListProps } from '..';
import { accountList, useAccountList } from '../../../examples';

const meta = {
  title: 'Account/AccountList',
  component: AccountList,
  tags: ['autodocs'],
  parameters: {},
  args: accountList as AccountListProps,
} satisfies Meta<typeof AccountList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Controlled = (args: AccountListProps) => {
  const accountListProps = useAccountList(args);
  return <AccountList {...(accountListProps as AccountListProps)} />;
};

export const ContextMenu = (args: AccountListProps) => {
  const accountListProps = useAccountList(args);

  const getContextMenu = ({
    name,
    id,
    isCurrentEndUser,
    favourite = false,
    onToggleFavourite,
  }: AccountListItemProps) => {
    return {
      id: id + '-menu',
      items: [
        {
          id: 'inbox',
          groupId: 'apps',
          icon: InboxIcon,
          title: 'Gå til Innboks',
        },
        {
          id: 'admin',
          groupId: 'apps',
          icon: HandshakeIcon,
          title: 'Tilgangsstyring',
        },
        {
          id: 'fav',
          groupId: 'context',
          icon: favourite ? HeartFillIcon : HeartIcon,
          title: favourite ? 'Fjern fra favoritter' : 'Legg til favoritter',
          onClick: onToggleFavourite,
        },
        {
          id: 'new-group',
          groupId: 'new',
          icon: PlusIcon,
          title: 'Ny gruppe',
          onClick: () => alert('Ny gruppe'),
        },
      ],
      groups: {
        apps: {
          title: name,
        },
        context: {
          hidden: isCurrentEndUser,
        },
        group: {
          hidden: isCurrentEndUser,
        },
        new: {
          hidden: isCurrentEndUser,
        },
      },
    };
  };

  const items = accountListProps.items?.map((item) => {
    return {
      ...item,
      contextMenu: getContextMenu(item as AccountListItemProps),
    };
  });
  return <AccountList {...(accountListProps as AccountListProps)} items={items as AccountListProps['items']} />;
};
