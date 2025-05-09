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
  inboxSection,
  useBookmarks,
  useInboxDialog,
  useInboxLayout,
  useInboxToolbar,
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

export const Inbox = () => {
  const layout = useInboxLayout({});
  const toolbar = useInboxToolbar();
  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <DialogList {...inboxSection} />
      </PageBase>
    </Layout>
  );
};

export const Search = () => {
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

export const Drafts = () => {
  const layout = useInboxLayout({ pageId: "drafts" });
  const toolbar = useInboxToolbar();
  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <DialogList {...inboxSection} />
      </PageBase>
    </Layout>
  );
};

export const Sent = () => {
  const layout = useInboxLayout({ pageId: "sent" });
  const toolbar = useInboxToolbar();
  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <DialogList {...inboxSection} />
      </PageBase>
    </Layout>
  );
};

export const Bookmarks = () => {
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
