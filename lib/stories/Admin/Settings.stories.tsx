import {
  BellIcon,
  Buildings2Icon,
  GlobeIcon,
  PersonIcon,
  PersonSuitIcon,
  SunIcon,
  PersonRectangleIcon,
} from "@navikt/aksel-icons";
import type { Meta } from "@storybook/react-vite";
import { useState } from "react";
import { useAdminLayout } from "../../../examples";
import {
  Divider,
  Heading,
  SettingsSection,
  List,
  SettingsItem,
  Typography,
  Button,
  Flex,
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
    <SettingsSection>
      <List size="sm">
        <SettingsItem
          icon={{ svgElement: Buildings2Icon }}
          title="Forretningsadresse"
          value={settings?.address}
          badge={<Typography size="xs">Endre hos brreg.no</Typography>}
          linkIcon
        />
        <Divider as="li" />
        <SettingsItem
          icon={{ svgElement: BellIcon }}
          title="Varslingsadresser"
          value={[settings?.email, settings?.phone].join(", ")}
          badge={<Typography size="xs">Endre</Typography>}
          linkIcon
        />
      </List>
    </SettingsSection>
  );
};

export const SecondarySettings = () => {
  return (
    <SettingsSection>
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
        <SettingsItem
          icon={GlobeIcon}
          title="Språk/language: Bokmål"
          linkIcon
        />
      </List>
    </SettingsSection>
  );
};

export const RoleSettings = () => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <SettingsSection>
      <Heading>Regnskapsfører og revisor</Heading>
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
      <Heading>Styre</Heading>
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

        {expanded && (
          <>
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
          </>
        )}
      </List>
      <Flex spacing={2} align="center">
        <Button variant="outline" size="sm" onClick={() => onToggle()}>
          Vis styremedlemmer
        </Button>
        <Typography size="xs">Kilde: Brønnøysundregistrene</Typography>
      </Flex>
    </SettingsSection>
  );
};
