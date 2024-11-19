'use client';
import { DialogList, PageBase } from '../../components';
import { useInbox } from './';
import { InboxToolbar } from './InboxToolbar';

export function InboxPage() {
  const { inboxId, onDialogId, items = [], onSelectId, selectedCount } = useInbox();
  const selected = items?.filter((item) => item.selected);

  const inboxItems = items
    ?.filter((item) => {
      const inboxStatus = item?.status.value;

      if (inboxId === 'drafts' && inboxStatus !== 'draft') {
        return false;
      }
      if (inboxId === 'sent' && inboxStatus !== 'sent') {
        return false;
      }
      if (inboxId === 'inbox' && (item.status.value === 'sent' || item.status.value === 'draft')) {
        return false;
      }

      return true;
    })
    .map((item) => {

      return {
        ...item,
        groupId: 'g1',
        onClick: selectedCount > 0 ? () => onSelectId(item.id) : () => onDialogId(item.id),
        select: {
          checked: item?.selected,
          onChange: () => onSelectId(item.id),
        },
      };
    });

  const inboxGroups = {
    g1: {
      title: 'Gruppe',
    },
  };

  return (
    <PageBase spacing="md" margin="lg">
      {!selected.length > 0 && <InboxToolbar items={inboxItems} />}
      <DialogList items={inboxItems} groups={inboxGroups} />
    </PageBase>
  );
}
