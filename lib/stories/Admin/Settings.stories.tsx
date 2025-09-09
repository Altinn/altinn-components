import { useState } from "react";
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
  PlusIcon,
} from "@navikt/aksel-icons";
import type { Meta } from "@storybook/react-vite";
import { useAdminLayout } from "../../../examples";
import {
  Divider,
  SettingsSection,
  List,
  SettingsItem,
  SettingsModal,
  ButtonGroup,
  Button,
  Typography,
  TextField,
  Fieldset,
  type SettingsModalProps,
  Legend,
} from "../../components";

const meta = {
  title: "Demo/Admin/Settings",
  tags: ["beta", "autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof SettingsSection>;

export default meta;

const EmailSettingsModal = ({ open, onClose }: SettingsModalProps) => {
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
        <p>Altin bruker adressene til å varsle virksomheten om nytt innhold.</p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Lagre og avslutt</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

const PhoneSettingsModal = ({ open, onClose }: SettingsModalProps) => {
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
        <p>Altin bruker adressene til å varsle virksomheten om nytt innhold.</p>
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
      <EmailSettingsModal
        open={openId === "email"}
        onClose={() => setOpenId("")}
      />
      <PhoneSettingsModal
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

export const CompanySettings = () => {
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
