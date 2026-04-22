import { Button, Dialog, DialogList, type DialogListProps, InboxPage, Layout, Typography } from '..';

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
  description,
  sticky = false,
}: {
  pageId?: string;
  description?: ReactNode;
  sticky?: boolean;
}) => {
  const { layout, toolbar, results, dialog, pageTitle } = useInbox({ pageId });

  const items = results?.items?.map((item) => {
    return {
      ...item,
      sentCount: 0,
      receivedCount: 0,
      archivedAt: item?.archived && '2026-04-20T14:12:20+02:00',
      archivedAtLabel: item?.archived && 'Arkivert',
      trashedAt: item?.trashed && '2026-04-20T14:12:20+02:00',
      trashedAtLabel: item?.trashed && 'Papirkurv',
    };
  });

  return (
    <Layout {...layout} useGlobalHeader={true}>
      {dialog ? (
        <Dialog
          {...dialog}
          activityLog={{
            onClick: () => alert('Aktivitetslogg'),
            label: 'Aktivitetslogg',
          }}
        />
      ) : (
        <InboxPage sticky={sticky} title={pageTitle} toolbar={toolbar}>
          {results && (
            <DialogList
              description={description as DialogListProps['description']}
              items={items as DialogListProps['items']}
              groups={results?.groups}
            />
          )}
        </InboxPage>
      )}
    </Layout>
  );
};

export const Search = ({
  pageId = 'inbox',
  sticky = false,
  title = '35 treff',
  description = (
    <p>
      Begrens søket til{' '}
      <Button variant="tinted" size="mini">
        Innboks
      </Button>{' '}
      <Button variant="tinted" size="mini">
        Arkiv
      </Button>{' '}
      eller{' '}
      <Button variant="tinted" size="mini">
        Papirkurv
      </Button>
    </p>
  ),
  query,
}: {
  pageId?: string;
  sticky?: boolean;
  title?: string;
  description?: ReactNode;
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
        {results && (
          <DialogList
            title={title}
            description={description as DialogListProps['description']}
            items={items as DialogListProps['items']}
          />
        )}
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
      description={
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
      description={
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
      description={
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

export const SearchEmpty = () => (
  <Search
    title="Ingen treff"
    query={{ q: 'Lorem ipsum ' }}
    description={
      <p>
        Søket ditt ga ingen treff.{' '}
        <Button variant="tinted" size="mini">
          Nullstill
        </Button>
      </p>
    }
  />
);

export const InboxEmpty = ({
  pageId = 'inbox',
  description = 'Innboksen er tom.',
}: {
  pageId?: string;
  description?: ReactNode;
}) => {
  const { layout, toolbar, pageTitle } = useInbox({ pageId });

  return (
    <Layout {...layout}>
      <InboxPage title={pageTitle} toolbar={toolbar}>
        <Typography variant="subtle" size="sm">
          {description}
        </Typography>
      </InboxPage>
    </Layout>
  );
};

export const Drafts = () => {
  return <Inbox pageId="drafts" description="Her finner du utkast til skjemaer du har startet på." />;
};

export const Sent = () => {
  return <Inbox pageId="sent" description="Her finner du skjemaer du har sendt." />;
};

export const Archive = () => {
  return <Inbox pageId="archive" description="Her finner du det du har lagt i arkivet." />;
};

export const Trash = () => {
  return <Inbox pageId="trash" description="Her finner du det du har lagt i papirkurven." />;
};

export const StickyInbox = () => <Inbox sticky={true} />;
export const StickySearch = () => <Search sticky={true} />;
