import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ActionFooter, ActionHeader, ActionMenu, DialogListItem, ListBase, Snackbar } from '../';
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

export const Default = (args) => {
  const search = useInboxSearch(args.header.search);
  const menu = useAccountMenu(args.header.menu);

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

export const InboxBulkMode = (args) => {
  const search = useInboxSearch(args.header.search);
  const menu = useAccountMenu(args.header.menu);

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
      header={{ ...header, menu, currentAccount: menu.currentAccount, search: bulkMode ? undefined : search }}
      sidebar={{ hidden: bulkMode, menu: inboxMenu }}
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
