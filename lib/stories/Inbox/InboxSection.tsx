'use client';
import { actionMenu, useInbox } from './';
import { BookmarksPage, DialogPage, InboxPage, ProfilePage, SettingsPage } from './';

export function InboxSection() {
  const { inboxId, dialogId, onDialogId, items = [] } = useInbox();

  if (inboxId === 'bookmarks') {
    return <BookmarksPage />;
  }

  if (inboxId === 'settings') {
    return <SettingsPage />;
  }

  if (inboxId === 'profile') {
    return <ProfilePage />;
  }

  if (dialogId) {
    const dialog = items.find((item) => item.id === dialogId);
    return (
      <DialogPage
        dialog={{
          ...dialog,
          menu: {
            id: 'context-menu',
            items: actionMenu,
          },
          backButton: {
            onClick: () => onDialogId(dialogId),
          },
        }}
      />
    );
  }

  return <InboxPage />;
}
