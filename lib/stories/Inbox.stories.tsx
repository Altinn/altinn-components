import * as DialogStories from "./Dialog/Dialog.stories";
import * as BetaStories from "./Beta/Beta.stories";

import {
  BookmarksSection,
  BookmarksSettingsList,
  type BookmarksSettingsListProps,
  Dialog,
  DialogList,
  Layout,
  PageBase,
  Toolbar,
  Section,
  Heading,
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
  HeaderProps,
} from "../components";
import { useBookmarks, useInbox, useActivityLog } from "../../examples";
import { useState } from "react";

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

interface SearchQueryProps {
  query: { q: string };
}

const EmptyLink = () => (
  <p>
    <a href="?id=demo-inbox--about-inbox-page">
      Hvor finner jeg de gamle meldingene mine?
    </a>
  </p>
);

const EmptySection = () => (
  <Section spacing={3} margin="section">
    <Heading size="lg">Innboksen er tom</Heading>
    <Typography size="sm">
      <p>
        <strong>Vi jobber med å flytte meldinger.</strong> Etterhvert vil du
        kunne se flere elementer i din nye innboks.
      </p>
      <EmptyLink />
    </Typography>
  </Section>
);

const EmptyDraftsSection = () => (
  <Section spacing={3} margin="section">
    <Heading size="lg">Du har ingen utkast</Heading>
    <Typography size="sm">
      <p>
        Her finner du dialoger <strong>som inneholder utkast</strong>, for
        eksempel skjemaer du jobber med.
      </p>
      <EmptyLink />
    </Typography>
  </Section>
);

const EmptySentSection = () => (
  <Section spacing={3} margin="section">
    <Heading size="lg">Du har ikke sendt noe fra deg</Heading>
    <Typography size="sm">
      <p>
        Her finner du dialoger som inneholder ting du har{" "}
        <strong>sendt fra deg</strong>.
      </p>
      <EmptyLink />
    </Typography>
  </Section>
);

const EmptyArchiveSection = () => (
  <Section spacing={3} margin="section">
    <Heading size="lg">Arkivet er tomt</Heading>
    <Typography size="sm">
      <p>
        <strong>Her finner du dialoger du har valgt å arkivere.</strong> Dette
        er ikke et journal- og arkivsystem. Om dialogen blir oppdatert vil du
        finne den igjen i innboksen.
      </p>
      <EmptyLink />
    </Typography>
  </Section>
);

const EmptyTrashSection = () => (
  <Section spacing={3} margin="section">
    <Heading size="lg">Papirkurven er tom</Heading>
    <Typography size="sm">
      <p>
        <strong>Her finner du dialoger du har lagt i papirkurven.</strong> Om
        dialogen blir oppdatert vil du finne den igjen i innboksen.
      </p>
      <EmptyLink />
    </Typography>
  </Section>
);

const SearchTips = () => (
  <>
    <p>
      <strong>Vi jobber med å gjøre søket bedre.</strong> Inntil videre kan du
      prøve følgende:
    </p>
    <ul>
      <li>
        I fritekst kan du søke på <strong>ett søkeord</strong> eller{" "}
        <strong>hele setninger</strong>.
      </li>
      <li>Bruk filter for å begrense trefflisten.</li>
      <li>
        Du kan filtere på <strong>tjenesteeier</strong>, <strong>status</strong>{" "}
        og <strong>oppdatert dato</strong>.
      </li>
    </ul>
    <EmptyLink />
  </>
);

const NoHitsSection = ({ query }: SearchQueryProps) => (
  <Section spacing={3} margin="section">
    <Heading size="lg">Ingen treff</Heading>
    <Typography size="sm">
      <p>Søk etter &laquo;{query?.q}&raquo; ga ingen treff.</p>
      <SearchTips />
    </Typography>
  </Section>
);

export const InboxEmptyPage = () => {
  const { layout, toolbar } = useInbox({});

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <EmptySection />
      </PageBase>
    </Layout>
  );
};

export const SearchPage = () => {
  let params = new URL(document.location.toString()).searchParams;
  let q = params.get("q") || "regnskap";

  const { layout, toolbar, results, dialog } = useInbox({
    q,
  });

  if (dialog) {
    return (
      <Layout {...layout}>
        <Dialog {...dialog} />
      </Layout>
    );
  }

  const header = layout?.header as HeaderProps;
  const query = header?.search?.value;
  const hits = results?.items?.length || 0;

  const title = <span>{hits} treff</span>;
  const description = (
    <span>
      Søk etter «{query}» ga {hits} treff.
    </span>
  );

  const [expanded, setExpanded] = useState(false);
  const onToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  const descriptionTips = expanded ? (
    <>
      <p>
        {description}{" "}
        <a href="#" onClick={onToggle}>
          Skjul søketips ↑
        </a>
      </p>
      <SearchTips />
    </>
  ) : (
    <p>
      {description}{" "}
      <a href="#" onClick={onToggle}>
        Vis søketips ↓
      </a>
    </p>
  );

  if (!hits) {
    return (
      <Layout {...layout}>
        <PageBase margin="page">
          <Toolbar {...toolbar} />
          <NoHitsSection query={{ q }} />
        </PageBase>
      </Layout>
    );
  }

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        {results?.items?.length ? (
          <DialogList
            items={results.items?.map((item) => {
              return { ...item, groupId: "q" };
            })}
            groups={{
              q: {
                title: title,
                description: descriptionTips,
              },
            }}
            highlightWords={[q]}
          />
        ) : (
          <NoHitsSection query={{ q }} />
        )}
      </PageBase>
    </Layout>
  );
};

export const SearchEmptyPage = () => {
  let params = new URL(document.location.toString()).searchParams;
  let q = params.get("q") || "bergen";

  const { layout, toolbar } = useInbox({
    q,
  });

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <NoHitsSection query={{ q }} />
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
        {results && (
          <DialogList
            groups={{
              drafts: {
                title: results?.items?.length + " utkast",
                description: (
                  <p>
                    Her finner du dialoger{" "}
                    <strong>som inneholder utkast</strong>, for eksempel
                    skjemaer du jobber med.
                  </p>
                ),
              },
            }}
            items={results.items?.map((item) => {
              return { ...item, groupId: "drafts" };
            })}
          />
        )}
      </PageBase>
    </Layout>
  );
};

export const DraftsEmptyPage = () => {
  const { layout, toolbar } = useInbox({ pageId: "drafts" });

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <EmptyDraftsSection />
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
        {results && (
          <DialogList
            groups={{
              sent: {
                title: results?.items?.length + " treff i sendt",
                description: (
                  <p>
                    Her finner du dialoger som inneholder{" "}
                    <strong>ting du har sendt fra deg.</strong>
                  </p>
                ),
              },
            }}
            items={results.items?.map((item) => {
              return { ...item, groupId: "sent" };
            })}
          />
        )}
      </PageBase>
    </Layout>
  );
};

export const SentEmptyPage = () => {
  const { layout, toolbar } = useInbox({ pageId: "sent" });

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <EmptySentSection />
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
      <PageBase margin="page">
        {toolbar && <Toolbar {...toolbar} />}
        {results && (
          <DialogList
            groups={{
              archived: {
                title: results?.items?.length + " treff i arkivet",
                description: (
                  <p>
                    <strong>
                      Her finner du dialoger du har valgt å arkivere.
                    </strong>{" "}
                    Dette er ikke et journal- og arkivsystem. Om dialogen blir
                    oppdatert vil du finne den igjen i innboksen.
                  </p>
                ),
              },
            }}
            items={results.items?.map((item) => {
              return { ...item, groupId: "archived" };
            })}
          />
        )}
      </PageBase>
    </Layout>
  );
};

export const ArchiveEmptyPage = () => {
  const { layout, toolbar } = useInbox({ pageId: "archive" });

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <EmptyArchiveSection />
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
      <PageBase margin="page">
        {toolbar && <Toolbar {...toolbar} />}
        {results && (
          <DialogList
            groups={{
              trashed: {
                title: results?.items?.length + " treff i papirkurven",
                description: (
                  <p>
                    <strong>
                      Her finner du dialoger du har lagt i papirkurven.
                    </strong>{" "}
                    Om dialogen blir oppdatert vil du finne den igjen i
                    innboksen.
                  </p>
                ),
              },
            }}
            items={results.items?.map((item) => {
              return { ...item, groupId: "trashed" };
            })}
          />
        )}
      </PageBase>
    </Layout>
  );
};

export const TrashEmptyPage = () => {
  const { layout, toolbar } = useInbox({ pageId: "trash" });

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <EmptyTrashSection />
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

export const BookmarksBackupPage = () => {
  const { layout, toolbar } = useInbox({
    pageId: "bookmarks",
  });
  const bookmarks = useBookmarks();
  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <BookmarksSection {...bookmarks} />
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
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <BookmarksSettingsList {...(bookmarks as BookmarksSettingsListProps)} />
      </PageBase>
    </Layout>
  );
};

export const InboxBetaPage = () => {
  const { layout, toolbar, results } = useInbox({});

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        {results && (
          <DialogList items={results.items} groups={results?.groups} />
        )}
      </PageBase>
      <BetaStories.BetaModal open={true} />
    </Layout>
  );
};

export const AboutPage = () => {
  const { layout } = useInbox({ pageId: "about" });

  return (
    <Layout {...layout}>
      <BetaStories.About />
      <BetaStories.BetaModal open={false} />
    </Layout>
  );
};

export const AboutInboxPage = () => {
  const { layout } = useInbox({ pageId: "about-inbox" });

  return (
    <Layout {...layout}>
      <BetaStories.AboutInbox />
      <BetaStories.BetaModal open={false} />
    </Layout>
  );
};
