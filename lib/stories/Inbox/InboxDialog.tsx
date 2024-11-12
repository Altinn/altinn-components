'use client';
import { Dialog, ActionMenu } from '../../components';
import { useInboxContext, actionMenu } from './';

export function InboxDialog() {
  const { dialogId, onDialogId, items } = useInboxContext();

  const dialog = items.find((item) => item.id === dialogId);
  return (
    <section>
      <Dialog {...dialog} menu={{ items: actionMenu }} backButton={{ onClick: () => onDialogId(dialogId) }} />
      <ActionMenu items={actionMenu} />
    </section>
  );
}
