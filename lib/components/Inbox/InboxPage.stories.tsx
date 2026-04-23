import {
  Button,
  Dialog,
  DialogList,
  type DialogListProps,
  Heading,
  Layout,
  PageBase,
  Pagination,
  Toolbar,
  Typography,
} from '..';

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
  defaultAccountId = 'user',
  companyCount,
  pageId = 'inbox',
  description,
  controls,
  children,
}: {
  defaultAccountId?: string;
  companyCount?: number;
  pageId?: string;
  description?: ReactNode;
  controls?: ReactNode;
  children?: ReactNode;
}) => {
  const { layout, toolbar, results, dialog, pageTitle } = useInbox({
    defaultAccountId,
    companyCount,
    pageId,
  });

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
        <PageBase>
          {pageTitle && <Heading size="xl">{pageTitle}</Heading>}
          {toolbar && <Toolbar {...toolbar}>{controls}</Toolbar>}
          {children ||
            (results && (
              <DialogList
                description={description as DialogListProps['description']}
                items={items as DialogListProps['items']}
                groups={results?.groups}
              />
            ))}
        </PageBase>
      )}
    </Layout>
  );
};

export const InboxEmpty = () => {
  return (
    <Inbox>
      <Typography variant="subtle" size="sm">
        <p>Du har ingen meldinger i innboksen.</p>
      </Typography>
    </Inbox>
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

export const AllCompanies = () => {
  return <Inbox defaultAccountId="all-companies" companyCount={975} />;
};

export const AllCompaniesLimit = () => {
  return (
    <Inbox defaultAccountId="all-companies" companyCount={975}>
      <Typography size="sm" variant="subtle">
        <p>Velg inntil 100 enheter eller velg side for å se innholdet:</p>
        <ul>
          <li>
            <Button variant="tinted" size="mini">
              Side 1
            </Button>
            {' – '}
            <a href="/?path=/story/inbox-inboxpage--all-companies-page">
              <strong>Alfa Inc</strong>
              {' – '}
              <strong>Bergen Bar</strong>
            </a>
          </li>
          <li>
            <Button variant="tinted" size="mini">
              Side 2
            </Button>
            {' – '}
            <a href="/?path=/story/inbox-inboxpage--all-companies-page">
              <strong>Børs cafe</strong>
              {' – '}
              <strong>Eplehagen restaurant</strong>
            </a>
          </li>
          <li>
            <Button variant="tinted" size="mini">
              Side 3
            </Button>
            {' – '}
            <a href="/?path=/story/inbox-inboxpage--all-companies-page">
              <strong>Fisketorget</strong>
              {' – '}
              <strong>Grand hotell</strong>
            </a>
          </li>
          <li>
            <Button variant="tinted" size="mini">
              Side 4
            </Button>
            {' – '}
            <a href="/?path=/story/inbox-inboxpage--all-companies-page">
              <strong>Hotel Norge</strong>
              {' – '}
              <strong>Zebra Pub</strong>
            </a>
          </li>
        </ul>
      </Typography>
    </Inbox>
  );
};

export const AllCompaniesPage = () => {
  const pagination = {
    'aria-label': 'Velg side',
    prev: {
      title: 'Forrige',
      'aria-label': 'Forrige',
    },
    next: {
      title: 'Neste',
      'aria-label': 'Neste',
    },
    items: [
      {
        id: '1',
        title: '1',
        'aria-label': 'Side 1',
      },
      {
        id: '2',
        title: '2',
        'aria-label': 'Side 2',
        selected: true,
      },
      {
        hidden: true,
      },
      {
        id: '9',
        'aria-label': 'Side 9',
        title: '9',
      },
      {
        id: '10',
        'aria-label': 'Side 10',
        title: '10',
      },
    ],
  };

  return (
    <Inbox
      companyCount={975}
      defaultAccountId="all-companies"
      description={
        <p>
          <Pagination {...pagination} size="mini" />
          {' – '}
          <strong>Fisketorget</strong> til <strong>Grand hotell</strong>
        </p>
      }
    />
  );
};

export const Search = ({
  pageId = 'inbox',
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
  children,
}: {
  pageId?: string;
  title?: string;
  description?: ReactNode;
  query?: UseInboxQuery;
  children?: ReactNode;
}) => {
  const { layout, toolbar, results, dialog } = useInbox({
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
        <PageBase>
          {toolbar && (
            <Toolbar {...toolbar}>
              <Controls />
            </Toolbar>
          )}
          {children ||
            (results && (
              <DialogList
                title={title}
                description={description as DialogListProps['description']}
                items={items as DialogListProps['items']}
                groups={results?.groups}
              />
            ))}
        </PageBase>
      )}
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
        <Button variant="outline" size="mini">
          Nullstill alt
        </Button>
      </p>
    }
  />
);
