import type { SeenByLogProps } from '../../lib';

export const seenByLog: SeenByLogProps = {
  collapsible: true,
  title: 'Sett av deg+4',
  items: [
    {
      id: '1',
      type: 'person',
      name: 'Mathias Dyngeland',
      isEndUser: true,
      seenAt: '2025-02-03 08:45',
      seenAtLabel: '6. januar kl 08.45',
    },
    {
      id: '2',
      type: 'person',
      name: 'Felix Horn Myhre',
      seenAt: '2025-01-01 08:30',
      seenAtLabel: '1. januar kl 08.30',
    },
    {
      id: '3',
      type: 'person',
      name: 'Aune Heggebø',
      seenAt: '2025-04-15 11:22',
      seenAtLabel: '15. april kl 11.22',
    },
    {
      id: '4',
      type: 'person',
      name: 'Freyr Alexandersson',
      seenAt: '2025-04-15 12:25',
      seenAtLabel: '16. april kl 12.25',
    },
    {
      id: '5',
      type: 'person',
      name: 'Joachim Soltvedt',
      seenAt: '2025-05-17 08:15',
      seenAtLabel: '17. mai kl 08.15',
    },
  ],
};

export const getSeenByLogX = (count = 1) => {
  const items = seenByLog.items.slice(0, count);

  return {
    items,
    title: ' Sett av deg+',
  };
};

export function sortSeenByLog(items: SeenByLogProps['items'], reverse = false): SeenByLogProps['items'] {
  return items.slice().sort((a, b) => {
    const aVal = a.seenAt || 'a';
    const bVal = b.seenAt || 'a';

    if (aVal === bVal) return 0;
    if (aVal === undefined) return 1;
    if (bVal === undefined) return -1;

    if (aVal < bVal) return reverse ? 1 : -1;
    return reverse ? -1 : 1;
  });
}

export const getSeenByLog = (items?: SeenByLogProps['items']) => {
  if (!items) {
    return [];
  }

  const seenByLogItems =
    items?.map((item, index) => {
      const id = index + '-' + 1;

      const date = new Date(item?.seenAt);
      const seenAtLabel = date.toLocaleDateString('no-NB', {
        year: 'numeric',
        month: 'long',
      });

      return { ...item, id, type: 'person', name: item.name, seenAtLabel };
    }) || [];

  const uniqueItems = Array.from(new Map(seenByLogItems.map((p) => [p.name, p])).values());

  if (!uniqueItems.length) {
    return undefined;
  }

  const seenByEndUser = uniqueItems?.find((item) => item.isEndUser);
  const seenByOthers = uniqueItems?.filter((item) => !item?.isEndUser) || [];

  let who: string;

  if (seenByEndUser && seenByOthers?.length > 0) {
    who = 'deg + {count}';
  } else if (seenByEndUser) {
    who = 'deg';
  } else {
    who = '{count}';
  }

  const title = 'Sett av {who}'?.replace('{who}', who).replace('{count}', seenByOthers?.length.toString());

  const sortedItems = sortSeenByLog(uniqueItems as SeenByLogProps['items']);
  const seen = seenByEndUser || items?.length > 0;

  if (!seen) {
    return {};
  }

  return {
    items: sortedItems,
    seen,
    seenByEndUser,
    title,
  };
};
