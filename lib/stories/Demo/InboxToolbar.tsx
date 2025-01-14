'use client';
import { Toolbar, Button } from '../../components';
import { useAppContext } from './';

interface InboxToolbarProps {
  items?: any[];
}

interface SenderOption {
  label: string;
  value: string;
  count: number;
}

export function InboxToolbar({ items = [] }: InboxToolbarProps) {
  const { accountMenu } = useAppContext();

  const senderOptions: { [key: string]: SenderOption } = {};

  items.map((item) => {
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

  return <Toolbar accountMenu={accountMenu} filters={filters}><Button size="sm" variant="text" icon="bookmark">Lagre søk</Button></Toolbar>;
}