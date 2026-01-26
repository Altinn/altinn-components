import type { Meta } from '@storybook/react-vite';
import { Switch } from '../Forms/Switch';
import { Toolbar, ToolbarFilter, ToolbarMenu, ToolbarSearch } from './';
import { inboxFilters } from './example.data';
import { useInboxFilter, useInboxToolbar } from './example.hooks';

const meta = {
  title: 'Toolbar/Toolbar',
  component: Toolbar,
  parameters: {},
  decorators: [
    (Story, _) => {
      const style = {
        backgroundColor: 'var(--ds-color-background-tinted)',
        padding: '.5em',
      };

      return (
        <div style={style}>
          <Story />
        </div>
      );
    },
  ],

  args: {},
} satisfies Meta<typeof Toolbar>;

export default meta;

export const Composition = () => {
  return (
    <Toolbar>
      <ToolbarMenu items={[{ title: 'MenuItem 1' }, { title: 'MenuItem 2' }, { title: 'MenuItem 3' }]} label="Menu" />
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter
        filterState={{}}
        filters={[
          {
            label: 'Filter 1',
            name: 'f1',
            items: [
              {
                role: 'radio',
                name: '1',
                value: '1',
                label: 'Filter 1',
              },
              {
                role: 'radio',
                name: '2',
                value: '2',
                label: 'Filter 2',
              },
              {
                role: 'radio',
                name: '3',
                value: '3',
                label: 'Filter 3',
              },
            ],
          },
          {
            label: 'Filter 2',
            name: 'f2',
            items: [
              {
                role: 'checkbox',
                name: '1',
                value: '1',
                label: 'Filter 1',
              },
              {
                role: 'checkbox',
                name: '2',
                value: '2',
                label: 'Filter 2',
              },
              {
                role: 'checkbox',
                name: '3',
                value: '3',
                label: 'Filter 3',
              },
            ],
          },
        ]}
      />
    </Toolbar>
  );
};

export const SearchAndFilter = () => {
  return (
    <Toolbar>
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter
        filterState={{}}
        filters={[
          {
            label: 'Filter 1',
            name: 'f1',
            items: [
              {
                role: 'radio',
                name: '1',
                value: '1',
                label: 'Filter 1',
              },
              {
                role: 'radio',
                name: '2',
                value: '2',
                label: 'Filter 2',
              },
              {
                role: 'radio',
                name: '3',
                value: '3',
                label: 'Filter 3',
              },
            ],
          },
          {
            label: 'Filter 2',
            name: 'f2',
            items: [
              {
                role: 'checkbox',
                name: '1',
                value: '1',
                label: 'Filter 1',
              },
              {
                role: 'checkbox',
                name: '2',
                value: '2',
                label: 'Filter 2',
              },
              {
                role: 'checkbox',
                name: '3',
                value: '3',
                label: 'Filter 3',
              },
            ],
          },
        ]}
      />
    </Toolbar>
  );
};

export const SearchAndSwitch = () => {
  return (
    <Toolbar>
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter
        filterState={{}}
        filters={[
          {
            label: 'Filter 1',
            name: 'f1',
            items: [
              {
                role: 'radio',
                name: '1',
                value: '1',
                label: 'Filter 1',
              },
              {
                role: 'radio',
                name: '2',
                value: '2',
                label: 'Filter 2',
              },
              {
                role: 'radio',
                name: '3',
                value: '3',
                label: 'Filter 3',
              },
            ],
          },
        ]}
      />
      <Switch label="Switch" size="sm" />
    </Toolbar>
  );
};

export const AccountMenuAndFilters = () => {
  const { menus } = useInboxToolbar();
  const removableFilter = useInboxFilter({ filters: inboxFilters?.map((item) => ({ ...item, removable: true })) });

  return <Toolbar menus={menus} filter={removableFilter} />;
};

export const AccountMenuAndSearch = () => {
  const { menus, search } = useInboxToolbar();
  const removableFilter = useInboxFilter({ filters: inboxFilters?.map((item) => ({ ...item, removable: true })) });

  return <Toolbar menus={menus} search={{ ...search, collapsible: true }} filter={removableFilter} />;
};
