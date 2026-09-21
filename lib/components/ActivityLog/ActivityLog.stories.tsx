import { type ChangeEvent, type ReactNode, useMemo, useState } from 'react';
import {
  ActivityLog,
  Button,
  Heading,
  Layout,
  ModalBase,
  ModalBody,
  ModalHeader,
  PageBase,
  Section,
  Toolbar,
  Typography,
} from '..';
import {
  type ActivityHistoryEntry,
  activityHistoryEntries,
  toActivityLogSegment,
  useActivityLog,
  useActivityLogFilter,
  useProfile,
} from '../../../examples';

const meta = {
  title: 'Timeline/ActivityLog',
  tags: ['beta'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

export const Default = () => {
  const { items } = useActivityLog();
  return <ActivityLog items={items} />;
};

export const Controlled = () => {
  const { toolbar, items } = useActivityLog();
  return (
    <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>
  );
};

export const ProfileActivityLog = () => {
  const { layout } = useProfile({
    pageId: 'activity-log',
  });
  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Aktivitetslogg</Heading>
        <Controlled />
      </PageBase>
    </Layout>
  );
};

export const ActivityLogModal = () => {
  const { items } = useActivityLog();
  const [open, setOpen] = useState<boolean>(true);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} />
        <ModalBody>
          <ActivityLog items={items} />
        </ModalBody>
      </ModalBase>
    </>
  );
};

export const ActivityLogModalAdvanced = () => {
  const { toolbar, items } = useActivityLog();

  const [open, setOpen] = useState<boolean>(true);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} sticky={false} />
        <ModalBody>
          <div style={{ position: 'sticky', top: '1.5em', zIndex: 2 }}>
            <Toolbar {...toolbar} />
          </div>
          <ActivityLog items={items} />
        </ModalBody>
      </ModalBase>
    </>
  );
};

const resultsMaxHeight = '60vh';

const ActivityLogEmptyState = ({ children }: { children: ReactNode }) => (
  <Typography variant="subtle" size="sm">
    <p>{children}</p>
  </Typography>
);

interface DialogActivityLogModalProps {
  entries: ActivityHistoryEntry[];
  defaultQuery?: string;
}

const DialogActivityLogModal = ({ entries, defaultQuery = '' }: DialogActivityLogModalProps) => {
  const [open, setOpen] = useState<boolean>(true);
  const [q, setQ] = useState<string>(defaultQuery);

  /** Built once. The query is not baked into them, so typing does not rebuild the log. */
  const segments = useMemo(() => entries.map(toActivityLogSegment), [entries]);

  const { kind, filter } = useActivityLogFilter(segments);

  const onClose = () => setOpen(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} sticky={false} />
        <ModalBody>
          {/* No sticky positioning needed: the log scrolls in its own box below. */}
          {segments.length > 0 && (
            <Toolbar
              filter={filter}
              search={{
                name: 'q',
                label: 'Søk i aktivitetsloggen',
                placeholder: 'Søk ...',
                value: q,
                onChange: (event: ChangeEvent<HTMLInputElement>) => setQ(event.target.value),
                onClear: () => setQ(''),
              }}
            />
          )}
          <ActivityLog
            items={segments}
            kind={kind}
            query={q}
            emptyState={
              <ActivityLogEmptyState>Det er ikke registrert noen aktiviteter på denne meldingen.</ActivityLogEmptyState>
            }
            noResultsState={<ActivityLogEmptyState>Ingen treff</ActivityLogEmptyState>}
            style={{ maxHeight: resultsMaxHeight, overflowY: 'auto' }}
          />
        </ModalBody>
      </ModalBase>
    </>
  );
};

export const DialogActivityLogFiltered = () => <DialogActivityLogModal entries={activityHistoryEntries} />;

export const DialogActivityLogPartialSources = () => (
  <DialogActivityLogModal
    entries={activityHistoryEntries.filter(
      (entry) => entry.source === 'notification' || entry.source === 'transmission',
    )}
  />
);

export const DialogActivityLogShortLog = () => (
  <DialogActivityLogModal entries={activityHistoryEntries.filter((entry) => entry.source === 'label').slice(0, 3)} />
);

/** Empty state 1: the dialog has no activity at all, so there is nothing to filter. */
export const DialogActivityLogNoActivity = () => <DialogActivityLogModal entries={[]} />;

/** Empty state 2: there is activity, but every term has to match and these two never co-occur. */
export const DialogActivityLogNoMatches = () => (
  <DialogActivityLogModal entries={activityHistoryEntries} defaultQuery="sms skatteetaten" />
);
