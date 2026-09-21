import { useMemo, useState } from 'react';
import type { ActivityLogSegmentProps, FilterProps, FilterState } from '../../lib';
import { activityLogKinds } from '../../lib';
import { type ActivitySource, activitySourceLabels } from './activityHistory';

/** The radio option that stands for "no filter". */
export const ALL_KINDS = 'all';

const labelFor = (kind: string) => activitySourceLabels[kind as ActivitySource] ?? kind;

/**
 * A type filter over an activity log: one radio for "all", plus a checkbox per
 * kind present. Checking every kind is the same as no filter, so it collapses
 * back onto the radio.
 */
export const useActivityLogFilter = (segments: ActivityLogSegmentProps[]) => {
  const [filterState, setFilterState] = useState<FilterState>({});

  const kinds = useMemo(() => activityLogKinds(segments), [segments]);

  const selected = useMemo(
    () => (filterState.kind ?? []).map(String).filter((value) => value !== ALL_KINDS),
    [filterState],
  );

  const filters: FilterProps[] = useMemo(
    () => [
      {
        id: 'kind',
        name: 'kind',
        label: 'Alle typer',
        title: 'Type ...',
        groups: { 1: { title: 'Velg type' } },
        items: [
          { id: ALL_KINDS, groupId: '1', name: 'kind', role: 'radio', value: ALL_KINDS, title: 'Alle typer' },
          ...kinds.map((kind) => ({
            id: kind,
            groupId: '2',
            name: 'kind',
            role: 'checkbox',
            value: kind,
            title: labelFor(kind),
            count: segments.filter((segment) => segment.kind === kind).length,
          })),
        ],
      },
    ],
    [kinds, segments],
  );

  const onFilterStateChange = (next: FilterState) => {
    const picked = (next.kind ?? []).map(String).filter((value) => value !== ALL_KINDS);
    const partial = picked.length > 0 && picked.length < kinds.length;
    setFilterState(partial ? { ...next, kind: picked } : { kind: [ALL_KINDS] });
  };

  const getFilterLabel = () => {
    if (selected.length === 0) return 'Alle typer';
    if (selected.length === 1) return labelFor(selected[0]);
    return `${selected.length} typer`;
  };

  return {
    /** Pass straight to `ActivityLog`. An empty array means every kind. */
    kind: selected,
    filter: { filters, filterState, onFilterStateChange, getFilterLabel },
    reset: () => setFilterState({}),
  };
};
