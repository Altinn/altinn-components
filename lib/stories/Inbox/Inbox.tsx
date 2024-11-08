import { InboxProvider, InboxLayout, InboxSection } from './';

export const Inbox = ({ dialogId, inboxId, itemsById }) => {
  return (
    <InboxProvider defaultValue={{ dialogId, inboxId, itemsById }}>
      <InboxLayout>
        <InboxSection />
      </InboxLayout>
    </InboxProvider>
  );
};
