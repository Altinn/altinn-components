import {
  Heading,
  Layout,
  PageBase,
  Breadcrumbs,
  Typography,
  type HeaderProps,
  type LayoutProps,
} from "../components";
import {
  InboxFillIcon,
  HandshakeFillIcon,
  InformationSquareIcon,
  LeaveIcon,
} from "@navikt/aksel-icons";

import { useInboxLayout, useAdminLayout } from "../../examples";

const meta = {
  title: "Demo/Beta",
  tags: ["beta"],
  parameters: {
    layout: "fullscreen",
  },
  args: {},
};

export default meta;

export const InboxBeta = () => {
  const { ...layout } = useInboxLayout({ pageId: "s1" });

  const shortcuts = [
    {
      groupId: "shortcuts",
      id: "s1",
      size: "sm",
      icon: InformationSquareIcon,
      title: "Om Innboks Beta",
      selected: true,
    },
    {
      groupId: "shortcuts",
      id: "s2",
      size: "sm",
      icon: LeaveIcon,
      title: "Avslutt beta",
    },
  ];

  const sidebar = layout?.sidebar || {};
  const sidebarItems =
    sidebar?.menu?.items
      .filter((item) => item.href)
      .map((item) => {
        if (item?.id == "inbox") {
          return {
            ...item,
            iconBadge: undefined,
            badge: {
              label: "Beta",
            },
          };
        }

        return {
          ...item,
          badge: undefined,
        };
      }) || [];

  const iterimSidebar = {
    ...sidebar,
    menu: {
      ...sidebar?.menu,
      items: [...sidebarItems, ...shortcuts],
      groups: {
        shortcuts: {
          title: "Snarveier",
          defaultIconTheme: "undefined",
        },
      },
    },
  };

  const interimHeader = layout?.header;

  const interimGlobalMenu = {
    ...interimHeader?.menu,
    items: [
      {
        ...sidebarItems[0],
        icon: { theme: "tinted", svgElement: InboxFillIcon },
      },
      ...shortcuts,
    ],
  };

  const header = {
    ...interimHeader,
    menu: interimGlobalMenu,
  };

  return (
    <Layout
      {...layout}
      header={header as HeaderProps}
      sidebar={iterimSidebar as LayoutProps["sidebar"]}
    >
      <PageBase>
        <Breadcrumbs
          items={[
            {
              href: "#",
              label: "Innboks beta",
            },
            {
              label: "Om Innboks beta",
            },
          ]}
        />
        <Heading size="xl">Om Innboks Beta</Heading>
        <Typography>
          <p>
            Du ser nå på et nytt brukergrensesnitt for å vise dialoger,
            tjenester, data og post som er delt med deg fra det offentlige. På
            sikt skal løsningen erstatter dagens innboks i Altinn, men foreløpig
            ser du ikke alt her.
          </p>

          <h2>Hva finner du her?</h2>
          <ul>
            <li>Dialoger fra Skatteteten som gjelder bla bla bla.</li>
          </ul>

          <h2>Hva finner du ikke her?</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Dolere est nonummy.</li>
          </ul>

          <p>
            For å se disse meldingene må du gå til{" "}
            <a href="#">dagens innboks</a>.
          </p>

          <h2>Lanseringsplan</h2>
          <ul>
            <li>1. september 2025: Sniktitt på ny innboks (beta).</li>
            <li>1. januar 2026: Ny innboks erstatter dagens innboks.</li>
            <li>15. mai 2027: Vi skrur av gamle Altinn.</li>
          </ul>

          <h2>Gi tilbakemelding</h2>

          <p>Hva synes du om Innboks Beta? Gi oss tilbakemelding.</p>
        </Typography>
      </PageBase>
    </Layout>
  );
};

export const AdminBeta = () => {
  const { layout } = useAdminLayout({});

  const shortcuts = [
    {
      groupId: "shortcuts",
      id: "s1",
      size: "sm",
      icon: InformationSquareIcon,
      title: "Om Fullmakter Beta",
      selected: true,
    },
    {
      groupId: "shortcuts",
      id: "s2",
      size: "sm",
      icon: LeaveIcon,
      title: "Avslutt beta",
    },
  ];

  const sidebar = layout?.sidebar || {};
  const sidebarItems =
    sidebar?.menu?.items
      .slice(0, 3)
      .map((item) => {
        if (item?.id == "admin") {
          return {
            ...item,
            iconBadge: undefined,
            title: "Fullmakter",
            selected: false,
            badge: {
              label: "Beta",
            },
          };
        }

        return {
          ...item,
          badge: undefined,
        };
      })
      .filter((item) => !item.hidden) || [];

  const iterimSidebar = {
    ...sidebar,
    menu: {
      ...sidebar?.menu,
      items: [...sidebarItems, ...shortcuts],
      groups: {
        shortcuts: {
          title: "Snarveier",
          defaultIconTheme: "undefined",
        },
      },
    },
  };

  const interimHeader = layout?.header;

  const interimGlobalMenu = {
    ...interimHeader?.menu,
    items: [
      {
        ...sidebarItems[0],
        icon: { theme: "tinted", svgElement: HandshakeFillIcon },
        selected: false,
      },
      ...shortcuts,
    ],
  };

  const header = {
    ...interimHeader,
    search: undefined,
    menu: interimGlobalMenu,
  };

  return (
    <Layout
      {...layout}
      header={header as HeaderProps}
      sidebar={iterimSidebar as LayoutProps["sidebar"]}
    >
      <PageBase>
        <Breadcrumbs
          items={[
            {
              href: "#",
              label: "Fullmakter beta",
            },
            {
              label: "Om Fullmakter beta",
            },
          ]}
        />
        <Heading size="xl">Om Fullmakter Beta</Heading>
        <Typography>
          <p>
            Du ser nå på et nytt brukergrensesnitt for å vise dialoger,
            tjenester, data og post som er delt med deg fra det offentlige. På
            sikt skal løsningen erstatter dagens innboks i Altinn, men foreløpig
            ser du ikke alt her.
          </p>

          <h2>Hva finner du her?</h2>
          <ul>
            <li>Dialoger fra Skatteteten som gjelder bla bla bla.</li>
          </ul>

          <h2>Hva finner du ikke her?</h2>
          <ul>
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Dolere est nonummy.</li>
          </ul>

          <p>
            For å se disse meldingene må du gå til{" "}
            <a href="#">dagens innboks</a>.
          </p>

          <h2>Lanseringsplan</h2>
          <ul>
            <li>1. september 2025: Sniktitt på ny innboks (beta).</li>
            <li>1. januar 2026: Ny innboks erstatter dagens innboks.</li>
            <li>15. mai 2027: Vi skrur av gamle Altinn.</li>
          </ul>

          <h2>Gi tilbakemelding</h2>

          <p>Hva synes du om Innboks Beta? Gi oss tilbakemelding.</p>
        </Typography>
      </PageBase>
    </Layout>
  );
};
