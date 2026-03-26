import { DialogList, Layout, PageBase, Toolbar, Heading } from "../";
import { useInbox } from "../../../examples";

const meta = {
  title: "Inbox",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const InboxPage = () => {
  const { layout, toolbar, results } = useInbox({});

  return (
    <Layout {...layout} useGlobalHeader={true}>
      <PageBase>
        <Heading size="xl">Innboks</Heading>
        <Toolbar {...toolbar} />
        {results && (
          <DialogList items={results.items} groups={results?.groups} />
        )}
      </PageBase>
    </Layout>
  );
};

export const InboxSearchPage = () => {
  const { layout, toolbar, results } = useInbox({});

  const items = results?.items?.map((item) => ({ ...item, groupId: "search" }));

  return (
    <Layout {...layout} useGlobalHeader={true}>
      <PageBase>
        <Heading size="xl">Innboks</Heading>
        <Toolbar {...toolbar} />
        {results && <DialogList items={items} />}
      </PageBase>
    </Layout>
  );
};
