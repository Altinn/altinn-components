import { type ReactNode, isValidElement } from 'react';
import type { ActivityLogSegmentProps } from './ActivityLogSegment';

/** Concatenate the text out of a React node, so a JSX `summary` is searchable. */
export const activityLogSegmentText = (node: ReactNode): string => {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(activityLogSegmentText).join('');
  if (isValidElement(node)) return activityLogSegmentText((node.props as { children?: ReactNode }).children);
  return '';
};

/** Split a query into lower-cased terms. */
export const activityLogQueryTerms = (query?: string): string[] =>
  (query ?? '').toLowerCase().split(/\s+/).filter(Boolean);

/** The kinds present in a log, in first-seen order. */
export const activityLogKinds = (items: ActivityLogSegmentProps[] = []): string[] => [
  ...new Set(items.map((item) => item.kind).filter((kind): kind is string => Boolean(kind))),
];

/** Matches when `kind` is one of those asked for and every term appears in the text. */
export const matchesActivityLogSegment = (
  segment: ActivityLogSegmentProps,
  kind: string | string[] | undefined,
  terms: string[],
): boolean => {
  const kinds = kind === undefined ? [] : Array.isArray(kind) ? kind : [kind];
  if (kinds.length && (segment.kind === undefined || !kinds.includes(segment.kind))) return false;
  if (!terms.length) return true;
  const haystack = (segment.searchText ?? activityLogSegmentText(segment.summary)).toLowerCase();
  return terms.every((term) => haystack.includes(term));
};
