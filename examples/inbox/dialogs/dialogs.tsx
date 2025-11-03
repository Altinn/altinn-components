import type { ReactNode } from 'react';
import type {
  DialogContactProps,
  DialogHistoryProps,
  DialogListItemProps,
  DialogListProps,
  DialogSectionProps,
} from '../../../lib';
import { getSeenByLog, seenByLog } from '../seenByLog';
import { brregArchived, brregCompleted, brregTable, brregTrashed } from './brreg';
import { enovaDraft, enovaProgress, enovaSent } from './enova';
import { mattilsynetAttention, mattilsynetDraft } from './mattilsynet';
import { nabovarsel } from './oslo';
import { tredjepart } from './skatt';
import { ssbAttention } from './ssb';

export interface DialogDataProps extends DialogListItemProps {
  /** Dialog history */
  history?: DialogHistoryProps;
  /** Dialog history */
  additionalInfo?: DialogSectionProps;
  /** Dialog history */
  contact?: DialogContactProps;
  /** Content */
  children?: ReactNode;
}

export const dialogs: DialogDataProps[] = [
  {
    ...nabovarsel,
    seenByLog: getSeenByLog(seenByLog.items),
  },
  {
    ...mattilsynetDraft,
    seenByLog: getSeenByLog(seenByLog.items.slice(0, 1)),
  },
  mattilsynetAttention,
  {
    ...enovaDraft,
    seenByLog: getSeenByLog(seenByLog.items.slice(0, 1)),
  },
  {
    ...enovaProgress,
    seenByLog: getSeenByLog(seenByLog.items.slice(0, 2)),
  },
  {
    ...enovaSent,
    seenByLog: getSeenByLog(seenByLog.items.slice(0, 3)),
  },
  ssbAttention,
  { ...brregArchived, seenByLog: getSeenByLog(seenByLog.items.slice(0, 3)) },
  brregTrashed,
  brregCompleted,
  brregTable,
  tredjepart,
] as DialogDataProps[];

export function sortDialogsByKey<DialogDataProps>(
  items: DialogDataProps[],
  key: keyof DialogDataProps,
  reverse = false,
): DialogDataProps[] {
  return items.slice().sort((a, b) => {
    const aVal = a[key] || 'a';
    const bVal = b[key] || 'a';

    if (aVal === bVal) return 0;
    if (aVal === undefined) return 1;
    if (bVal === undefined) return -1;

    if (aVal < bVal) return reverse ? 1 : -1;
    return reverse ? -1 : 1;
  });
}

function capitalizeFirstLetter(val: string) {
  return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

export const getDialogGroup = ({ updatedAt = '2000-01-01' }: DialogDataProps) => {
  const groupId = updatedAt?.slice(0, 7) || 'q';

  const date = new Date(updatedAt);
  const title = date.toLocaleDateString('no-NB', {
    year: 'numeric',
    month: 'long',
  });

  return {
    groupId,
    title: capitalizeFirstLetter(title),
  };
};

function matchAnyWord(input: string, words: string[]): boolean {
  const lowerInput = input.toLowerCase();
  return words.some((word) => word.toLowerCase().includes(lowerInput));
}

export function getDialogList(data: DialogDataProps[], q?: string): DialogListProps {
  const groups: DialogListProps['groups'] = {};

  const sortedItems = sortDialogsByKey(data, 'updatedAt', true);

  const items =
    sortedItems
      .filter((item) => {
        if (!q) {
          return true;
        }

        const words = [item?.title || '', item?.summary || '', item?.sender?.name || ''];

        if (matchAnyWord(q, words)) {
          return true;
        }

        return false;
      })
      .map((item) => {
        const { groupId, title } = getDialogGroup(item);

        groups[groupId] = {
          title: title,
        };

        return {
          ...item,
          groupId: q ? 'q' : groupId,
        };
      }) || [];

  groups.q = {
    title: items.length + ' treff',
  };

  return {
    items,
    groups,
  };
}
