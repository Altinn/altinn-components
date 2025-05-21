import {
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
import type { Meta } from "@storybook/react";
import { useState, Fragment } from "react";
import { useSettings, useAccountList } from "../../../examples";
import {
  Divider,
  Fieldset,
  Radio,
  Section,
  Settings,
  List,
  SettingsItem,
  Switch,
  TextField,
  Typography,
} from "../../components";

const meta = {
  title: "Demo/Profile/Settings",
  tags: ["beta", "autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof Settings>;

export default meta;

export const ContactSettings = () => {
  return (
    <Settings>
      <List size="sm">
        <SettingsItem
          icon={{ svgElement: PaperplaneIcon }}
          title="Primær e-postadresse"
          value="mathias@dyngeland.no"
          badge={
            <Typography size="xs">
              Endre i kontakt- og reservasjonsregisteret
            </Typography>
          }
          linkIcon
        />
        <Divider />
        <SettingsItem
          icon={{ svgElement: MobileIcon }}
          title="SMS-varslinger"
          value="99055456"
          badge={
            <Typography size="xs">
              Endre i kontakt- og reservasjonsregisteret
            </Typography>
          }
          linkIcon
        />
        <Divider />
        <SettingsItem
          icon={{ svgElement: HouseHeartIcon }}
          title="Postadresse"
          value="Idrettsveien 1, 5052 Bergen"
          badge={<Typography size="xs">Endre i Folkeregisteret</Typography>}
          linkIcon
        />
      </List>{" "}
    </Settings>
  );
};

export const MoreSettings = () => {
  return (
    <Settings>
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
    </Settings>
  );
};

export const AccountSettings = () => {
  const { items, expandedId, onToggle } = useAccountList();

  return (
    <Settings>
      <List size="sm">
        {items
          ?.filter((item) => item.type === "company")
          .map((item, index) => {
            const itemId = item.id || "i" + index;
            return (
              <Fragment key={item.id}>
                {index > 0 && <Divider />}

                <SettingsItem
                  as="button"
                  linkIcon
                  expanded={itemId === expandedId}
                  collapsible
                  onClick={() => onToggle?.(itemId)}
                  icon={item.icon}
                  title={item.title}
                  description={undefined}
                  badge={
                    index === 2 && {
                      label: "E-post og SMS",
                    }
                  }
                >
                  <Section padding={6}>
                    <CompanyNotifications />
                  </Section>
                </SettingsItem>
              </Fragment>
            );
          })}
      </List>
    </Settings>
  );
};

export const NotificationSettings = () => {
  const { settings, onChange } = useSettings({
    alerts: "on",
    mobile: "on",
    email: "on",
  });
  return (
    <Settings>
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
              icon={{ svgElement: PaperplaneIcon, theme: "default" }}
              title="Varslingsadresse for e-post"
              value="mathias.dyngeland@gmail.com"
              badge={<span data-size="xs">Endre epost</span>}
              linkIcon
            />
            <Divider as="li" />
            <SettingsItem
              icon={{ svgElement: MobileIcon, theme: "default" }}
              title="SMS-varslinger"
              value="99009900"
              badge={<span data-size="xs">Endre mobilnummer</span>}
              linkIcon
            />
          </>
        )}
      </List>
    </Settings>
  );
};

export const SettingsList = () => {
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

export const CollapsibleList = () => {
  const [expandedId, setExpandedId] = useState<string | null>("locale");

  const localeOptions: string[] = ["Bokmål", "Nynorsk", "English", "España"];
  const modeOptions: string[] = ["Auto", "Lys", "Mørk"];

  const { settings, onChange } = useSettings({
    locale: localeOptions[0],
    mode: modeOptions[0],
    email: "E-post",
    phone: "SMS",
  });

  const badgeLabel =
    (settings.email && settings.phone && "E-post og SMS") ||
    (settings.email && "E-post") ||
    (settings.phone && "SMS");

  const badge = badgeLabel && { label: badgeLabel };

  const onToggle = (id: string) => {
    setExpandedId((prevState) => (prevState === id ? null : id));
  };

  return (
    <List size="sm" spacing={0}>
      <SettingsItem
        icon={BellIcon}
        title={badge ? "Varslinger er på" : "Varslinger er skrudd av"}
        collapsible
        expanded={expandedId === "1"}
        onClick={() => onToggle("1")}
        badge={badge}
        linkIcon
      >
        <Section padding={6} spacing={6}>
          <Fieldset>
            <Switch
              label="Varsle på e-post"
              name="email"
              value="E-post"
              checked={!!settings.email}
              onChange={onChange}
            />
            {settings.email && <TextField placeholder="E-postadresse" />}
          </Fieldset>
          <Fieldset>
            <Switch
              label="Varsle på SMS"
              name="phone"
              value="SMS"
              checked={!!settings.phone}
              onChange={onChange}
            />
            {settings.phone && <TextField placeholder="Mobiltelefon" />}
          </Fieldset>
        </Section>
      </SettingsItem>
      <Divider as="li" />
      <SettingsItem
        collapsible
        expanded={expandedId === "2"}
        icon={SunIcon}
        title={"Modus: " + settings.mode}
        linkIcon
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
        title={"Språk/language: " + settings.locale}
        linkIcon
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

export const CompanyNotifications = () => {
  const { settings, onChange } = useSettings({
    email: "E-post",
    phone: "SMS",
  });

  return (
    <div data-size="sm">
      <Fieldset>
        <Switch
          label="Varsle på e-post"
          name="email"
          value="E-post"
          checked={!!settings.email}
          onChange={onChange}
        />
        {settings.email && <TextField placeholder="E-postadresse" />}
      </Fieldset>
      <Divider />
      <Fieldset>
        <Switch
          label="Varsle på SMS"
          name="phone"
          value="SMS"
          checked={!!settings.phone}
          onChange={onChange}
        />
        {settings.phone && <TextField placeholder="Mobiltelefon" />}
      </Fieldset>
    </div>
  );
};
