import {
  BellIcon,
  Buildings2Icon,
  GlobeIcon,
  PersonIcon,
  PersonSuitIcon,
  PaperplaneIcon,
  MobileIcon,
  SunIcon,
  PersonRectangleIcon,
} from "@navikt/aksel-icons";
import type { Meta } from "@storybook/react-vite";
import { useAdminLayout } from "../../../examples";
import {
  Divider,
  SettingsSection,
  List,
  SettingsItem,
  Typography,
} from "../../components";

const meta = {
  title: "Demo/Admin/Settings",
  tags: ["beta", "autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof SettingsSection>;

export default meta;

export const PrimarySettings = () => {
  const { settings } = useAdminLayout({});

  return (
    <List size="sm">
      <SettingsItem
        icon={{ svgElement: PaperplaneIcon }}
        title="Varslinger på e-post"
        value={[settings?.email, settings?.phone].join(", ")}
        badge={<Typography size="xs">Endre</Typography>}
        linkIcon
      />
      <SettingsItem
        icon={{ svgElement: MobileIcon }}
        title="SMS-varslinger"
        badge={<Typography size="xs">Endre</Typography>}
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={{ svgElement: Buildings2Icon }}
        title="Forretningsadresse"
        value={settings?.address}
        badge={<Typography size="xs">Endre hos brreg.no</Typography>}
        linkIcon
      />
    </List>
  );
};

export const SecondarySettings = () => {
  return (
    <List>
      <SettingsItem
        as="a"
        href="/?path=/story/demo-profile--notifications"
        icon={BellIcon}
        title="Varslingsinngstillinger"
        badge={{ label: "12 aktører" }}
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={PersonRectangleIcon}
        title="Kontaktprofiler"
        badge={{ label: "3 profiler" }}
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem icon={SunIcon} title="Modus: Lys" linkIcon />
      <Divider />
      <SettingsItem icon={GlobeIcon} title="Språk/language: Bokmål" linkIcon />
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
        badge={<Typography size="xs">Endre hos brreg.no</Typography>}
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={{ svgElement: PersonSuitIcon }}
        title="Regnskapsfører"
        value="Rask regnskap AS"
        badge={<Typography size="xs">Endre hos brreg.no</Typography>}
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
