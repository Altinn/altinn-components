import { BookmarkIcon, XMarkIcon } from '@navikt/aksel-icons';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { useEffect, useRef, useState } from 'react';
import { userEvent, within } from 'storybook/test';
import { Button, DsDialog, QueryLabel } from '..';
import { Switch } from '../Forms';
import {
  type FilterProps,
  type FilterState,
  Toolbar,
  ToolbarFilter,
  type ToolbarFilterProps,
  ToolbarMenu,
  type ToolbarMenuProps,
  ToolbarSearch,
} from './';
import { inboxFilters } from './example.data';
import { useAccountMenu, useInboxFilter, useInboxToolbar } from './example.hooks';

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

export const WithHtmlTitle = () => {
  return (
    <Toolbar>
      <ToolbarMenu
        label="Menu"
        htmlTitle="Velg en handling fra menyen"
        items={[{ title: 'MenuItem 1' }, { title: 'MenuItem 2' }, { title: 'MenuItem 3' }]}
      />
      <ToolbarSearch name="search" placeholder="Search" htmlTitle="Søk i innboksen" />
      <ToolbarFilter
        filterState={{}}
        filters={[
          {
            label: 'Filter 1',
            name: 'f1',
            htmlTitle: 'Filtrer på alternativ',
            items: [
              {
                role: 'radio',
                name: 'f1',
                htmlTitle: 'valg 1',
                value: '1',
                label: 'Filter 1',
              },
              {
                role: 'radio',
                name: 'f1',
                value: '2',
                htmlTitle: 'valg 2',
                label: 'Filter 2',
              },
            ],
          },
          {
            label: 'Filter 2',
            name: 'f2',
            htmlTitle: 'Filtrer på flere alternativer',
            removable: true,
            items: [
              {
                role: 'checkbox',
                name: 'f2',
                value: '1',
                label: 'Filter 1',
              },
              {
                role: 'checkbox',
                name: 'f2',
                value: '2',
                label: 'Filter 2',
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
        virtualized
        filterState={{}}
        filters={[
          {
            label: 'Filter 1',
            name: 'f1',
            items: [
              {
                role: 'radio',
                name: 'f1',
                value: '1',
                label: 'Filter 1',
              },
              {
                role: 'radio',
                name: 'f1',
                value: '2',
                label: 'Filter 2',
              },
              {
                role: 'radio',
                name: 'f1',
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
                name: 'f2',
                value: '1',
                label: 'Filter 1',
              },
              {
                role: 'checkbox',
                name: 'f2',
                value: '2',
                label: 'Filter 2',
              },
              {
                role: 'checkbox',
                name: 'f2',
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
  const [filterState, setFilterState] = useState<ToolbarFilterProps['filterState']>({
    fruit: [],
  });

  return (
    <Toolbar>
      <ToolbarSearch name="search" placeholder="Search" />
      <ToolbarFilter
        filterState={filterState}
        onFilterStateChange={setFilterState}
        getFilterLabel={(name, filterValues) => {
          if (!filterValues?.length && name === 'fruit') return 'Select Fruit';
          if (!filterValues?.length && name === 'plan') return 'Select plans';
          return filterValues?.join(',');
        }}
        filters={[
          {
            virtualized: true,
            id: 'fruit',
            label: 'Choose a fruit',
            name: 'fruit',
            items: [
              {
                groupId: 'citrus',
                role: 'radio',
                name: 'fruit',
                value: 'Orange',
                label: 'Orange',
              },
              {
                groupId: 'other',
                role: 'radio',
                name: 'fruit',
                value: 'Apple',
                label: 'Apple',
              },
              {
                groupId: 'other',
                role: 'radio',
                name: 'fruit',
                value: 'Kiwi',
                label: 'Kiwi',
              },
            ],
          },
          {
            id: 'plan',
            label: 'Choose plans',
            name: 'plan',
            searchable: true,
            groupId: 'what-todo',
            groups: {
              'what-todo': {
                title: 'What to do?',
              },
              other: {
                title: 'Other',
              },
            },
            items: [
              {
                groupId: 'what-todo',
                role: 'checkbox',
                name: 'plan',
                value: 'Fishing',
                label: 'Fishing',
                searchWords: ['Fishing', 'guttastemning'],
              },
              {
                groupId: 'what-todo',
                role: 'checkbox',
                name: 'plan',
                value: 'Working',
                label: 'Working',
                searchWords: ['working', 'nine-to-five'],
              },
              {
                groupId: 'other',
                role: 'checkbox',
                name: 'plan',
                value: 'Sleeping',
                label: 'Sleeping',
                searchWords: ['Sleeping', 'zzz'],
              },
            ],
          },
        ]}
      />
      <Switch label="Switch" size="sm" />
    </Toolbar>
  );
};

export const StaticFilters = () => {
  const staticFilters = useInboxFilter({ filters: inboxFilters?.map((item) => ({ ...item })) });
  return <Toolbar filter={staticFilters} />;
};

export const StaticFiltersInDialog = () => {
  const staticFilters = useInboxFilter({ filters: inboxFilters });
  return (
    <DsDialog.TriggerContext>
      <DsDialog.Trigger>Open Dialog</DsDialog.Trigger>
      <DsDialog style={{ height: '20rem' }}>
        <Toolbar filter={staticFilters} />
      </DsDialog>
    </DsDialog.TriggerContext>
  );
};

export const RemovableFilters = () => {
  const removableFilter = useInboxFilter({ filters: inboxFilters?.map((item) => ({ ...item, removable: true })) });
  return <Toolbar filter={removableFilter} />;
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

export const AccountMenuAndSearchAutocomplete = () => {
  const { menus } = useInboxToolbar();
  const removableFilter = useInboxFilter({ filters: inboxFilters?.map((item) => ({ ...item, removable: true })) });
  const [q, setQ] = useState('');

  const suggestions = [
    {
      groupId: '1',
      title: 'Nytt søk',
      label: <QueryLabel params={[{ type: 'search', value: q, label: q }]} />,
      linkIcon: true,
      onClick: () => {
        console.info('Search for new query:');
      },
    },
    {
      groupId: '1',
      title: 'Søk + filter',
      label: (
        <QueryLabel
          params={[
            { type: 'search', value: q, label: q },
            { type: 'filter', value: 'Test', label: '2 filter' },
          ]}
        />
      ),
      linkIcon: true,
      onClick: () => {
        console.info('Search for new query + filters');
      },
    },
  ];

  const menu = {
    open: q.length >= 1,
    onClose: () => {
      console.log('Close');
    },
    groups: {
      '1': {
        title: '',
      },
      '2': {
        title: 'Lagrede søk',
      },
    },
    items: [
      ...suggestions,
      {
        groupId: '2',
        title: 'Lagret søk 1',
        label: (
          <QueryLabel
            params={[
              { type: 'search', value: q, label: 'Skattemelding' },
              { type: 'filter', value: 'Test', label: '2 filter' },
            ]}
          />
        ),
        linkIcon: true,
      },
      {
        groupId: '2',
        'aria-label': 'Lagret søk 2',
        label: <QueryLabel params={[{ type: 'filter', value: 'Test', label: 'Skatteetaten' }]} />,
        linkIcon: true,
      },
    ],
  };

  const search = {
    value: q,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => setQ(e.target.value),
    onClear: () => setQ(''),
    placeholder: 'Søk',
    collapsible: true,
    minLength: 3,
    menu,
  };

  const handleReset = () => {
    setQ('');
    removableFilter.onFilterStateChange?.({});
  };

  const hasFilters = q || Object.values(removableFilter?.filterState ?? {}).some((v) => v?.length);

  return (
    <Toolbar menus={menus} search={search} filter={{ ...removableFilter, showResetButton: false }}>
      {hasFilters && (
        <>
          <Button onClick={handleReset} variant="ghost">
            <XMarkIcon aria-hidden="true" />
            <span>Nullstill</span>
          </Button>
          <Button onClick={() => alert('Lagre søk')} variant="ghost">
            <BookmarkIcon aria-hidden="true" />
            <span>Lagre</span>
          </Button>
        </>
      )}
    </Toolbar>
  );
};

export const AccountMenuAndSubmenu = () => {
  const accountMenu = useAccountMenu('aa-1');
  const selectedAccount = accountMenu.items?.find((item) => item.selected);
  const selectedIsParent = selectedAccount?.icon?.isParent;
  const removableFilter = useInboxFilter({ filters: inboxFilters?.map((item) => ({ ...item, removable: true })) });

  const filterState = removableFilter?.filterState;

  const onSubAccountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const type = e.target.type;
    const value = e.target.value;
    if (type === 'radio') {
      removableFilter?.onFilterStateChange?.({ ...filterState, subaccount: [value] });
    } else {
      if (filterState?.subaccount?.includes(value)) {
        removableFilter?.onFilterStateChange?.({
          ...filterState,
          subaccount: [...(filterState?.subaccount?.filter((v) => v !== value) || [])],
        });
      } else {
        removableFilter?.onFilterStateChange?.({
          ...filterState,
          subaccount: [...(filterState?.subaccount?.filter((v) => v !== 'all') || []), value],
        });
      }
    }
  };

  const subAccounts = [
    {
      id: '1',
      groupId: '2',
      title: 'Hovedenhet',
      description: 'Org nr.',
      value: 'hoved',
      name: 'subaccount',
      role: 'checkbox',
    },
    {
      id: '2',
      groupId: '2',
      title: 'Underenhet',
      description: 'Org nr.',
      name: 'subaccount',
      value: 'under',
      role: 'checkbox',
    },
  ]?.map((item) => {
    return {
      ...item,
      checked: filterState?.subaccount?.includes(item.value),
      onChange: onSubAccountChange,
    };
  });

  const subAccountsAndAll = [
    {
      id: 'all',
      groupId: '1',
      title: 'Alle enheter',
      name: 'subaccount',
      value: 'all',
      role: 'radio',
      checked: filterState?.subaccount?.includes('all') || !filterState?.subaccount?.length,
      onChange: onSubAccountChange,
    },
    ...subAccounts,
  ];

  const getSubAccountLabel = () => {
    const count = subAccounts?.filter((item) => filterState?.subaccount?.includes(item.value))?.length;
    if (count === 1) {
      return subAccounts?.find((item) => filterState?.subaccount?.includes(item.value))?.title;
    }

    if (count) {
      return `${count} enheter`;
    }
    return `${subAccounts?.length} enheter`;
  };

  return (
    <Toolbar>
      <ToolbarMenu {...(accountMenu as ToolbarMenuProps)} />
      {selectedIsParent && (
        <ToolbarMenu id="subaccounts" items={subAccountsAndAll} label={getSubAccountLabel()} virtualized />
      )}
      <ToolbarFilter {...removableFilter} />
    </Toolbar>
  );
};

export const DebouncedQuery = () => {
  const accountMenu = useAccountMenu('aa-1');
  const removableFilter = useInboxFilter({ filters: inboxFilters?.map((item) => ({ ...item, removable: true })) });

  const [q, setQ] = useState('');

  function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
      // Update debounced value after delay
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);

      // Cancel previous timeout if value changes
      return () => {
        clearTimeout(handler);
      };
    }, [value, delay]);

    return debouncedValue;
  }

  const debouncedQuery = useDebounce(q, 500);

  // We are "loading" if the current text hasn't caught up to the debounced text
  // OR if an actual API call is in progress (args.loading)
  const isTyping = q !== debouncedQuery;
  const loading = isTyping;

  useEffect(() => {
    if (debouncedQuery) {
      console.log('Fetching data for:', debouncedQuery);
      // Simulate API call
      // setTimeout(() => {
      //   console.log('Data fetched for:', debouncedQuery);
      // }, 1000);
    }
  }, [debouncedQuery]);

  return (
    <Toolbar>
      <ToolbarMenu {...(accountMenu as ToolbarMenuProps)} />
      <ToolbarSearch value={q} loading={loading} onChange={(e) => setQ(e.target.value)} onClear={() => setQ('')} />
      <ToolbarFilter {...removableFilter} />
    </Toolbar>
  );
};

interface FilterLoadingArgs {
  /** Simulated response time when fetching the options, in milliseconds */
  delay: number;
  /** Number of skeleton rows */
  loadingCount: number;
  /** Show a search field above the options */
  searchable: boolean;
}

const services = [
  { id: 'skattemelding', title: 'Skattemelding', owner: 'Skatteetaten' },
  { id: 'mva-melding', title: 'MVA-melding', owner: 'Skatteetaten' },
  { id: 'a-melding', title: 'A-melding', owner: 'Skatteetaten' },
  { id: 'inntektsmelding', title: 'Inntektsmelding', owner: 'NAV' },
  { id: 'sykepenger', title: 'Refusjon av sykepenger', owner: 'NAV' },
  { id: 'arsregnskap', title: 'Årsregnskap', owner: 'Brønnøysundregistrene' },
];

/**
 * A toolbar filter that fetches its options every time it opens. `onOpenChange` tells the consumer
 * when the filter opens, so it can start fetching and set `loading` until the options arrive.
 */
export const FilterLoading: StoryObj<FilterLoadingArgs> = {
  args: {
    delay: 2000,
    loadingCount: 3,
    searchable: true,
  },
  argTypes: {
    delay: { control: { type: 'range', min: 500, max: 10000, step: 500 } },
    loadingCount: { control: { type: 'range', min: 1, max: 8, step: 1 } },
  },
  parameters: {
    // can't screenshot test, the result depends on a timer
    screenshot: { skip: true },
  },
  render: function Render({ delay, loadingCount, searchable }) {
    const [filterState, setFilterState] = useState<FilterState>({});
    const [loading, setLoading] = useState(false);
    const [loadedServices, setLoadedServices] = useState<typeof services>([]);
    const timeoutRef = useRef<ReturnType<typeof setTimeout>>(undefined);
    const groupTitle = 'Tjenester';

    useEffect(() => () => clearTimeout(timeoutRef.current), []);

    /** Stands in for the call to Dialogporten */
    const fetchServices = () => {
      setLoading(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setLoadedServices(services);
        setLoading(false);
      }, delay);
    };

    const serviceFilter: FilterProps = {
      name: 'service',
      label: 'Tjeneste',
      title: 'Velg tjeneste',
      searchable,
      search: { name: 'service-search', placeholder: 'Søk etter tjeneste' },
      loading,
      loadingCount,
      loadingTitle: groupTitle,
      loadingLabel: 'Henter tjenester …',
      groups: { services: { title: groupTitle } },
      items: loadedServices.map((service) => ({
        id: service.id,
        groupId: 'services',
        role: 'checkbox',
        name: 'service',
        value: service.id,
        title: service.title,
        description: service.owner,
      })),
      onOpenChange: (open) => open && fetchServices(),
    };

    return (
      <Toolbar>
        <ToolbarFilter filters={[serviceFilter]} filterState={filterState} onFilterStateChange={setFilterState} />
      </Toolbar>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(await canvas.findByRole('button', { name: /Tjeneste/i }));
  },
};
