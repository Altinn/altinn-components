import { Button, DialogList, type DialogListProps, Heading, InboxPage, Layout, Typography } from '..';

import { BookmarkFillIcon, BookmarkIcon } from '@navikt/aksel-icons';
import { type ReactNode, useState } from 'react';
import { useInbox } from '../../../examples';

const meta = {
  title: 'Inbox/InboxPage',
  tags: ['beta'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

export const Inbox = ({
  pageId = 'inbox',
  summary,
  sticky = false,
}: {
  pageId?: string;
  summary?: ReactNode;
  sticky?: boolean;
}) => {
  const { layout, toolbar, results, pageTitle } = useInbox({ pageId });

  return (
    <Layout {...layout} useGlobalHeader={true}>
      <InboxPage sticky={sticky} title={pageTitle} toolbar={toolbar}>
        {summary && (
          <Typography variant="subtle" size="sm">
            {summary}
          </Typography>
        )}
        {results && <DialogList items={results.items} groups={results?.groups} />}
      </InboxPage>
    </Layout>
  );
};

export const InboxSearch = ({
  pageId = 'inbox',
  sticky = false,
  summary = (
    <p>
      Du har også treff i <a href="/iframe.html?id=inbox-inboxpage--archive-search">arkiv</a> og{' '}
      <a href="/iframe.html?id=inbox-inboxpage--trash-search">papirkurv</a>.
    </p>
  ),
  q,
}: {
  pageId?: string;
  sticky?: boolean;
  summary?: ReactNode;
  q?: string;
}) => {
  const { layout, toolbar, results, searchTitle } = useInbox({ pageId, q });

  const items = results?.items?.map((item) => ({ ...item, groupId: 'search' }));

  const [bookmark, setBookmark] = useState(false);

  const Controls = () => (
    <Button size="xs" variant="ghost" onClick={() => setBookmark(!bookmark)}>
      {bookmark ? <BookmarkFillIcon /> : <BookmarkIcon />}
      <span>{bookmark ? 'Lagret' : 'Lagre'}</span>
    </Button>
  );

  return (
    <Layout {...layout}>
      <InboxPage sticky={sticky} toolbar={toolbar} controls={<Controls />}>
        <Heading size="lg">{searchTitle}</Heading>
        {summary && (
          <Typography variant="subtle" size="sm">
            {summary}
          </Typography>
        )}
        {results && <DialogList items={items as DialogListProps['items']} />}
      </InboxPage>
    </Layout>
  );
};

export const InboxSearchEmpty = () => (
  <InboxSearch
    q={'Noe som ikke gir treff'}
    summary={
      <p>
        Du har treff i <a href="/iframe.html?id=inbox-inboxpage--archive-search">arkiv</a> og{' '}
        <a href="/iframe.html?id=inbox-inboxpage--trash-search">papirkurv</a>.
      </p>
    }
  />
);

export const InboxEmpty = ({
  pageId = 'inbox',
  summary = 'Innboksen er tom.',
}: {
  pageId?: string;
  summary?: ReactNode;
}) => {
  const { layout, toolbar, pageTitle } = useInbox({ pageId });

  return (
    <Layout {...layout}>
      <InboxPage title={pageTitle} toolbar={{ accountMenu: toolbar?.accountMenu }}>
        <Typography variant="subtle" size="sm">
          {summary}
        </Typography>
      </InboxPage>
    </Layout>
  );
};

export const Drafts = () => {
  return <Inbox pageId="drafts" summary="Her finner du utkast til skjemaer du har startet på." />;
};

export const Sent = () => {
  return <Inbox pageId="sent" summary="Her finner du skjemaer du har sendt." />;
};

export const Archive = () => {
  return <Inbox pageId="archive" summary="Her finner du det du har lagt i arkivet." />;
};

export const ArchiveSearch = () => {
  return (
    <InboxSearch
      pageId="archive"
      summary={
        <p>
          Du har også treff i <a href="/iframe.html?id=inbox-inboxpage--inbox-search">innboks</a> og{' '}
          <a href="/iframe.html?id=inbox-inboxpage--trash-search">papirkurv</a>.
        </p>
      }
    />
  );
};

export const Trash = () => {
  return <Inbox pageId="trash" summary="Her finner du det du har lagt i papirkurven." />;
};

export const TrashSearch = () => {
  return (
    <InboxSearch
      pageId="trash"
      summary={
        <p>
          Du har også treff i <a href="/iframe.html?id=inbox-inboxpage--inbox-search">innboks</a> og{' '}
          <a href="/iframe.html?id=inbox-inboxpage--archive-search">arkiv</a>.
        </p>
      }
    />
  );
};

export const StickyInbox = () => <Inbox sticky={true} />;
export const StickySearch = () => <InboxSearch sticky={true} />;
