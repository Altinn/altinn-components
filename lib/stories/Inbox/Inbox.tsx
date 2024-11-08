import { InboxProvider, InboxLayout, InboxSection } from './';

export const Inbox = () => {
  return (
    <InboxProvider>
      <InboxLayout>
        <InboxSection />
      </InboxLayout>
    </InboxProvider>
  );
};
