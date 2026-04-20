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
  Toolbar,
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

export const Default = ({
  defaultAccountId = 'user',
  defaultBulkIds = [],
  maxItems = 100,
}: {
  defaultAccountId?: string;
  defaultBulkIds?: string[];
  maxItems?: number;
}) => {
  const { layout, toolbar, results } = useInbox({ defaultAccountId });
  const [loading, setLoading] = useState(false);

  const bulkActions = [
    {
      icon: ArrowRedoIcon,
      label: 'Del og gi tilgang',
    },
    {
      icon: EyeClosedIcon,
      label: 'Marker som ulest',
    },
    {
      icon: ArchiveIcon,
      label: 'Flytt til arkiv',
    },
    {
      icon: TrashIcon,
      label: 'Flytt til papirkurv',
      loading,
      onClick: () => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      },
    },
  ];

  const [bulkIds, setBulkIds] = useState<string[]>(defaultBulkIds);
  const bulkMode = bulkIds.length > 0;
  const maxItemsReached = bulkIds?.length === maxItems;

  const onToggle = (id: string) => {
    if (bulkIds.includes(id)) {
      setBulkIds(bulkIds.filter((item) => item !== id));
    } else {
      if (maxItemsReached) return;
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
          label: 'Marker som ulest',
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
      as: bulkMode ? 'button' : 'a',
      href: '#',
      color: layout?.color,
      selectable: bulkMode,
      tooltips: {
        status: 'Dette er dialogens status',
        sent: 'Antall meldinger sendt',
        received: 'Antall meldinger mottatt',
        seenBy: 'Hvem har sett dialogen?',
      },
      tabIndex: bulkMode ? 1 : undefined,
      selected: bulkIds?.includes(id),
      onClick: () => (bulkMode ? onToggle(id) : alert('Open dialog')),
      controls: bulkMode ? (
        <ItemSelect checked={bulkIds?.includes(id)} onClick={() => onToggle(id)} disabled={maxItemsReached} />
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

  const breadcrumbsItems = layout?.breadcrumbs?.items || [];
  const bulkBreadcrumbsItems = [...breadcrumbsItems, { label: 'Velg flere', href: '/inbox' }];

  return (
    <Layout
      {...layout}
      breadcrumbs={{
        ...layout?.breadcrumbs,
        items: bulkMode ? bulkBreadcrumbsItems : breadcrumbsItems,
      }}
      sidebar={sidebar}
      useGlobalHeader={true}
    >
      <PageBase>
        <BulkHeader
          hidden={!bulkMode}
          title={maxItemsReached ? 'Maks ' + maxItems + ' valgt' : bulkIds?.length + ' valgt'}
          options={maxItemsReached ? [] : bulkOptions}
          dismissable={true}
          onDismiss={unselectAll}
          color={maxItemsReached ? 'warning' : 'company'}
        />
        <Heading size="xl">Innboks</Heading>
        <Toolbar {...toolbar} search={{ value: 'Skatt', collapsible: true }} disabled={bulkMode} />
        {results && <DialogList items={items} groups={results?.groups} />}
        <BulkFooter hidden={!bulkMode} actions={bulkActions} />
      </PageBase>
    </Layout>
  );
};

export const BulkModeOn = () => {
  return <Default defaultBulkIds={['item-0', 'item-1']} />;
};

export const BulkModeMax = () => {
  return <Default maxItems={5} defaultBulkIds={['item-0', 'item-1', 'item-2', 'item-3', 'item-4']} />;
};

export const Company = () => {
  return <Default defaultAccountId="diaspora" />;
};

export const CompanyBulkMode = () => {
  return <Default defaultAccountId="diaspora" defaultBulkIds={['item-0', 'item-1']} />;
};

export const CompanyBulkMax = () => {
  return (
    <Default
      defaultAccountId="diaspora"
      maxItems={7}
      defaultBulkIds={['item-0', 'item-1', 'item-2', 'item-3', 'item-4', 'item-5', 'item-6']}
    />
  );
};
