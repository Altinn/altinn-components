import * as DialogStories from "./Dialog/Dialog.stories";

import {
  BookmarksSection,
  Dialog,
  DialogList,
  Layout,
  PageBase,
  Toolbar,
  Typography,
  ActionHeader,
  ActionFooter,
  PageMenu,
  ModalBase,
  ModalHeader,
  ModalBody,
  ActivityLog,
  SeenByLog,
  SeenByLogProps,
} from "../components";
import { useBookmarks, useInbox, useActivityLog } from "../../examples";

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
  const {
    layout,
    toolbar,
    results,
    dialog,
    bulkMode,
    bulkIds,
    bulkMenu,
    modal,
    closeModal,
    unselectAll,
  } = useInbox({});

  const activityLog = useActivityLog();

  return (
    <Layout {...layout}>
      {dialog ? (
        <Dialog {...dialog} />
      ) : (
        <>
          <ActionHeader
            hidden={!bulkMode}
            title={bulkIds?.length + " valgt"}
            dismissable={true}
            onDismiss={unselectAll}
          />
          <PageBase margin="page">
            <Toolbar {...toolbar} />
            {results && (
              <DialogList items={results.items} groups={results?.groups} />
            )}
          </PageBase>
          <ActionFooter hidden={!bulkMode}>
            {bulkMenu && (
              <PageMenu items={bulkMenu.items} id="action" theme="base" />
            )}
          </ActionFooter>
        </>
      )}

      {modal && (
        <ModalBase open={true} onClose={closeModal!!} variant="content">
          <ModalHeader title={modal?.title} onClose={closeModal} />
          <ModalBody>
            {modal?.type === "seen-by-log" ? (
              <SeenByLog
                {...(modal?.seenByLog as SeenByLogProps)}
                title={undefined}
                collapsible={false}
              />
            ) : (
              activityLog && <ActivityLog {...activityLog} />
            )}
          </ModalBody>
        </ModalBase>
      )}
    </Layout>
  );
};

export const SearchPage = () => {
  const { layout, toolbar, results, dialog } = useInbox({
    q: "regnskap",
  });

  if (dialog) {
    return (
      <Layout {...layout}>
        <Dialog {...dialog} />
      </Layout>
    );
  }

  return (
    <Layout {...layout} color={undefined}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        {results && (
          <DialogList
            items={results.items}
            groups={results?.groups}
            highlightWords={["regnskap"]}
          />
        )}
      </PageBase>
    </Layout>
  );
};

export const DraftsPage = () => {
  const { layout, toolbar, results, dialog } = useInbox({ pageId: "drafts" });

  if (dialog) {
    return (
      <Layout {...layout}>
        <Dialog {...dialog} />
      </Layout>
    );
  }

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <Typography size="sm">
          <p>
            <strong>
              Her finner du dialoger du jobber med, men som ikke er sendt.
            </strong>
          </p>
        </Typography>
        {results && (
          <DialogList items={results.items} groups={results?.groups} />
        )}
      </PageBase>
    </Layout>
  );
};

export const SentPage = () => {
  const { layout, toolbar, results, dialog } = useInbox({
    pageId: "sent",
  });

  if (dialog) {
    return (
      <Layout {...layout}>
        <Dialog {...dialog} />
      </Layout>
    );
  }

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <Typography size="sm">
          <p>
            <strong>
              Her finner du dialoger hvor du har sendt noe fra deg.
            </strong>
          </p>
        </Typography>
        {results && (
          <DialogList items={results.items} groups={results?.groups} />
        )}
      </PageBase>
    </Layout>
  );
};

export const BookmarksPage = () => {
  const { layout, toolbar } = useInbox({
    pageId: "bookmarks",
  });
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
  const { layout, toolbar, results, dialog } = useInbox({
    pageId: "archive",
  });

  if (dialog) {
    return (
      <Layout {...layout}>
        <Dialog {...dialog} />
      </Layout>
    );
  }

  return (
    <Layout {...layout}>
      <PageBase color="company" margin="page">
        {toolbar && <Toolbar {...toolbar} />}
        <Typography size="sm">
          <p>
            <strong>Her finner du dialoger du har valgt å arkivere.</strong> Det
            er ikke et journal- og arkivsystem. Om dialogen blir oppdatert vil
            du finne den igjen i innboksen.
          </p>
        </Typography>
        {results && (
          <DialogList items={results.items} groups={results?.groups} />
        )}
      </PageBase>
    </Layout>
  );
};

export const TrashPage = () => {
  const { layout, toolbar, results, dialog } = useInbox({ pageId: "trash" });

  if (dialog) {
    return (
      <Layout {...layout}>
        <Dialog {...dialog} badge={{ color: "neutral", label: "Papirkurv" }} />
      </Layout>
    );
  }

  return (
    <Layout {...layout}>
      <PageBase color="company" margin="page">
        {toolbar && <Toolbar {...toolbar} />}
        <Typography size="sm">
          <p>
            <strong>Her finner du dialoger du har lagt i papirkurven.</strong>{" "}
            Om dialogen blir oppdatert vil du finne den igjen i innboksen.
          </p>
        </Typography>
        {results && (
          <DialogList items={results.items} groups={results?.groups} />
        )}
      </PageBase>
    </Layout>
  );
};

export const DialogStatusAttention = () => {
  const { layout } = useInbox({});
  return (
    <Layout {...layout}>
      <DialogStories.StatusAttention />
    </Layout>
  );
};

export const DialogStatusTransmissions = () => {
  const { layout } = useInbox({});
  return (
    <Layout {...layout}>
      <DialogStories.StatusTransmissions />
    </Layout>
  );
};

export const DialogTransmissions = () => {
  const { layout } = useInbox({});
  return (
    <Layout {...layout}>
      <DialogStories.Transmissions />
    </Layout>
  );
};
