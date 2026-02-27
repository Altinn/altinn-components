import { BookmarkModal, BookmarkSettingsList, type BookmarkSettingsListProps, Heading, Layout, PageBase } from '..';

import type { Meta } from '@storybook/react-vite';
import { useBookmarks } from '../../../examples';

const meta = {
  component: BookmarkSettingsList,
  title: 'Bookmarks/BookmarkSettingsList',
  tags: ['beta'],
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (Story, { args }: { args: BookmarkSettingsListProps }) => {
      const style = {
        backgroundColor: 'var(--ds-color-background-tinted)',
        padding: '.5em',
      };

      return (
        <div style={style}>
          <Layout>
            <Story {...args} />
          </Layout>
        </div>
      );
    },
  ],
  args: {},
} satisfies Meta<typeof BookmarkSettingsList>;

export default meta;

export const BookmarksList = () => {
  const { expandedId, onClose, items } = useBookmarks();

  const modalProps = expandedId && items.find((item) => item.id === expandedId);

  return (
    <>
      <BookmarkSettingsList items={items} />
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
    </>
  );
};

export const GroupedBookmarksList = () => {
  const { expandedId, onClose, items } = useBookmarks();

  const modalProps = expandedId && items.find((item) => item.id === expandedId);

  const groupedItems = items?.map((item) => {
    return {
      groupId: item?.title ? '1' : '2',
      ...item,
    };
  });

  const groups = {
    '1': {
      title: 'Med tittel',
    },
    '2': {
      title: 'Uten tittel',
    },
  };

  return (
    <>
      <BookmarkSettingsList items={groupedItems} groups={groups} />
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
    </>
  );
};

export const BookmarksPage = () => {
  const { title, description, expandedId, onClose, items } = useBookmarks();

  const modalProps = expandedId && items.find((item) => item.id === expandedId);

  return (
    <PageBase>
      <Heading size="lg">{title}</Heading>
      <BookmarkSettingsList items={items} />
      <Heading size="xs" weight="normal">
        {description}
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
  );
};
