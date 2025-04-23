import {
  BellIcon,
  CardIcon,
  ClockDashedIcon,
  CogIcon,
  HeartIcon,
  HourglassIcon,
} from "@navikt/aksel-icons";
import {
  AccordionSection,
  AccountList,
  Button,
  Byline,
  ContactSection,
  DashboardCard,
  DashboardHeader,
  Grid,
  Heading,
  Layout,
  Metadata,
  PageBase,
  PageNav,
  Section,
  Toolbar,
  Typography,
} from "..";
import {
  accountListItems,
  useAdminLayout,
  useCategoryLayout,
  useProfileLayout,
} from "../../../examples/";
import { skatt } from "../../../examples/avatar";
import { dialogContact } from "../../../examples/dialog";

const meta = {
  title: "Page/Patterns",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {
    owner: skatt,
    contact: dialogContact,
    breadcrumbs: [
      {
        label: "Forside",
      },
      {
        label: "Seksjon",
      },
      {
        label: "Side",
      },
    ],
    title: "Sidetittel",
    sections: [
      {
        id: "1",
        title: "Section 1",
        children: "Children 1",
      },
      {
        id: "2",
        title: "Section 2",
        children: "Children 2",
      },
      {
        id: "3",
        title: "Section 3",
        children: "Children 3",
      },
    ],
  },
};

export default meta;

export const ProfileDashboard = () => {
  const layout = useProfileLayout();
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <DashboardHeader
          name="Mathias Dyngeland"
          description="Født. XX.XX.XXXX YYYYYY"
        >
          <Typography>
            <h6>E-post</h6>
            <p>mathias@brann.no</p>
          </Typography>
        </DashboardHeader>
        <Grid spacing={2} cols={3}>
          <DashboardCard icon={{ svgElement: HeartIcon }} title="Mine aktører">
            Sett opp favoritter og grupper for aktørene dine.
          </DashboardCard>
          <DashboardCard
            icon={{ svgElement: BellIcon }}
            title="Mine varslinger"
          >
            Endre innstilinger for varslinger.
          </DashboardCard>
          <DashboardCard
            icon={{ svgElement: CogIcon }}
            title="Flere innstillinger"
          >
            Språk og andre preferanser.
          </DashboardCard>
        </Grid>
      </PageBase>
    </Layout>
  );
};

export const ProfileAccounts = () => {
  const { breadcrumbs } = meta.args;
  const layout = useProfileLayout();
  return (
    <Layout {...layout}>
      <PageBase color="person">
        <PageNav breadcrumbs={breadcrumbs} />
        <Section as="header" spacing={6}>
          <Heading size="xl">Mine aktører og favoritter</Heading>
          <Toolbar
            search={{ name: "q", placeholder: "Søk i listen" }}
            filters={[
              {
                name: "type",
                label: "Alle aktører",
                optionType: "radio",
                options: [
                  {
                    groupId: "1",
                    label: "Virksomheter",
                    value: "company",
                  },
                  {
                    groupId: "1",
                    label: "Personer",
                    value: "person",
                  },
                  {
                    groupId: "1",
                    label: "Grupper",
                    value: "group",
                  },
                  {
                    groupId: "2",
                    type: "checkbox",
                    name: "deleted",
                    label: "Vis slettede enheter",
                    value: "true",
                  },
                ],
              },
            ]}
          />
        </Section>
        <Section spacing={6}>
          <Heading size="lg">Favoritter og grupper</Heading>
          <AccountList
            items={accountListItems?.filter(
              (item) => item.type === "group" || item.favourite
            )}
          />
          <Heading size="lg">Andre aktører</Heading>
          <AccountList
            items={accountListItems?.filter(
              (item) => item.type !== "group" && !item.favourite
            )}
          />
        </Section>
      </PageBase>
    </Layout>
  );
};

export const CompanyDashboard = () => {
  const layout = useAdminLayout();
  return (
    <Layout {...layout}>
      <PageBase color="company">
        <DashboardHeader
          type="company"
          name="Bergen Bar"
          description="Org nr. XXXXXXXXX"
        >
          <Typography>
            <h6>Forretningsadresse</h6>
            <p>Lørenfaret 1C 0585 OSLO</p>
            <h6>Varslingsadresser</h6>
            <p>kontakt@digdir.no, +47 99999999</p>
          </Typography>
        </DashboardHeader>
        <Grid spacing={2} cols={3}>
          <DashboardCard icon={{ svgElement: HeartIcon }} title="Mine aktører">
            Sett opp favoritter og grupper for aktørene dine.
          </DashboardCard>
          <DashboardCard
            icon={{ svgElement: BellIcon }}
            title="Mine varslinger"
          >
            Endre innstilinger for varslinger.
          </DashboardCard>
          <DashboardCard
            icon={{ svgElement: CogIcon }}
            title="Flere innstillinger"
          >
            Språk og andre preferanser.
          </DashboardCard>
        </Grid>
      </PageBase>
    </Layout>
  );
};

export const ServicePage = () => {
  const { breadcrumbs, contact, sections } = meta.args;
  const layout = useCategoryLayout();
  return (
    <Layout {...layout}>
      <PageBase color="company">
        <PageNav breadcrumbs={breadcrumbs} />
        <Section as="header" spacing={2}>
          <Heading size="xl">Aksjonærregisteroppgaven</Heading>
          <Byline avatar={skatt} size="md">
            <strong>Skatteetaten</strong>
          </Byline>
        </Section>
        <Typography>
          <p>Oppsummering</p>
        </Typography>
        <Section
          spacing={4}
          style={{
            borderTop: "1px solid",
            borderColor: "var(--ds-color-border-subtle)",
            paddingTop: "1rem",
          }}
        >
          <Metadata
            variant="list"
            size="sm"
            items={[
              {
                icon: ClockDashedIcon,
                label: "Frist: 11. mai 2024",
              },
              {
                icon: HourglassIcon,
                label: "Behandlingstid: 14 dager",
              },
              {
                icon: CardIcon,
                label: "Gebyr: 500 kroner",
              },
            ]}
          />
          <footer data-color="article">
            <Button size="lg">Endre og levere aksjonærregisteroppgaven</Button>
          </footer>
        </Section>
        {sections && <AccordionSection items={sections} />}
        {contact && (
          <ContactSection
            {...contact}
            typographyProps={{
              size: "sm",
              theme: "subtle",
            }}
            variant="card"
            theme="surface"
          />
        )}
      </PageBase>
    </Layout>
  );
};
