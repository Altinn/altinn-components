import { type ChangeEvent, type ReactNode, useState } from 'react';
import { Button, Typography } from '..';
import { activityHistorySegments, dialog, dialogActivityLog, useActivityLogFilter } from '../../../examples';
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

/**
 * The wrapper forwards every `ActivityLog` prop and renders `toolbar` above the
 * log. The type filter is multi-select: check any number of types, and checking
 * every one of them collapses back onto "Alle typer".
 */
export const WithFilterAndSearch = () => {
  const [open, setOpen] = useState<boolean>(true);
  const [q, setQ] = useState<string>('');

  const { kind, filter } = useActivityLogFilter(activityHistorySegments);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <DialogActivityLog
        title="Aktivitetslogg for dialog"
        open={open}
        onClose={() => setOpen(false)}
        items={activityHistorySegments}
        kind={kind}
        query={q}
        toolbar={{
          filter,
          search: {
            name: 'q',
            label: 'Søk i aktivitetsloggen',
            placeholder: 'Søk ...',
            value: q,
            onChange: (event: ChangeEvent<HTMLInputElement>) => setQ(event.target.value),
            onClear: () => setQ(''),
          },
        }}
        emptyState={<EmptyState>Det er ikke registrert noen aktiviteter på denne meldingen.</EmptyState>}
        noResultsState={<EmptyState>Ingen treff</EmptyState>}
        style={{ maxHeight: '60vh', overflowY: 'auto' }}
      />
    </>
  );
};
