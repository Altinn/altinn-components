import { BookmarkModal, BookmarkSettingsList, Heading, Layout, PageBase, Toolbar } from '..';

import { useAccountMenu, useBookmarks, useInboxLayout, useProfileLayout } from '../../../examples';

const meta = {
  title: 'Bookmarks/Demo',
  tags: ['beta'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

export const InboxSingleAccount = () => {
  const layout = useInboxLayout({
    pageId: 'bookmarks',
  });
  const { items: accountItems, groups: accountGroups, currentAccount } = useAccountMenu({ includeGroups: true });
  const { expandedId, onClose, groups, items, search } = useBookmarks({ grouped: false });

  const modalProps = expandedId && items.find((item) => item.id === expandedId);

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar
          accountMenu={{ label: currentAccount?.title, items: accountItems, groups: accountGroups, searchable: true }}
          search={search}
        />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && (
          <BookmarkModal
            {...modalProps}
            title="Rediger lagret søk"
            open={expandedId !== ''}
            onClose={onClose}
            buttons={[
              { label: 'Lagre', onClick: () => onClose() },
              { label: 'Slett', variant: 'outline', onClick: () => onClose() },
            ]}
          />
        )}
      </PageBase>
    </Layout>
  );
};

export const InboxAllAccounts = () => {
  const layout = useInboxLayout({
    pageId: 'bookmarks',
  });
  const { expandedId, onClose, items, search, groups } = useBookmarks({ grouped: true });

  const modalProps = expandedId && items.find((item) => item.id === expandedId);

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Lagrede søk</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && (
          <BookmarkModal
            {...modalProps}
            title="Rediger lagret søk"
            open={expandedId !== ''}
            onClose={onClose}
            buttons={[
              { label: 'Lagre', onClick: () => onClose() },
              { label: 'Slett', variant: 'outline', onClick: () => onClose() },
            ]}
          />
        )}
      </PageBase>
    </Layout>
  );
};

export const BookmarkSettings = () => {
  const layout = useProfileLayout({
    pageId: 'bookmarks',
  });
  const { expandedId, onClose, items, search, groups } = useBookmarks({ grouped: true });

  const modalProps = expandedId && items.find((item) => item.id === expandedId);

  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Bokmerker</Heading>
        <Toolbar search={search} />
        <BookmarkSettingsList items={items} groups={groups} />
        <Heading size="xs" weight="normal">
          Sist oppdatert 14. april 2025
        </Heading>
        {expandedId && (
          <BookmarkModal
            {...modalProps}
            title="Rediger lagret søk"
            open={expandedId !== ''}
            onClose={onClose}
            buttons={[
              { label: 'Lagre', onClick: () => onClose() },
              { label: 'Slett', variant: 'outline', onClick: () => onClose() },
            ]}
          />
        )}
      </PageBase>
    </Layout>
  );
};
