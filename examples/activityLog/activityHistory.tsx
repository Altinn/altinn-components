import type { ActivityLogSegmentProps } from '../../lib';
import { TransmissionList } from '../../lib';

export type ActivitySource = 'activity' | 'notification' | 'label' | 'transmission';

export interface ActivityHistoryEntry {
  id: string;
  source: ActivitySource;
  /** ISO timestamp, also used as the `datetime` of the rendered segment */
  createdAt: string;
  /** `activity` only: rendered in bold ahead of the text */
  actor?: string;
  /** `activity` | `notification` | `label`: the plain text body */
  text?: string;
  /** `transmission` only */
  sender?: string;
  senderType?: 'company' | 'person';
  title?: string;
  summary?: string;
}

export const activitySourceLabels: Record<ActivitySource, string> = {
  activity: 'Hendelser',
  notification: 'Varslinger',
  label: 'Merking',
  transmission: 'Forsendelser',
};

const monthsNb = [
  'januar',
  'februar',
  'mars',
  'april',
  'mai',
  'juni',
  'juli',
  'august',
  'september',
  'oktober',
  'november',
  'desember',
];

const osloParts = new Intl.DateTimeFormat('en-GB', {
  timeZone: 'Europe/Oslo',
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
  hour12: false,
});

/** "22. august 2024 kl. 18.45" */
export const formatActivityDate = (isoDate: string): string => {
  const parts = Object.fromEntries(osloParts.formatToParts(new Date(isoDate)).map((part) => [part.type, part.value]));
  return `${Number(parts.day)}. ${monthsNb[Number(parts.month) - 1]} ${parts.year} kl. ${parts.hour}.${parts.minute}`;
};

export const activityHistoryEntries: ActivityHistoryEntry[] = [
  {
    id: 'l1',
    source: 'label',
    createdAt: '2024-08-22T16:45:00Z',
    text: 'Fantasifull 2024 Søster markerte meldingen som lest.',
  },
  {
    id: 'l2',
    source: 'label',
    createdAt: '2024-08-22T11:00:00Z',
    text: 'Fantasifull 2024 Søster markerte meldingen som ulest.',
  },
  {
    id: 'l3',
    source: 'label',
    createdAt: '2024-08-21T13:30:00Z',
    text: 'Ola Nordmann flyttet meldingen til innboksen.',
  },
  {
    id: 'l4',
    source: 'label',
    createdAt: '2024-08-20T12:15:00Z',
    text: 'Fantasifull 2024 Søster flyttet meldingen til arkivet.',
  },
  {
    id: 'a1',
    source: 'activity',
    createdAt: '2024-08-19T09:00:00Z',
    actor: 'Skatteetaten',
    text: 'Meldingen ble sendt.',
  },
  {
    id: 'n1',
    source: 'notification',
    createdAt: '2024-08-18T11:03:00Z',
    text: 'Påminnelse på e-post til post@firma-as.no, regnskap@firma-as.no, daglig.leder@firma-as.no og 1 annen mottaker ble levert.',
  },
  {
    id: 't1',
    source: 'transmission',
    createdAt: '2024-08-16T09:00:00Z',
    sender: 'Oslo kommune',
    senderType: 'company',
    title: 'Språktest: innhold per språk',
  },
  {
    id: 't2',
    source: 'transmission',
    createdAt: '2024-08-15T09:00:00Z',
    sender: 'Oslo kommune',
    senderType: 'company',
    title: 'Sak 7: vises (isAuthorized=true, summary og GUI-vedlegg)',
  },
  {
    id: 't3',
    source: 'transmission',
    createdAt: '2024-08-15T08:00:00Z',
    sender: 'Oslo kommune',
    senderType: 'company',
    title: 'Sak 6: deaktivert lenke (isAuthorized=true, uautorisert lenke)',
  },
  {
    id: 't4',
    source: 'transmission',
    createdAt: '2024-08-15T06:00:00Z',
    sender: 'Oslo kommune',
    senderType: 'company',
    title: 'Sak 4: vises (isAuthorized=true, innhold finnes)',
  },
  {
    id: 'a2',
    source: 'activity',
    createdAt: '2024-08-14T10:30:00Z',
    actor: 'Skatteetaten',
    text: 'Meldingen ble åpnet.',
  },
  {
    id: 't5',
    source: 'transmission',
    createdAt: '2024-08-13T14:12:00Z',
    sender: 'Per Nordmann',
    senderType: 'person',
    title: 'Tittel 4',
  },
  {
    id: 'n2',
    source: 'notification',
    createdAt: '2024-08-13T14:06:00Z',
    text: 'Varsel på e-post til kari.nordmann@example.com ble levert.',
  },
  {
    id: 'n3',
    source: 'notification',
    createdAt: '2024-08-07T11:02:00Z',
    text: 'Påminnelse på e-post til kari.nordmann@example.com ble levert.',
  },
  {
    id: 'a3',
    source: 'activity',
    createdAt: '2024-08-02T08:00:00Z',
    actor: 'Skatteetaten',
    text: 'Denne meldingen er utløpt.',
  },
  {
    id: 't6',
    source: 'transmission',
    createdAt: '2024-07-31T20:12:00Z',
    sender: 'Kari Nordmann',
    senderType: 'person',
    title: 'Tittel 2',
  },
  {
    id: 'n4',
    source: 'notification',
    createdAt: '2024-07-30T20:16:00Z',
    text: 'Varsel på e-post til kari.nordmann@example.com og post@firma-as.no ble levert.',
  },
  {
    id: 'n5',
    source: 'notification',
    createdAt: '2024-07-30T20:15:00Z',
    text: 'Varsel på SMS til +4799887766 ble levert.',
  },
  {
    id: 't7',
    source: 'transmission',
    createdAt: '2024-07-30T20:12:00Z',
    sender: 'Oslo kommune',
    senderType: 'company',
    title: 'Tittel',
  },
];

/** Build a log segment from a raw entry, the way a consuming app would. */
export const toActivityLogSegment = (entry: ActivityHistoryEntry): ActivityLogSegmentProps => {
  const date = formatActivityDate(entry.createdAt);

  if (entry.source === 'transmission') {
    return {
      id: entry.id,
      kind: entry.source,
      datetime: entry.createdAt,
      /** A transmission renders its own card, so nothing readable is left in the
       *  props — it has to say what its text is. */
      searchText: [entry.title, entry.summary].filter(Boolean).join(' '),
      /** ...and take the words back in, to mark them inside that card. */
      children: (highlightWords) => (
        <TransmissionList
          items={[
            {
              id: entry.id,
              title: entry.title,
              summary: entry.summary,
              datetime: entry.createdAt,
              byline: `${entry.sender}, ${date}`,
              sender: { type: entry.senderType ?? 'company', name: entry.sender ?? '' },
              highlightWords,
            },
          ]}
        />
      ),
    };
  }

  return {
    id: entry.id,
    kind: entry.source,
    datetime: entry.createdAt,
    byline: date,
    summary: entry.actor ? (
      <>
        <strong>{entry.actor}</strong>: {entry.text}
      </>
    ) : (
      entry.text
    ),
  };
};

export const activityHistorySegments: ActivityLogSegmentProps[] = activityHistoryEntries.map(toActivityLogSegment);
