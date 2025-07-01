import { useState } from "react";

import {
  CogIcon,
  BellIcon,
  BellDotIcon,
  PaperplaneIcon,
  MobileIcon,
  Buildings2Icon,
  GlobeIcon,
  HandshakeIcon,
  PersonIcon,
  SunIcon,
  HouseHeartIcon,
  PersonRectangleIcon,
} from "@navikt/aksel-icons";
import type { Meta } from "@storybook/react-vite";
import {
  useSettings,
  useAccountSettings,
  defaultAccounts,
} from "../../../examples";
import {
  Divider,
  Fieldset,
  Radio,
  Section,
  List,
  SettingsSection,
  SettingsItem,
  Switch,
  Typography,
  Modal,
  type SettingsItemProps,
  ButtonGroup,
  Button,
} from "../../components";

const meta = {
  title: "Demo/Profile/Settings",
  tags: ["beta", "autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof SettingsSection>;

export default meta;

export const DashboardSettings = () => {
  return (
    <List size="sm">
      <SettingsItem
        as="a"
        href="?id=demo-profile--notifications-page"
        icon={BellIcon}
        title="Varslinger er på"
        description="Alle varslinger"
        badge={{ label: "SMS og Epost" }}
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={CogIcon}
        title="Flere innstillinger"
        linkIcon
        as="a"
        href="?id=demo-profile--settings-page"
      />
    </List>
  );
};

export const ContactSettings = () => {
  const { items } = useAccountSettings({
    accounts: defaultAccounts,
  });

  const user = items[0];

  const [openId, setOpenId] = useState<string>("");

  const settingsItems = [
    {
      id: "phone",
      groupId: "1",
      icon: MobileIcon,
      title: "SMS-varslinger",
      value: user?.phone,
      badge: {
        variant: "text",
        label: "Endre mobil",
      },
    },
    {
      id: "email",
      groupId: "1",
      icon: PaperplaneIcon,
      title: "Varslinger på e-post",
      value: user?.email,
      badge: {
        variant: "text",
        label: "Endre e-post",
      },
    },
    {
      id: "address",
      groupId: "2",
      icon: HouseHeartIcon,
      title: "Adresse",
      value: user?.address || "Idrettsveien 1, 5052 Bergen",
      badge: {
        variant: "text",
        label: "Endre adresse",
      },
    },
  ].map((item) => {
    return {
      ...item,
      linkIcon: true,
      as: "button",
      onClick: () => setOpenId(item.id),
    };
  });

  return (
    <>
      <Modal
        open={openId === "email" || openId === "phone"}
        onClose={() => setOpenId("")}
      >
        <Typography>
          <h1>Endre epost eller telefon</h1>
          <p>
            E-post og mobiltelefon endres i et felles kontaktregister som stat
            og kommune skal bruke når de kontakter deg.
          </p>
          <ButtonGroup>
            <Button>Gå videre</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </Typography>
      </Modal>
      <Modal open={openId === "address"} onClose={() => setOpenId("")}>
        <Typography>
          <h1>Endre adresse</h1>
          <p>Adresseendring meldes til Folkeregisteret.</p>
          <ButtonGroup>
            <Button>Gå videre</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </Typography>
      </Modal>
      <List size="sm">
        <SettingsItem {...(settingsItems[0] as SettingsItemProps)} />
        <SettingsItem {...(settingsItems[1] as SettingsItemProps)} />
        <Divider as="li" />
        <SettingsItem {...(settingsItems[2] as SettingsItemProps)} />
      </List>
    </>
  );
};

export const MoreSettings = () => {
  return (
    <List>
      <SettingsItem
        as="a"
        href="?id=demo-profile--notifications-page"
        icon={BellIcon}
        title="Varslingsinnstillinger"
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
    </List>
  );
};

export const NotificationSettings = () => {
  const { settings, onChange } = useSettings({
    alerts: "on",
    mobile: "on",
    email: "on",
  });
  return (
    <List>
      <SettingsItem
        icon={settings.alerts ? BellDotIcon : BellIcon}
        title={settings.alerts ? "Varslinger er på" : "Ingen varslinger"}
        controls={
          <Switch
            name="alerts"
            onChange={onChange}
            checked={!!settings?.alerts}
            reverse
            size="sm"
            label={
              <span data-size="xs">
                {settings.alerts ? "Skru av " : "Skru på "}
              </span>
            }
          />
        }
      />
      {settings.alerts && (
        <>
          <Divider as="li" />
          <SettingsItem
            icon={PaperplaneIcon}
            title="Varslingsadresse for e-post"
            value="mathias.dyngeland@gmail.com"
            badge={<span data-size="xs">Endre epost</span>}
            linkIcon
          />
          <SettingsItem
            icon={MobileIcon}
            title="SMS-varslinger"
            value="99009900"
            badge={<span data-size="xs">Endre mobilnummer</span>}
            linkIcon
          />
        </>
      )}
    </List>
  );
};

export const EtceteraSettings = () => {
  return (
    <List size="sm">
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

export const CollapsibleSettings = () => {
  const [expandedId, setExpandedId] = useState<string>("");

  const localeOptions: string[] = ["Bokmål", "Nynorsk", "English", "España"];
  const modeOptions: string[] = ["Auto", "Lys", "Mørk"];

  const { settings, onChange } = useSettings({
    locale: localeOptions[0],
    mode: modeOptions[0],
    email: "E-post",
    phone: "SMS",
  });

  const onToggle = (id: string) => {
    setExpandedId((prevState) => (prevState === id ? "" : id));
  };

  return (
    <List size="sm">
      <SettingsItem
        collapsible
        expanded={expandedId === "2"}
        icon={SunIcon}
        title="Modus"
        badge={{ label: settings.mode as string }}
        linkIcon
        as="button"
        onClick={() => onToggle("2")}
      >
        <Section padding={6} spacing={6}>
          <Fieldset>
            {modeOptions.map((value) => (
              <Radio
                key={value}
                name="mode"
                label={value}
                value={value}
                checked={settings.mode === value}
                onChange={onChange}
              />
            ))}
          </Fieldset>
        </Section>
      </SettingsItem>
      <Divider as="li" />
      <SettingsItem
        collapsible
        expanded={expandedId === "locale"}
        icon={GlobeIcon}
        title="Språk/language"
        badge={{ label: settings.locale as string }}
        linkIcon
        as="button"
        onClick={() => onToggle("locale")}
      >
        <Section padding={6} spacing={6}>
          <Fieldset>
            {localeOptions.map((value) => (
              <Radio
                key={value}
                name="locale"
                label={value}
                value={value}
                checked={settings.locale === value}
                onChange={onChange}
              />
            ))}
          </Fieldset>
        </Section>
      </SettingsItem>
    </List>
  );
};

export const CompanySettings = () => {
  return (
    <List spacing={0} size="sm">
      <SettingsItem
        icon={{ svgElement: Buildings2Icon, theme: "default" }}
        title="Organisasjonsnummer"
        value="928914038"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={{ svgElement: HandshakeIcon, theme: "default" }}
        title="Rolle og rettigheter"
        value="Daglig leder"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        color="neutral"
        icon={{ svgElement: BellIcon, theme: "default" }}
        title="Ingen varslinger"
        badge={<Typography size="xs">Sett opp varsling</Typography>}
        linkIcon
      />
    </List>
  );
};

export const PersonSettings = () => {
  return (
    <List spacing={0} size="sm">
      <SettingsItem
        icon={{ svgElement: PersonIcon, theme: "default" }}
        title="Fødselsnummer"
        value="180505 XXXXXX"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={{ svgElement: HandshakeIcon, theme: "default" }}
        title="Rolle og rettigheter"
        value="Daglig leder"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={{ svgElement: BellIcon, theme: "default" }}
        title="Varslinger: På"
        badge={{ label: "E-post og SMS" }}
        linkIcon
      />
    </List>
  );
};
