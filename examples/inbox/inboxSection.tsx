import type { DialogListProps } from '../../lib';
import { dialogs } from './dialogs/';

export const inboxSection: DialogListProps = {
  groups: {
    inbox: { title: '5 treff i innboks' },
    drafts: { title: '0 treff i utkast' },
    sent: { title: '0 treff i sendt' },
    archive: { title: '0 treff i arkivert' },
    trash: { title: '0 treff i papirkurv' },
    '2025-03': { title: 'Mars 2025' },
    '2025-02': { title: 'Februar 2025' },
    '2024-01': { title: '2024' },
  },
  items: dialogs?.map((item) => {
    return {
      ...item,
      groupId: item?.updatedAt?.slice(0, 5),
    };
  }),
};
