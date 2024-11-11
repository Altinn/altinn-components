'use client';
import { Toolbar } from '../../components';
import { useInbox } from './';

export function InboxToolbar({ items }) {
  const { accounts = [], accountId, onAccountId } = useInbox();

  const senderOptions = {};

  items?.map((item) => {
    const { sender } = item;

    if (!senderOptions[sender?.name]) {
      senderOptions[sender?.name] = {
        label: sender.name,
        value: sender.name,
        count: 0,
      };
    }

    senderOptions[sender?.name].count++;
  });

  const currentAccount = accounts?.find((item) => item.id === accountId);

  const accountMenu = {
    label: currentAccount?.name,
    value: currentAccount?.id,
    items: accounts.map((item) => {
      return {
        group: item.type,
        title: item?.name,
        avatar: item,
        selected: item.selected,
        onClick: () => onAccountId(item.id),
      };
    }),
  };

  const filters =
    items &&
    [
      {
        name: 'status',
        label: 'Velg status',
        optionType: 'checkbox',
        options: [
          {
            groupId: '1',
            value: 'draft',
            label: 'Utkast',
          },
          {
            groupId: '1',
            value: 'sent',
            label: 'Sendt',
          },
          {
            groupId: '2',
            value: 'in-progress',
            label: 'Under arbeid',
          },
          {
            groupId: '2',
            value: 'requires-attention',
            label: 'Krever handling',
          },
          {
            groupId: '2',
            value: 'completed',
            label: 'Avsluttet',
          },
        ],
      },
      {
        name: 'sender',
        label: 'Velg avsender',
        optionType: 'checkbox',
        options: Object.values(senderOptions)?.map((item) => {
          return {
            ...item,
            badge: { label: item?.count.toString() || '2' },
          };
        }),
      },
    ].map((item) => {
      return {
        ...item,
        removable: true,
      };
    });

  return <Toolbar menu={accountMenu} filters={filters} />;
}