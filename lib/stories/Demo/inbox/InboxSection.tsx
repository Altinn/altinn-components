import { InboxToolbar, useAppContext, useBulk } from '..';
import { DialogList, PageBase } from '../../../components';
import { dialogList } from '../data';
export const InboxSection = () => {
  const { pageId, setPageId, currentAccount } = useAppContext();
  const { selectId, selectedIds, ...bulk } = useBulk();

  const parents = pageId?.split('/');
  const parentId = parents?.[0];
  const sectionId = parents?.[1] || 'inbox';

  const recipient = (currentAccount && {
    type: currentAccount.type,
    name: currentAccount.name,
  }) || {
    type: 'person',
    name: 'Unknown',
  };

  const groups = {};

  const items =
    dialogList
      ?.filter((item) => {
        const { status, groupId } = item;

        groups[groupId] = {
          title: groupId,
        };

        if (sectionId === "trash") {
          return true
        }

        if (sectionId === 'inbox' && status?.value) {
          if (['new', 'in-progress', 'completed', 'requires-attention'].includes(status.value)) {
            return true;
          }
        } else if (sectionId === 'drafts' && status?.value === 'draft') {
          return true;
        } else if (sectionId === 'sent' && status?.value === 'sent') {
          return true;
        } else {
          return false;
        }
      })
      .map((item) => {
        const dialogId = [parentId, sectionId, item.id].join('/');
        const selected = selectedIds?.includes(dialogId);

        if (bulk.count) {
          return {
            ...item,
            recipient,
            onClick: () => selectId?.(dialogId),
            variant: selected ? 'solid' : 'dotted',
            color: selected ? bulk?.color : 'neutral',
            theme: selected ? 'default' : 'subtle',
            selected,
            select: {
              checked: selectedIds?.includes(dialogId),
              onChange: () => selectId?.(dialogId),
            },
          };
        }

        return {
          ...item,
          recipient,
          onClick: () => setPageId?.(dialogId),
          selected,
          select: {
            onChange: () => selectId?.(dialogId),
          },
        };
      }) || [];

  return (
    <PageBase spacing={3} margin="page">
      {!bulk.count && <InboxToolbar />}
      <DialogList groups={groups} items={items} />
    </PageBase>
  );
};
