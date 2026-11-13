import { BellIcon } from '@navikt/aksel-icons';
import { useState } from 'react';
import { useActivityLog, useInbox } from '../../examples';
import {
  ActivityLog,
  Dialog,
  DialogList,
  Heading,
  Layout,
  List,
  ModalBase,
  ModalBody,
  ModalHeader,
  NotificationItem,
  PageBase,
  RootProvider,
  Section,
  SeenByLog,
  type SeenByLogProps,
  SkyraSurvey,
  Toolbar,
  Typography,
} from '../components';
import { useConsent } from '../hooks';

const meta = {
  title: 'Demo/Inbox',
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

export const InboxPage = () => {
  const { layout, toolbar, results, dialog, modal, closeModal } = useInbox({});

  const activityLog = useActivityLog();

  return (
    <Layout {...layout}>
      {dialog ? (
        <Dialog {...dialog} />
      ) : (
        <PageBase>
          <Heading size="xl" as="h1">
            Innboks
          </Heading>
          <Toolbar {...toolbar} />
          {results && <DialogList items={results.items} groups={results?.groups} />}
        </PageBase>
      )}

      {modal && (
        <ModalBase open={true} onClose={closeModal!} variant="content">
          <ModalHeader title={modal?.title} onClose={closeModal} />
          <ModalBody>
            {modal?.type === 'seen-by-log' ? (
              <SeenByLog {...(modal?.seenByLog as SeenByLogProps)} title={undefined} collapsible={false} />
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
    <a href="?id=demo-inbox--about-inbox-page">Hvor finner jeg de gamle meldingene mine?</a>
  </p>
);

const EmptySection = () => (
  <Section spacing={3} margin="section">
    <Heading size="lg">Innboksen er tom</Heading>
    <Typography size="sm">
      <p>
        <strong>Vi jobber med å flytte meldinger.</strong> Etterhvert vil du kunne se flere elementer i din nye innboks.
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
        Her finner du dialoger <strong>som inneholder utkast</strong>, for eksempel skjemaer du jobber med.
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
        Her finner du dialoger som inneholder ting du har <strong>sendt fra deg</strong>.
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
        <strong>Her finner du dialoger du har valgt å arkivere.</strong> Dette er ikke et journal- og arkivsystem. Om
        dialogen blir oppdatert vil du finne den igjen i innboksen.
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
        <strong>Her finner du dialoger du har lagt i papirkurven.</strong> Om dialogen blir oppdatert vil du finne den
        igjen i innboksen.
      </p>
      <EmptyLink />
    </Typography>
  </Section>
);

const SearchTips = () => (
  <>
    <p>
      <strong>Vi jobber med å gjøre søket bedre.</strong> Inntil videre kan du prøve følgende:
    </p>
    <ul>
      <li>
        I fritekst kan du søke på <strong>ett søkeord</strong> eller <strong>hele setninger</strong>.
      </li>
      <li>Bruk filter for å begrense trefflisten.</li>
      <li>
        Du kan filtere på <strong>tjenesteeier</strong>, <strong>status</strong> og <strong>oppdatert dato</strong>.
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
      <PageBase>
        <Heading size="xl" as="h1">
          Innboks
        </Heading>
        <Toolbar {...toolbar} />
        <EmptySection />
      </PageBase>
    </Layout>
  );
};

export const SearchPage = () => {
  const params = new URL(document.location.toString()).searchParams;
  const q = params.get('q') || 'regnskap';

  const { layout, toolbar, results, dialog } = useInbox({
    query: { q },
  });

  if (dialog) {
    return (
      <Layout {...layout}>
        <Dialog {...dialog} />
      </Layout>
    );
  }

  const hits = results?.items?.length || 0;

  const title = <span>{hits} treff</span>;
  const description = (
    <span>
      Søk etter «{q}» ga {hits} treff.
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
        {description} {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
        <a href="#1" onClick={onToggle}>
          Skjul søketips ↑
        </a>
      </p>
      <SearchTips />
    </>
  ) : (
    <p>
      {description} {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
      <a href="#2" onClick={onToggle}>
        Vis søketips ↓
      </a>
    </p>
  );

  if (!hits) {
    return (
      <Layout {...layout}>
        <PageBase>
          <Heading size="xl" as="h1">
            Innboks
          </Heading>
          <Toolbar {...toolbar} />
          <NoHitsSection query={{ q }} />
        </PageBase>
      </Layout>
    );
  }

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl" as="h1">
          Innboks
        </Heading>
        <Toolbar {...toolbar} />
        {results?.items?.length ? (
          <DialogList
            items={results.items?.map((item) => {
              return { ...item, groupId: 'q' };
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
  const params = new URL(document.location.toString()).searchParams;
  const q = params.get('q') || 'bergen';

  const { layout, toolbar } = useInbox({
    query: { q },
  });

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl" as="h1">
          Innboks
        </Heading>
        <Toolbar {...toolbar} />
        <NoHitsSection query={{ q }} />
      </PageBase>
    </Layout>
  );
};

export const DraftsEmptyPage = () => {
  const { layout, toolbar } = useInbox({ pageId: 'drafts' });
  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl" as="h1">
          Utkast
        </Heading>
        <Toolbar {...toolbar} />
        <EmptyDraftsSection />
      </PageBase>
    </Layout>
  );
};

export const SentEmptyPage = () => {
  const { layout, toolbar } = useInbox({ pageId: 'sent' });

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl" as="h1">
          Sendt
        </Heading>
        <Toolbar {...toolbar} />
        <EmptySentSection />
      </PageBase>
    </Layout>
  );
};

export const ArchiveEmptyPage = () => {
  const { layout, toolbar } = useInbox({ pageId: 'archive' });

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl" as="h1">
          Arkiv
        </Heading>
        <Toolbar {...toolbar} />
        <EmptyArchiveSection />
      </PageBase>
    </Layout>
  );
};

export const TrashEmptyPage = () => {
  const { layout, toolbar } = useInbox({ pageId: 'trash' });

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl" as="h1">
          Papirkurv
        </Heading>
        <Toolbar {...toolbar} />
        <EmptyTrashSection />
      </PageBase>
    </Layout>
  );
};

export const InboxCookieBanner = () => {
  const { layout, toolbar, results } = useInbox({});
  const { isAnswered, acceptAll, rejectAll, consent } = useConsent();
  const [language, setLanguage] = useState<'nb' | 'en' | 'nn'>('nb');

  return (
    <RootProvider languageCode={language}>
      <Layout {...layout} cookieBanner={isAnswered ? undefined : { onAccept: acceptAll, onReject: rejectAll }}>
        <SkyraSurvey consent={consent.statistics} />
        <PageBase>
          <Heading size="xl" as="h1">
            Innboks
          </Heading>
          <Toolbar {...toolbar} />
          {results && <DialogList items={results.items} groups={results?.groups} />}
        </PageBase>
      </Layout>
      {(['en', 'nn', 'nb'] as const).map((lang) => (
        <button type="button" key={lang} onClick={() => setLanguage(lang)}>
          {lang}
        </button>
      ))}
      <p>{language}</p>
    </RootProvider>
  );
};

export const InboxNotification = () => {
  const { layout, toolbar, results } = useInbox({});

  return (
    <Layout {...layout}>
      <PageBase margin="page">
        <Toolbar {...toolbar} />
        <List>
          <NotificationItem
            id="alert"
            as="a"
            href="//vg.no"
            icon={BellIcon}
            iconBadge={{ label: 'Nytt innhold' }}
            dismissable
            title="Du har meldinger i gammel innboks"
            description="2 dager siden"
            variant="tinted"
          />
        </List>
        {results && <DialogList items={results.items} groups={results?.groups} />}
      </PageBase>
    </Layout>
  );
};
