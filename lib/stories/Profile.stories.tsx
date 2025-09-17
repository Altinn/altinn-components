import { type ChangeEvent, useState } from "react";
import * as SettingsStories from "./Profile/Settings.stories";
import * as ActivityLogStories from "../components/ActivityLog/ActivityLog.stories";
import * as AccountListStories from "../components/Account/AccountList.stories";
import * as AccountSettingsStories from "../components/Account/AccountSettingsList.stories";

import {
  Heading,
  Layout,
  PageBase,
  Breadcrumbs,
  DashboardHeader,
  DashboardCard,
  type DashboardCardProps,
  SettingsSection,
  Toolbar,
  Grid,
  SettingsList,
  type SettingsListProps,
} from "../components";
import { useProfileLayout } from "../../examples";
import {
  HeartIcon,
  BellIcon,
  CogIcon,
  MobileIcon,
  PaperplaneIcon,
  HouseHeartIcon,
  SunIcon,
  ReceiptIcon,
  EnterIcon,
} from "@navikt/aksel-icons";

const meta = {
  title: "Demo/Profile",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const DashboardPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({});
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <DashboardHeader
          type="person"
          name="Mathias Dyngeland"
          description="Fødselsnr: XXXXXX YYYYYY"
        />
        <Grid cols={3}>
          <DashboardCard
            href="/iframe.html?id=demo-profile--accounts-page"
            icon={HeartIcon as DashboardCardProps["icon"]}
            title="Mine aktører"
          >
            <p>Mine aktører, favoritter og grupper.</p>
          </DashboardCard>
          <DashboardCard
            href="/iframe.html?id=demo-profile--alerts-page"
            icon={BellIcon as DashboardCardProps["icon"]}
            title="Mine varslinger"
          >
            <p>Mine varslingsadresser og varslinger per aktør.</p>
          </DashboardCard>
          <DashboardCard
            href="/iframe.html?id=demo-profile--settings-page"
            icon={CogIcon as DashboardCardProps["icon"]}
            title="Innstillinger"
          >
            <p>Kontaktinformasjon og andre innstillinger.</p>
          </DashboardCard>
        </Grid>
        <SettingsSection>
          <SettingsStories.ContactSettings />
        </SettingsSection>
      </PageBase>
    </Layout>
  );
};

export const AccountsPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "accounts" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Mine aktører</Heading>
        <AccountListStories.Collapsible />
      </PageBase>
    </Layout>
  );
};

export const AlertsPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "alerts" });
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Mine varslinger</Heading>
        <Toolbar search={{ name: "search", placeholder: "Søk" }} />
        <Heading size="lg">Mine varslingsadresser</Heading>
        <SettingsSection>
          <SettingsStories.AlertSettings />
        </SettingsSection>
        <SettingsSection>
          <SettingsStories.ContactProfiles />
        </SettingsSection>
        <Heading size="lg">Varslinger per aktør</Heading>
        <SettingsSection>
          <AccountSettingsStories.ControlledValue />
        </SettingsSection>
      </PageBase>
    </Layout>
  );
};

export const ContactPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "contact" });
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Kontaktinformasjon</Heading>
        <Toolbar search={{ name: "search", placeholder: "Søk" }} />
        <Heading size="lg">Primær kontaktinformasjon</Heading>
        <SettingsSection>
          <SettingsStories.ContactSettings />
        </SettingsSection>
        <Heading size="lg">Varslingsadresser i bruk</Heading>
        <SettingsSection>
          <SettingsStories.ContactProfiles />
        </SettingsSection>
      </PageBase>
    </Layout>
  );
};

export const UsersPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "users" });
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Brukere med fullmakt til din profil</Heading>
      </PageBase>
    </Layout>
  );
};

export const AccessPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "access" });
  return (
    <Layout {...layout}>
      <PageBase>
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Tilganger du har gitt til andre</Heading>
      </PageBase>
    </Layout>
  );
};

interface SettingsSearchProps extends SettingsListProps {
  q?: string;
}

const SettingsSearch = ({ items, q = "" }: SettingsSearchProps) => {
  const filteredItems = items
    ?.filter((item) => {
      const { title, value } = item;

      if (
        typeof title === "string" &&
        title.toLowerCase().includes(q.toLowerCase())
      ) {
        return true;
      }
      if (
        typeof value === "string" &&
        value.toLowerCase().includes(q.toLowerCase())
      ) {
        return true;
      }

      return false;
    })
    .map((item, index) => {
      return {
        ...item,
        groupId: "g" + index,
        highlightWords: [q],
      };
    });

  return (
    <>
      <Heading size="lg">{filteredItems?.length + " treff"}</Heading>
      <SettingsSection>
        <SettingsList items={filteredItems} />{" "}
      </SettingsSection>
    </>
  );
};

export const SettingsPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({ pageId: "settings" });

  const [q, setQ] = useState("");

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  const items = [
    {
      icon: MobileIcon,
      title: "Mobiltelefon",
      value: "99007700",
    },
    {
      icon: PaperplaneIcon,
      title: "E-postadresse",
      value: "mathias@hotmail.com",
    },
    {
      icon: HouseHeartIcon,
      title: "Adresse",
      value: "Inndalsveien 28, 5063 Bergen",
    },
    {
      icon: EnterIcon,
      title: "Forhåndsvalgt aktør",
      value: "Diaspora Bergensis",
    },
    {
      icon: ReceiptIcon,
      title: "Kvittering på e-post",
    },
    {
      icon: SunIcon,
      title: "Modus",
      value: "Auto",
    },
  ];

  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Innstillinger</Heading>
        <Toolbar
          search={{
            name: "search",
            placeholder: "Søk i innstillinger",
            value: q,
            onChange: onSearchChange,
          }}
        />
        {q ? (
          <SettingsSearch items={items} q={q} />
        ) : (
          <>
            {" "}
            <Heading size="lg">Kontaktinformasjon</Heading>
            <SettingsSection>
              <SettingsStories.ContactSettings />
            </SettingsSection>
            <Heading size="lg">Preferanser i Altinn</Heading>
            <SettingsSection>
              <SettingsStories.ViewSettings />
            </SettingsSection>
            <Heading size="lg">Flere innstillinger</Heading>
            <SettingsSection>
              <SettingsStories.LinkSettings />
            </SettingsSection>
          </>
        )}
      </PageBase>
    </Layout>
  );
};

export const ActivityLogPage = () => {
  const { breadcrumbs, ...layout } = useProfileLayout({
    pageId: "activity-log",
  });
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <Breadcrumbs items={breadcrumbs} />
        <Heading size="xl">Aktivitetslogg</Heading>
        <ActivityLogStories.Controlled />
      </PageBase>
    </Layout>
  );
};
