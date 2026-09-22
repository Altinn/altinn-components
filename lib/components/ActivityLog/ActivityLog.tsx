'use client';
import cx from 'classnames';
import { type CSSProperties, type ReactNode, useMemo, useState } from 'react';

import { ActivityLogSegment, type ActivityLogSegmentProps, Button, Section, Timeline } from '..';
import styles from './activityLog.module.css';
import { activityLogQueryTerms, matchesActivityLogSegment } from './activityLogSearch';
import { useReservedHeight } from './useReservedHeight';

export interface ActivityLogProps {
  items: ActivityLogSegmentProps[];
  maxItems?: number;
  /** Allow expanding past `maxItems`. Default is true. */
  collapsible?: boolean;
  /** Initially expanded. Default is false. */
  expanded?: boolean;
  expandLabel?: string;
  collapseLabel?: string;
  /** Show only segments with these kinds. Omit, or pass an empty array, for all. */
  kind?: string | string[];
  /** Free text; every term has to match. Matches are highlighted. */
  query?: string;
  /** Rendered when `items` is empty. */
  emptyState?: ReactNode;
  /** Rendered when nothing matches `kind` / `query`. */
  noResultsState?: ReactNode;
  /** Keep the unfiltered height while filtering. Default is true. */
  reserveHeight?: boolean;
  className?: string;
  style?: CSSProperties;
}

export const ActivityLog = ({
  items,
  maxItems,
  collapsible = true,
  expanded: defaultExpanded = false,
  expandLabel = 'Expand history',
  collapseLabel = 'Collapse history',
  kind,
  query,
  emptyState,
  noResultsState,
  reserveHeight = true,
  className,
  style,
}: ActivityLogProps) => {
  const [expanded, setExpanded] = useState<boolean>(defaultExpanded);

  const terms = useMemo(() => activityLogQueryTerms(query), [query]);

  const filterable = kind !== undefined || query !== undefined;
  const managed =
    filterable ||
    emptyState !== undefined ||
    noResultsState !== undefined ||
    className !== undefined ||
    style !== undefined;

  const visible = useMemo(
    () => (filterable ? (items ?? []).filter((item) => matchesActivityLogSegment(item, kind, terms)) : (items ?? [])),
    [items, filterable, kind, terms],
  );

  const filtering = (Array.isArray(kind) ? kind.length > 0 : Boolean(kind)) || terms.length > 0;
  const { ref, minHeight } = useReservedHeight(filtering, reserveHeight && filterable);

  const onToggle = () => {
    setExpanded((prev) => !prev);
  };

  const collapsedItems = maxItems ? visible.slice(0, maxItems) : visible;
  const displayedItems = expanded ? visible : collapsedItems;
  const toggle = collapsible && maxItems && visible.length > maxItems;

  const log = !items?.length ? (
    (emptyState ?? null)
  ) : !visible.length ? (
    (noResultsState ?? null)
  ) : (
    <Section spacing={4}>
      <Timeline>
        {displayedItems.map((item) => {
          return (
            <ActivityLogSegment
              {...item}
              highlightWords={terms.length ? terms : item.highlightWords}
              key={'activitylog-segment-' + item.id}
            />
          );
        })}
      </Timeline>
      {toggle && (
        <Button variant="outline" onClick={onToggle}>
          {expanded ? collapseLabel : expandLabel}
        </Button>
      )}
    </Section>
  );

  if (!managed) {
    return log;
  }

  return (
    <div ref={ref} className={cx(styles.wrapper, className)} style={{ ...style, minHeight }}>
      {log}
    </div>
  );
};
