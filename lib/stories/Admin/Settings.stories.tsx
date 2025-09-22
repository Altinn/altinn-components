import { useState, type ChangeEvent } from "react";
import {
  BellIcon,
  Buildings2Icon,
  PersonIcon,
  PersonSuitIcon,
  PaperplaneIcon,
  MobileIcon,
  CogIcon,
  BriefcaseIcon,
  GlobeIcon,
  HardHatIcon,
  HashtagIcon,
  PlusIcon,
  ChevronRightIcon,
} from "@navikt/aksel-icons";
import type { Meta } from "@storybook/react-vite";
import { useAdminLayout, useAccountMenu } from "../../../examples";
import {
  PageBase,
  Heading,
  Toolbar,
  SettingsList,
  type SettingsListProps,
  SettingsModal,
  type SettingsModalProps,
  Divider,
  SettingsSection,
  List,
  SettingsItem,
  ButtonGroup,
  Button,
  Typography,
  TextField,
  Fieldset,
  Legend,
} from "../../components";

const meta = {
  title: "Demo/Admin/Settings",
  tags: ["beta", "autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof SettingsSection>;

export default meta;

export const CompanyEmailSettingsModal = ({
  open = true,
  onClose,
}: SettingsModalProps) => {
  const { settings } = useAdminLayout({});

  const [items, setItems] = useState<string[]>(
    settings?.email ? [settings?.email] : []
  );

  const onAdd = (item: string) => {
    setItems((prevState) => {
      return [...prevState, item];
    });
  };

  return (
    <SettingsModal
      icon={PaperplaneIcon}
      title="Varslinger på e-post"
      open={open}
      onClose={onClose}
    >
      <Fieldset>
        <Legend>Virksomhetens e-postadresser for varslinger:</Legend>
        {items?.map((value) => {
          return (
            <TextField placeholder="Mobilnummer" value={value} size="sm" />
          );
        })}
      </Fieldset>

      <Button variant="outline" icon={PlusIcon} onClick={() => onAdd("")}>
        Legg til flere
      </Button>

      <Typography size="sm">
        <p>
          Altinn bruker adressene til å varsle virksomheten om nytt innhold.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Lagre og avslutt</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const CompanyPhoneSettingsModal = ({
  open,
  onClose,
}: SettingsModalProps) => {
  const [items, setItems] = useState<string[]>([""]);

  const onAdd = (item: string) => {
    setItems((prevState) => {
      return [...prevState, item];
    });
  };

  return (
    <SettingsModal
      icon={PaperplaneIcon}
      title="Varslinger på SMS"
      open={open}
      onClose={onClose}
    >
      <Fieldset>
        <Legend>Virksomhetens mobilnummer for varslinger på SMS:</Legend>
        {items?.map((value) => {
          return (
            <TextField placeholder="Mobilnummer" value={value} size="sm" />
          );
        })}
      </Fieldset>

      <Button variant="outline" icon={PlusIcon} onClick={() => onAdd("")}>
        Legg til flere
      </Button>

      <Typography size="sm">
        <p>
          Altinn bruker adressene til å varsle virksomheten om nytt innhold.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Lagre og avslutt</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const DashboardSettings = () => {
  const { settings } = useAdminLayout({});
  return (
    <List size="sm">
      <SettingsItem
        icon={Buildings2Icon}
        title="Forretningsadresse"
        value={settings?.address}
        linkIcon
        badge={<span data-size="xs">Endre på brreg.no</span>}
        as="a"
        href="/?path=/story/demo-profile--settings"
      />
      <Divider />
      <SettingsItem
        as="a"
        href="/?path=/story/demo-profile--notifications"
        icon={BellIcon}
        title="Varslingsadresser for virksomheten"
        value={[settings?.email, settings?.phone].join(", ")}
        badge={<span data-size="xs">Endre</span>}
        linkIcon
      />
      <Divider />
      <SettingsItem
        icon={CogIcon}
        title="Flere innstillinger"
        linkIcon
        as="a"
        href="/?path=/story/demo-profile--settings"
      />
    </List>
  );
};

export const AlertSettings = () => {
  const { settings } = useAdminLayout({});
  const [openId, setOpenId] = useState<string>("");

  return (
    <>
      <CompanyEmailSettingsModal
        open={openId === "email"}
        onClose={() => setOpenId("")}
      />
      <CompanyPhoneSettingsModal
        open={openId === "phone"}
        onClose={() => setOpenId("")}
      />
      <List size="sm">
        <SettingsItem
          icon={{ svgElement: PaperplaneIcon }}
          title="Varslinger på e-post"
          value={[settings?.email].join(", ")}
          badge={{ label: "1 adresse" }}
          as="button"
          onClick={() => setOpenId("email")}
          linkIcon
        />
        <Divider as="li" />
        <SettingsItem
          icon={{ svgElement: MobileIcon }}
          title="Varslinger på SMS"
          badge={{
            variant: "text",
            label: "Legg til",
          }}
          as="button"
          onClick={() => setOpenId("phone")}
          linkIcon
        />
      </List>
    </>
  );
};

export const CompanySettingsX = () => {
  const { settings } = useAdminLayout({});
  return (
    <List>
      <SettingsItem
        icon={{ svgElement: Buildings2Icon }}
        title="Organisasjonsnummer"
        value={settings?.companyId}
        badge={{ label: "Brreg.no", variant: "text" }}
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={{ svgElement: GlobeIcon }}
        title="Forretningsadresse"
        value={settings?.address}
        badge={{ label: "Brreg.no", variant: "text" }}
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={{ svgElement: BriefcaseIcon }}
        title="Organisasjonsform"
        value={settings?.companyType}
        badge={{ label: "Brreg.no", variant: "text" }}
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={{ svgElement: HardHatIcon }}
        title="Næringskode"
        value={settings?.naceCode}
        badge={{ label: "Brreg.no", variant: "text" }}
        linkIcon
      />
    </List>
  );
};

export const AccountantSettings = () => {
  return (
    <List>
      <SettingsItem
        icon={{ svgElement: PersonSuitIcon }}
        title="Regnskapsfører"
        value="Rask regnskap AS"
        badge={{ label: "Brreg.no", variant: "text" }}
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={{ svgElement: PersonSuitIcon }}
        title="Regnskapsfører"
        value="Rask regnskap AS"
        badge={{ label: "Brreg.no", variant: "text" }}
        linkIcon
      />
    </List>
  );
};

export const RoleSettings = () => {
  return (
    <List>
      <SettingsItem
        icon={PersonIcon}
        title="Paal Zandstra Krokeide (f. 1971)"
        description="Styrets leder"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={PersonIcon}
        title="Khorshid Rafei Tari (f. 1990)"
        description="Nestleder"
        linkIcon
      />

      <Divider as="li" />
      <SettingsItem
        icon={PersonIcon}
        title="Inge Fossland (f 1978)"
        description="Styremedlem"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={PersonIcon}
        title="Henrik Fimreite Børnes (f 1993)"
        description="Styremedlem"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={PersonIcon}
        title="Malin Isabelle Daviknes (f 1988)"
        description="Styremedlem"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={PersonIcon}
        title="Cecilie Heggen Strømsnes (f 1995)"
        description="Styremedlem"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={PersonIcon}
        title="Anna Eriksen Rio (f 1995)"
        description="Styremedlem"
        linkIcon
      />
    </List>
  );
};

export const SearchSettings = () => {
  const accountMenu = useAccountMenu({
    accountId: "diaspora",
  });

  const currentAccount = accountMenu?.currentAccount;

  const title = "Innstillinger for " + currentAccount?.name;

  const items = [
    {
      groupId: "companyAlerts",
      id: "companyEmail",
      icon: BellIcon,
      title: "Varslinger på e-post",
      value: "post@diasporabergensis.no",
      badge: {
        label: "1 adresse",
      },
    },
    {
      groupId: "companyAlerts",
      id: "companyPhone",
      icon: BellIcon,
      title: "Varslinger på sms",
    },
    {
      groupId: "companyInfo",
      id: "companyId",
      icon: HashtagIcon,
      title: "Organisasjonsnummer",
      value: "928 914 038",
    },
    {
      groupId: "companyInfo",
      id: "companyAddress",
      icon: Buildings2Icon,
      title: "Forretningsadresse",
      value: "c/o Paal Zandstra Krokeide, Høyenhallsvingen 16, 0667 Oslo",
      controls: (
        <Button variant="link" icon={ChevronRightIcon} reverse size="xs">
          Endre
        </Button>
      ),
    },
    {
      groupId: "companyInfo",
      id: "companyType",
      icon: BriefcaseIcon,
      title: "Organisasjonsform",
      value: "Forening/lag/innretning",
      controls: (
        <Button variant="link" icon={ChevronRightIcon} reverse size="xs">
          Endre
        </Button>
      ),
    },
    {
      groupId: "companyInfo",
      id: "naceCode",
      icon: HardHatIcon,
      title: "Næringskode",
      value: "94.992 Aktiviteter i andre medlemsorganisasjoner",
      controls: (
        <Button variant="link" icon={ChevronRightIcon} reverse size="xs">
          Endre
        </Button>
      ),
    },
  ];

  const groups = {
    companyAlerts: {
      title: "Varslingsadresser for virksomheten",
    },
    companyInfo: {
      title: "Opplysninger om virksomehten",
    },
  };

  const [id, setId] = useState<string>("");

  const onClose = () => {
    setId("");
  };

  const searchGroups = groups;
  const searchGroupsIds = Object.keys(searchGroups);

  const searchItems = items.map((item) => {
    const { id } = item;

    return {
      ...item,
      description: undefined,
      as: "button",
      onClick: () => id && setId(id),
    };
  });

  const [q, setQ] = useState("");

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  const filteredItems = searchItems
    ?.filter((item) => {
      const { title, value, groupId } = item;

      if (groupId && !searchGroupsIds.includes(groupId)) {
        return false;
      }

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
    .map((item) => {
      return {
        ...item,
        groupId: "search",
        highlightWords: [q],
      };
    });

  const item = (id && items.find((item) => item.id === id)) || {
    title: "",
    description: "",
  };

  return (
    <PageBase>
      {title && (
        <>
          <Heading size="xl">{title}</Heading>
          <Toolbar
            accountMenu={{
              ...accountMenu,
              isVirtualized: true,
            }}
            search={{
              name: "search",
              placeholder: "Søk i innstillinger",
              value: q,
              onChange: onSearchChange,
            }}
          />
        </>
      )}

      {q ? (
        <SettingsList
          groups={{
            search: {
              title: filteredItems?.length + " treff",
            },
          }}
          items={filteredItems as SettingsListProps["items"]}
        />
      ) : (
        <SettingsList
          groups={searchGroups}
          items={searchItems as SettingsListProps["items"]}
        />
      )}
      {(id === "companyEmail" && (
        <CompanyEmailSettingsModal open={!!id} onClose={onClose} />
      )) ||
        (id === "companyPhone" && (
          <CompanyPhoneSettingsModal open={!!id} onClose={onClose} />
        )) || (
          <SettingsModal
            {...(item as SettingsModalProps)}
            open={!!id}
            onClose={onClose}
          />
        )}
    </PageBase>
  );
};

export const AdminSettings = () => {
  return <SearchSettings />;
};
