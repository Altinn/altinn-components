import { ArchiveIcon, ArrowRedoIcon, CheckmarkIcon, EyeClosedIcon, TrashIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import {
  BulkFooter,
  BulkHeader,
  ContextMenu,
  DialogList,
  type DialogListProps,
  Heading,
  ItemSelect,
  Layout,
  PageBase,
  QueryLabel,
  type QueryLabelProps,
  Toolbar,
  type ToolbarProps,
} from '../';
import { useInbox } from '../../../examples';

const meta = {
  title: 'Bulk/Demo',
  tags: ['beta'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

export const Default = ({ defaultBulkIds = [] }: { defaultBulkIds?: string[] }) => {
  const { layout, toolbar, results } = useInbox({});

  const bulkActions = [
    {
      icon: ArrowRedoIcon,
      label: 'Del og gi tilgang',
    },
    {
      icon: EyeClosedIcon,
      label: 'Marker som lest',
    },
    {
      icon: ArchiveIcon,
      label: 'Flytt til arkiv',
    },
    {
      icon: TrashIcon,
      label: 'Flytt til papirkurv',
    },
  ];

  const [bulkIds, setBulkIds] = useState<string[]>(defaultBulkIds);
  const bulkMode = bulkIds.length > 0;

  const onToggle = (id: string) => {
    if (bulkIds.includes(id)) {
      setBulkIds(bulkIds.filter((item) => item !== id));
    } else {
      setBulkIds([...bulkIds, id]);
    }
  };

  const items = results?.items?.map((item, index) => {
    const id = 'item-' + index;

    const itemContextMenu = {
      items: [
        {
          groupId: '1',
          icon: CheckmarkIcon,
          label: 'Velg flere ...',
          onClick: () => onToggle(id),
        },
        {
          groupId: '2',
          icon: ArrowRedoIcon,
          label: 'Del og gi tilgang',
        },
        {
          groupId: '2',
          icon: EyeClosedIcon,
          label: 'Marker som lest',
        },
        {
          groupId: '3',
          icon: ArchiveIcon,
          label: 'Flytt til arkiv',
        },
        {
          groupId: '3',
          icon: TrashIcon,
          label: 'Flytt til papirkurv',
        },
      ],
    };

    return {
      ...item,
      id,
      color: layout?.color,
      selected: bulkIds?.includes(id),
      onClick: () => onToggle(id),
      controls: bulkMode ? (
        <ItemSelect selected={bulkIds?.includes(id)} onClick={() => onToggle(id)} />
      ) : (
        <ContextMenu {...itemContextMenu} />
      ),
    };
  }) as DialogListProps['items'];

  const selectAll = () => {
    setBulkIds(items?.map((item) => item.id as string) || []);
  };

  const unselectAll = () => {
    setBulkIds([]);
  };

  const sidebar = {
    ...layout?.sidebar,
    hidden: bulkMode,
  };

  const bulkOptions = [
    {
      icon: CheckmarkIcon,
      label: 'Velg alle',
      onClick: selectAll,
    },
  ];

  const accountMenu = toolbar?.accountMenu;
  const currentAccount = accountMenu?.items?.find((item) => item.selected) || accountMenu?.items[0];

  const queryParams = [
    { type: 'scope', label: 'Mathias Dyngeland' },
    { type: 'search', label: 'Skatt' },
    { type: 'filter', label: 'Filter' },
    { type: 'filter', label: 'Filter 2' },
  ];

  const breadcrumbsItems = layout?.breadcrumbs?.items || [];
  const bulkBreadcrumbsItems = [...breadcrumbsItems, { label: 'Velg flere', href: '/inbox' }];

  return (
    <Layout
      {...layout}
      breadcrumbs={{ ...layout?.breadcrumbs, items: bulkMode ? bulkBreadcrumbsItems : breadcrumbsItems }}
      color={bulkMode ? 'neutral' : layout?.color}
      sidebar={sidebar}
      useGlobalHeader={true}
    >
      <PageBase>
        <BulkHeader
          hidden={!bulkMode}
          title={bulkIds?.length + ' valgt'}
          options={bulkOptions}
          dismissable={true}
          onDismiss={unselectAll}
        />
        <Heading size="xl">Innboks</Heading>

        {bulkMode ? (
          <QueryLabel size="xs" variant="subtle" params={queryParams as QueryLabelProps['params']} />
        ) : (
          <Toolbar
            {...toolbar}
            search={{ value: 'Skatt' }}
            accountMenu={{ ...accountMenu, label: currentAccount?.name } as ToolbarProps['accountMenu']}
          />
        )}
        {results && <DialogList items={items} groups={results?.groups} />}

        <BulkFooter hidden={!bulkMode} actions={bulkActions} />
      </PageBase>
    </Layout>
  );
};

export const BulkModeOn = () => {
  return <Default defaultBulkIds={['item-0', 'item-1']} />;
};
