import {
  BookmarksSection,
  DialogBody,
  DialogHeader,
  DialogLayout,
  DialogList,
  DialogTabs,
  Layout,
  PageBase,
  Toolbar,
} from "../components";
import {
  inboxSearchResults,
  inboxDrafts,
  inboxSent,
  useBookmarks,
  useInboxDialog,
  useInboxLayout,
  useInboxToolbar,
  useInbox,
} from "../../examples";

const meta = {
  title: "Demo/Inbox",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const InboxPage = () => {
  const { layout, toolbar, results, dialog, dialogId } = useInbox({});

  if (dialog) {
    return (
      <Layout {...layout}>
        <DialogLayout
          backButton={dialog?.backButton}
          contextMenu={dialog?.contextMenu}
          pageMenu={dialog?.pageMenu}
        >
          <DialogHeader {...dialog} />
        </DialogLayout>
      </Layout>
    );
  }

  return (
    <Layout {...layout}>
      {dialogId}
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        {results && (
          <DialogList items={results.items} groups={results?.groups} />
        )}
      </PageBase>
    </Layout>
  );
};

export const SearchPage = () => {
  const layout = useInboxLayout({});
  const toolbar = useInboxToolbar();
  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <DialogList {...inboxSearchResults} />
      </PageBase>
    </Layout>
  );
};

export const DraftsPage = () => {
  const { layout, toolbar } = useInbox({ pageId: "drafts" });

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <DialogList {...inboxDrafts} />
      </PageBase>
    </Layout>
  );
};

export const SentPage = () => {
  const layout = useInboxLayout({ pageId: "sent" });
  const toolbar = useInboxToolbar();
  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <DialogList {...inboxSent} />
      </PageBase>
    </Layout>
  );
};

export const BookmarksPage = () => {
  const layout = useInboxLayout({ pageId: "bookmarks" });
  const toolbar = useInboxToolbar();
  const bookmarks = useBookmarks();
  return (
    <Layout {...layout}>
      <PageBase color="company" margin="page">
        <Toolbar {...toolbar} />
        <BookmarksSection {...bookmarks} />
      </PageBase>
    </Layout>
  );
};

export const ArchivePage = () => {
  const layout = useInboxLayout({ pageId: "archive" });
  return (
    <Layout {...layout}>
      <PageBase color="company" margin="page"></PageBase>
    </Layout>
  );
};

export const TrashPage = () => {
  const layout = useInboxLayout({ pageId: "trash" });
  return (
    <Layout {...layout}>
      <PageBase color="company" margin="page"></PageBase>
    </Layout>
  );
};

export const Dialog = ({ tabId = "history" }) => {
  const layout = useInboxLayout({});
  const {
    loading,
    backButton,
    contextMenu,
    pageMenu,
    header,
    body,
    tabs,
    children,
  } = useInboxDialog({ tabId });
  return (
    <Layout {...layout}>
      <DialogLayout
        backButton={backButton}
        contextMenu={contextMenu}
        pageMenu={pageMenu}
      >
        {header && <DialogHeader loading={loading} {...header} />}
        {body && <DialogBody loading={loading} {...body} />}
        {tabs && <DialogTabs {...tabs} />}
        {children}
      </DialogLayout>
    </Layout>
  );
};

export const DialogInfo = () => {
  return <Dialog tabId="info" />;
};

export const DialogActivityLog = () => {
  return <Dialog tabId="activity-log" />;
};

export const DialogContact = () => {
  return <Dialog tabId="contact" />;
};
