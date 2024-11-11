import { InboxProvider, InboxLayout, InboxSection } from './';
import type {DialogProps} from "../../components";

interface InboxProps {
    dialogId: string | null;
    inboxId: string;
    dialogs: DialogProps[];
}

export const Inbox = ({ dialogId, inboxId, dialogs }: InboxProps) => {
  return (
    <InboxProvider defaultValue={{ dialogId, inboxId, dialogs }}>
      <InboxLayout>
        <InboxSection />
      </InboxLayout>
    </InboxProvider>
  );
};
