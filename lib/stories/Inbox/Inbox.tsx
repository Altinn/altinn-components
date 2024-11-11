import { InboxLayout, InboxProvider, InboxSection } from './';
import type { InboxDefaultValue } from './';

export const Inbox = ({ accounts, accountId, inboxId, dialogId, dialogs, selectedIds }: InboxDefaultValue) => {
  return (
    <InboxProvider defaultValue={{ accounts, accountId, inboxId, dialogId, dialogs, selectedIds }}>
      <InboxLayout>
        <InboxSection />
      </InboxLayout>
    </InboxProvider>
  );
};
