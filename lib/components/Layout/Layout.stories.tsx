import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ActionFooter, ActionHeader, ActionMenu, DialogListItem, ListBase, Snackbar } from '../';
import type { HeaderProps } from '../Header';
import type { MenuProps } from '../Menu';
import { Layout } from './Layout';

const header: HeaderProps = {
  search: {
    name: 'search',
    placeholder: 'Søk i Altinn',
  },
  menu: {
    accounts: [
      {
        type: 'person',
        name: 'Aurora Mikalsen',
        selected: true,
      },
    ],
  },
};

const menu: MenuProps = {
  groups: {},
  items: [
    {
      id: '1',
      group: 1,
      size: 'lg',
      icon: 'inbox',
      title: 'Innboks',
      color: 'strong',
    },
    {
      id: '2',
      group: 2,
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
      group: 3,
      icon: 'bookmark',
      title: 'Lagrede søk',
    },
    {
      id: '5',
      group: 4,
      icon: 'archive',
      title: 'Arkivert',
    },
    {
      id: '6',
      group: 4,
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
    header,
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

export const GlobalCompany: Story = {
  args: {
    sidebar: {
      menu: {
        ...menu,
        defaultItemColor: 'company',
      },
    },
  },
};

export const GlobalPerson: Story = {
  args: {
    sidebar: {
      menu: {
        ...menu,
        defaultItemColor: 'person',
      },
    },
  },
};

export const Neutral: Story = {
  args: {
    theme: 'neutral',
  },
};

export const Company: Story = {
  args: {
    theme: 'company',
  },
};

export const Person: Story = {
  args: {
    theme: 'person',
  },
};

export const InboxBulkMode = (args) => {
  const [snackbars, setSnacbars] = useState([]);

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
      <ActionFooter>
        {bulkMode && <ActionMenu items={bulkMenu} />}
        {snackbars.length > 0 && snackbars?.map((item, index) => <Snackbar key={index} {...item} />)}
      </ActionFooter>
    </Layout>
  );
};
