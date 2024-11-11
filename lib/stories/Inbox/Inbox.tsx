import { InboxProvider, InboxLayout, InboxSection } from './';
import type { InboxDefaultValue } from './';

export const Inbox = ({ inboxId, dialogId, dialogs, selectedIds }: InboxDefaultValue) => {
  return (
    <InboxProvider defaultValue={{ inboxId, dialogId, dialogs, selectedIds }}>
      <InboxLayout>
        <InboxSection />
      </InboxLayout>
    </InboxProvider>
  );
};
