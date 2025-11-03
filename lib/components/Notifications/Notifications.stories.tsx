import { BellIcon } from '@navikt/aksel-icons';
import { DialogList, Layout, List, NotificationItem, PageBase, Toolbar } from '..';
import { useInbox } from '../../../examples';
const meta = {
  title: 'Notifications',
  component: NotificationItem,
  tags: ['beta'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

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
