import * as AccountListStories from "../components/Account/AccountList.stories";

import { Heading, Layout, type LayoutProps, PageBase } from "../components";
import { useProfile } from "../../examples";

const meta = {
  title: "Demo/Account",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const SelectAccount = () => {
  const { layout } = useProfile({});
  return (
    <Layout
      {...layout}
      theme="default"
      header={{ ...layout?.header, search: undefined } as LayoutProps["header"]}
      sidebar={{ hidden: true }}
    >
      <PageBase>
        <Heading size="xl">Hvem vil du representere?</Heading>
        <AccountListStories.ControlledTinted />
      </PageBase>
    </Layout>
  );
};
