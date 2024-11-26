import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ActionFooter, ActionHeader, ActionMenu, DialogListItem, ListBase, Snackbar } from '../';
import type { FooterProps, HeaderProps, MenuProps } from '../';
import { Layout } from './Layout';

const header: HeaderProps = {
  search: {
    name: 'search',
    placeholder: 'Søk i Altinn',
  },
  currentAccount: {
    id: 'party:aurora',
    type: 'person',
    name: 'Aurora Mikalsen',
  },
  menu: {
    accounts: [
      {
        id: 'party:aurora',
        type: 'person',
        name: 'Aurora Mikalsen',
      },
    ],
  },
};

const footer: FooterProps = {
  address: 'Postboks 1382 Vika, 0114 Oslo.',
  address2: 'Org.nr. 991 825 827',
  menu: {
    items: [
      {
        id: '1',
        href: '#',
        title: 'Om Altinn',
      },
      {
        id: '2',
        href: '#',
        title: 'Driftsmeldinger',
      },
      {
        id: '3',
        href: '#',
        title: 'Personvern',
      },
      {
        id: '4',
        href: '#',
        title: 'Tilgjengelighet',
      },
    ],
  },
};

const menu: MenuProps = {
  groups: {},
  items: [
    {
      id: '1',
      groupId: 1,
      size: 'lg',
      icon: 'inbox',
      title: 'Innboks',
      color: 'strong',
    },
    {
      id: '2',
      groupId: 2,
      icon: 'doc-pencil',
      title: 'Utkast',
    },
    {
      id: '3',
      group: 2,
      icon: 'file-checkmark',
      selected: true,
      title: 'Sendt',
    },
    {
      id: '4',
      groupId: 3,
      icon: 'bookmark',
      title: 'Lagrede søk',
    },
    {
      id: '5',
      groupId: 4,
      icon: 'archive',
      title: 'Arkivert',
    },
    {
      id: '6',
      groupId: 4,
      disabled: true,
      icon: 'trash',
      title: 'Papirkurv',
    },
  ],
};

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
      menu,
    },
  },
} satisfies Meta<typeof Layout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const ControlledStateSearch = (args) => {
  const [q, setQ] = useState<string>('');
  const onChange = (event) => {
    setQ(event.target.value);
  };

  const scopes = [
    {
      groupId: '1',
      id: 'inbox',
      href: '#',
      label: q
        ? () => {
            return (
              <span>
                <mark>{q}</mark> i innboksen
              </span>
            );
          }
        : 'Alt i innboksen',
    },
    {
      groupId: '1',
      id: 'global',
      href: '#',
      label: q
        ? () => {
            return (
              <span>
                <mark>{q}</mark> i hele Altinn
              </span>
            );
          }
        : 'Alt i hele Altinn',
    },
  ];

  const suggestions = q
    ? [
        {
          groupId: '2',
          href: 'http://www.altinn.no',
          label: 'Skattemelding 2024',
        },
        {
          groupId: '2',
          href: 'http://www.altinn.no',
          label: 'Skattemelding 2025',
        },
      ].filter((item) => item.label.toLowerCase().includes((q ?? '').toLowerCase()))
    : [];

  const autocomplete = {
    groups: {
      2: {
        title: `${suggestions.length} treff i innboksen`,
      },
    },
    items: [...scopes, ...suggestions],
  };

  return (
    <Layout
      {...args}
      header={{
        ...args.header,
        search: {
          ...args.header.search,
          value: q,
          onChange,
          onClear: () => setQ(''),
          autocomplete,
        },
      }}
    />
  );
};

export const InboxBulkMode = (args) => {
  const [snackbars, setSnackbars] = useState([]);

  const [itemsById, setItemsById] = useState({
    1: {
      id: '1',
      title: 'Item 1',
      selected: true,
    },
    2: {
      id: '2',
      title: 'Item 2',
      selected: false,
    },
    3: {
      id: '3',
      title: 'Item 2',
      selected: false,
    },
  });

  const bulkMenu = [
    {
      id: '1',
      icon: 'arrow-redo',
      title: 'Del og gi tilgang',
    },
    {
      id: '2',
      icon: 'eye',
      title: 'Marker som lest',
    },
    {
      id: '3',
      icon: 'archive',
      title: 'Flytt til arkiv',
    },
    {
      id: '4',
      icon: 'trash',
      title: 'Flytt til papirkurv',
    },
  ]?.map((item) => {
    return {
      ...item,
      as: 'button',
      onClick: () =>
        setSnackbars((prevState) => {
          return [
            ...prevState,
            {
              message: 'Snack me',
            },
          ];
        }),
    };
  });

  const onSelect = ({ id }) => {
    setItemsById((prevState) => {
      return {
        ...prevState,
        [id]: {
          ...prevState[id],
          selected: !prevState[id].selected,
        },
      };
    });
  };

  const items = Object.values(itemsById);
  const itemsSelected = items?.filter((item) => item.selected);

  const bulkMode = itemsSelected?.length > 0;
  const bulkTitle = itemsSelected?.length + ' av ' + items?.length + ' valgt';

  return (
    <Layout
      theme={bulkMode ? 'neutral' : 'company'}
      header={{ ...header, search: bulkMode ? null : header.search }}
      sidebar={{ hidden: bulkMode, menu }}
      content={{ theme: 'neutral' }}
    >
      <ActionHeader title={bulkTitle} hidden={!bulkMode} />
      <ListBase>
        {items?.map((item) => {
          return (
            <DialogListItem
              {...item}
              key={item?.id}
              title={item.title}
              onClick={bulkMode ? () => onSelect(item) : undefined}
              selected={item.selected}
              select={{ checked: item?.selected, onChange: () => onSelect(item) }}
            />
          );
        })}
      </ListBase>
      <ActionFooter hidden={false}>
        <>
          {bulkMode && <ActionMenu items={bulkMenu} theme="global-dark" />}
          {snackbars.length > 0 && snackbars?.map((item, index) => <Snackbar key={index} {...item} />)}
        </>
      </ActionFooter>
    </Layout>
  );
};
