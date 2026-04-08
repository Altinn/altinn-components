import { Button, DialogList, type DialogListProps, Heading, InboxPage, Layout, Typography } from '..';

import { BookmarkFillIcon, BookmarkIcon } from '@navikt/aksel-icons';
import { type ReactNode, useState } from 'react';
import { type UseInboxQuery, useInbox } from '../../../examples';

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

export const Search = ({
  pageId = 'inbox',
  sticky = false,
  title = '35 treff',
  summary = (
    <p>
      Begrens søket til{' '}
      <Button variant="tinted" size="mini">
        Innboks
      </Button>
      ,{' '}
      <Button variant="tinted" size="mini">
        Arkiv
      </Button>{' '}
      eller{' '}
      <Button variant="tinted" size="mini">
        Papirkurv
      </Button>
      .
    </p>
  ),
  query,
}: {
  pageId?: string;
  sticky?: boolean;
  title?: string;
  summary?: ReactNode;
  query?: UseInboxQuery;
}) => {
  const { layout, toolbar, results } = useInbox({
    pageId,
    query,
  });

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
        <Heading size="lg">{title}</Heading>
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

export const SearchInbox = () => {
  return (
    <Search
      pageId="inbox"
      title="33 treff i innboks"
      query={{ folder: ['inbox'] }}
      summary={
        <p>
          Utvid søket til{' '}
          <Button variant="tinted" size="mini">
            Alle mapper
          </Button>
        </p>
      }
    />
  );
};

export const SearchArchive = () => {
  return (
    <Search
      pageId="archive"
      title="1 treff i arkiv"
      query={{ folder: ['archive'] }}
      summary={
        <p>
          Utvid søket til{' '}
          <Button variant="tinted" size="mini">
            Alle mapper
          </Button>
        </p>
      }
    />
  );
};

export const SearchTrash = () => {
  return (
    <Search
      pageId="trash"
      title="1 treff i papirkurv"
      query={{ folder: ['trash'] }}
      summary={
        <p>
          Utvid søket til{' '}
          <Button variant="tinted" size="mini">
            Alle mapper
          </Button>
        </p>
      }
    />
  );
};

export const SearchEmpty = () => <Search title="Ingen treff" query={{ q: 'Lorem ipsum ' }} summary={''} />;

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
      <InboxPage title={pageTitle} toolbar={toolbar}>
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

export const Trash = () => {
  return <Inbox pageId="trash" summary="Her finner du det du har lagt i papirkurven." />;
};

export const StickyInbox = () => <Inbox sticky={true} />;
export const StickySearch = () => <Search sticky={true} />;
