import { type ChangeEvent, type ReactNode, useMemo, useState } from 'react';
import { Button, Typography } from '..';
import {
  type ActivityHistoryEntry,
  activityHistoryEntries,
  dialog,
  dialogActivityLog,
  toActivityLogSegment,
  useActivityLogFilter,
} from '../../../examples';
import { DialogActivityLog } from './DialogActivityLog.tsx';

const meta = {
  title: 'Inbox/Dialog/DialogActivityLog',
  component: DialogActivityLog,
  tags: [],
  args: {
    ...dialogActivityLog,
    title: dialog.title,
  },
};

export default meta;

export const Default = {
  args: {
    open: true,
    onClose: () => {
      alert('Close activityLog');
    },
  },
};

const EmptyState = ({ children }: { children: ReactNode }) => (
  <Typography variant="subtle" size="sm">
    <p>{children}</p>
  </Typography>
);

interface FilteredActivityLogProps {
  entries: ActivityHistoryEntry[];
  defaultQuery?: string;
}

/**
 * The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the
 * log. The type filter is multi-select: check any number of types, and checking
 * every one of them collapses back onto "Alle typer".
 */
const FilteredActivityLog = ({ entries, defaultQuery = '' }: FilteredActivityLogProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const [q, setQ] = useState<string>(defaultQuery);

  /** Built once. The query is not baked into them, so typing does not rebuild the log. */
  const segments = useMemo(() => entries.map(toActivityLogSegment), [entries]);

  const { kind, filter } = useActivityLogFilter(segments);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <DialogActivityLog
        title="Aktivitetslogg for dialog"
        open={open}
        onClose={() => setOpen(false)}
        items={segments}
        kind={kind}
        query={q}
        toolbar={
          segments.length > 0
            ? {
                filter,
                search: {
                  name: 'q',
                  label: 'Søk i aktivitetsloggen',
                  placeholder: 'Søk ...',
                  value: q,
                  onChange: (event: ChangeEvent<HTMLInputElement>) => setQ(event.target.value),
                  onClear: () => setQ(''),
                },
              }
            : undefined
        }
        emptyState={<EmptyState>Det er ikke registrert noen aktiviteter på denne meldingen.</EmptyState>}
        noResultsState={<EmptyState>Ingen treff</EmptyState>}
        style={{ maxHeight: '60vh', overflowY: 'auto' }}
      />
    </>
  );
};

export const WithFilterAndSearch = () => <FilteredActivityLog entries={activityHistoryEntries} />;

export const PartialSources = () => (
  <FilteredActivityLog
    entries={activityHistoryEntries.filter(
      (entry) => entry.source === 'notification' || entry.source === 'transmission',
    )}
  />
);

export const ShortLog = () => (
  <FilteredActivityLog entries={activityHistoryEntries.filter((entry) => entry.source === 'label').slice(0, 3)} />
);

/** Empty state 1: the dialog has no activity at all, so there is nothing to filter. */
export const NoActivity = () => <FilteredActivityLog entries={[]} />;

/** Empty state 2: there is activity, but every term has to match and these two never co-occur. */
export const NoMatches = () => <FilteredActivityLog entries={activityHistoryEntries} defaultQuery="sms skatteetaten" />;
