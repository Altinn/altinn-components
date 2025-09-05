import { useState } from "react";

import {
  CogIcon,
  BellIcon,
  PaperplaneIcon,
  MobileIcon,
  Buildings2Icon,
  GlobeIcon,
  HandshakeIcon,
  PersonIcon,
  SunIcon,
  HouseHeartIcon,
  PersonRectangleIcon,
  HeartIcon,
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
  List,
  SettingsSection,
  SettingsItem,
  SettingsModal,
  Heading,
  Typography,
  TextField,
  TextareaField,
  ButtonGroup,
  Button,
  MetaItem,
  type MetaItemProps,
  type SettingsItemProps,
  type SettingsModalProps,
  type AccountListItemProps,
} from "../../components";

const meta = {
  title: "Demo/Profile/Settings",
  tags: ["beta", "autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof SettingsSection>;

export default meta;

export const DashboardSettings = () => {
  const user = defaultAccounts[0];
  return (
    <List size="sm" color="person">
      <SettingsItem
        icon={HeartIcon}
        title="Mine aktører"
        value="2 favoritter, 14 virksomheter"
        badge={{
          variant: "text",
          label: "Favoritter og grupper",
        }}
        as="a"
        href="?id=demo-profile--alerts-page"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={BellIcon}
        title="Mine varslingsadresser"
        value={user.email + ",  " + user.phone}
        badge={{
          variant: "text",
          label: "Endre varslinger",
        }}
        as="a"
        href="?id=demo-profile--alerts-page"
        linkIcon
      />
      <Divider as="li" />
      <SettingsItem
        icon={CogIcon}
        title="Alle innstillinger"
        linkIcon
        as="a"
        href="?id=demo-profile--settings-page"
      />
    </List>
  );
};

const PhoneSettingsModal = ({ open, onClose }: SettingsModalProps) => {
  const user = defaultAccounts[0];
  return (
    <SettingsModal
      icon={MobileIcon}
      title="Endre mobiltelefon"
      open={open}
      onClose={onClose}
    >
      <TextField label="Mobiltelefon" value={user?.phone} size="sm" readOnly />
      <Typography size="sm">
        <p>
          Altin bruker kontaktinformasjon fra Kontakt- og
          reservasjonsregisteret, et felles kontaktregister for stat og kommune.
          Gå videre for å endre.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Gå videre</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

const EmailSettingsModal = ({ open, onClose }: SettingsModalProps) => {
  const user = defaultAccounts[0];
  return (
    <SettingsModal
      icon={PaperplaneIcon}
      title="Endre mobiltelefon"
      open={open}
      onClose={onClose}
    >
      <TextField label="E-postadresse" value={user?.email} size="sm" readOnly />
      <Typography size="sm">
        <p>
          Altin bruker kontaktinformasjon fra Kontakt- og
          reservasjonsregisteret, et felles kontaktregister for stat og kommune.
          Gå videre for å endre.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Gå videre</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

const AddressSettingsModal = ({ open, onClose }: SettingsModalProps) => {
  const user = defaultAccounts[0];
  return (
    <SettingsModal
      icon={HouseHeartIcon}
      title="Endre adresse"
      open={open}
      onClose={onClose}
    >
      <TextareaField label="Adresse" value={user?.address} size="sm" readOnly />
      <Typography size="sm">
        <p>
          Altinn bruker adressen din fra Folkeregisteret. Gå videre for å endre
          adresse.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Gå videre</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const ContactSettings = () => {
  const user = defaultAccounts[0];
  const [openId, setOpenId] = useState<string>("");

  const settingsItems = [
    {
      id: "phone",
      groupId: "1",
      icon: MobileIcon,
      title: "Mobiltelefon",
      value: user?.phone,
      badgeLabel: "Endre mobil",
    },
    {
      id: "email",
      groupId: "1",
      icon: PaperplaneIcon,
      title: "E-postadresse",
      badgeLabel: "Endre e-post",
      value: user?.email,
    },
    {
      id: "address",
      groupId: "2",
      icon: HouseHeartIcon,
      title: "Adresse",
      badgeLabel: "Endre adresse",
      value: user?.address || "Idrettsveien 1, 5052 Bergen",
    },
  ].map((item) => {
    return {
      ...item,
      as: "button",
      linkIcon: true,
      badge: {
        variant: "text",
        label: item.badgeLabel,
      },
      onClick: () => setOpenId(item.id),
    };
  });

  return (
    <>
      <PhoneSettingsModal
        open={openId === "phone"}
        onClose={() => setOpenId("")}
      />
      <EmailSettingsModal
        open={openId === "email"}
        onClose={() => setOpenId("")}
      />
      <AddressSettingsModal
        open={openId === "address"}
        onClose={() => setOpenId("")}
      />

      <List size="sm">
        <SettingsItem {...(settingsItems[0] as SettingsItemProps)} />
        <Divider as="li" />
        <SettingsItem {...(settingsItems[1] as SettingsItemProps)} />
        <Divider as="li" />
        <SettingsItem {...(settingsItems[2] as SettingsItemProps)} />
      </List>
    </>
  );
};

const AlertSettingsModal = ({ open, onClose }: SettingsModalProps) => {
  return (
    <SettingsModal
      icon={BellIcon}
      title="Endre varslingsadresser"
      open={open}
      onClose={onClose}
    >
      <TextField label="Mobiltelefon" value="99005599" size="sm" readOnly />
      <TextField
        label="E-postadresse"
        value="mathias@hotmail.com"
        size="sm"
        readOnly
      />
      <Typography size="sm">
        <p>
          Altin bruker kontaktinformasjon fra Kontakt- og
          reservasjonsregisteret, et felles kontaktregister for stat og kommune.
          Gå videre for å endre.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Gå videre</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const AlertSettings = () => {
  const user = defaultAccounts[0];
  const [open, setOpen] = useState<boolean>(false);

  return (
    <>
      <AlertSettingsModal open={open} onClose={() => setOpen(false)} />

      <List size="sm">
        <SettingsItem
          color="person"
          icon={MobileIcon}
          title="Mobiltelefon"
          value={user.phone}
          badge={{
            label: "SMS",
          }}
          as="button"
          onClick={() => setOpen(true)}
          linkIcon
        />
        <Divider as="li" />
        <SettingsItem
          color="person"
          icon={PaperplaneIcon}
          title="E-postadresse"
          value={user.email}
          badge={{
            label: "E-post",
          }}
          as="button"
          onClick={() => setOpen(true)}
          linkIcon
        />
      </List>
    </>
  );
};

export const LinkSettings = () => {
  return (
    <>
      <List color="person">
        <SettingsItem
          as="a"
          href="?id=demo-profile--accounts-page"
          icon={HeartIcon}
          title="Mine aktører"
          badge={{ label: "3 profiler" }}
          linkIcon
        />
        <Divider as="li" />
        <SettingsItem
          as="a"
          href="?id=demo-profile--alerts-page"
          icon={BellIcon}
          title="Mine varslinger"
          badge={{ label: "12 aktører" }}
          linkIcon
        />
      </List>
    </>
  );
};

interface ContactProfileModalProps extends SettingsModalProps {
  type?: string;
  value?: string;
  items?: AccountListItemProps[];
}

const ContactProfileModal = ({
  type,
  value,
  items,
  open,
  onClose,
}: ContactProfileModalProps) => {
  return (
    <SettingsModal
      icon={PersonRectangleIcon}
      title="Endre varslingsadresse"
      open={open}
      onClose={onClose}
    >
      <TextField
        label={type === "email" ? "E-postadresse" : "Mobiltelefon"}
        value={value}
        size="sm"
      />

      <MetaItem
        size="xs"
        icon={items?.length && ({ items } as MetaItemProps["icon"])}
      >
        Brukes av {items?.length} aktører:
      </MetaItem>

      <Heading>Brukes av {items?.length} aktører:</Heading>

      <List size="xs">
        {items?.map((item, index) => {
          return (
            <>
              {index > 0 && <Divider as="li" />}
              <SettingsItem title={item?.name} icon={item} />
            </>
          );
        })}
      </List>

      <Typography size="sm">
        <p>Endringen vil oppdatere varslingsadresser på alle aktørene over.</p>
      </Typography>

      <ButtonGroup size="md">
        <Button onClick={onClose}>Lagre og avslutt</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const ContactProfiles = () => {
  const { contactList } = useAccountSettings({
    accounts: defaultAccounts,
  });

  const [openId, setOpenId] = useState<string>("");

  const profile =
    (openId && contactList?.find((item) => item.value === openId)) || {};

  return (
    <>
      <ContactProfileModal
        {...profile}
        open={openId ? true : false}
        onClose={() => setOpenId("")}
      />
      <List color="person">
        {contactList?.map((item, index) => {
          return (
            <>
              {index > 0 && <Divider as="li" />}
              <SettingsItem
                icon={PersonRectangleIcon}
                title={
                  item?.type === "email" ? "E-postadresse" : "Mobiltelefon"
                }
                value={item.value}
                badge={{
                  label: item?.items.length + " aktører",
                }}
                as="button"
                onClick={() => setOpenId(item.value)}
                linkIcon
              />
            </>
          );
        })}
      </List>
    </>
  );
};

export const ViewSettings = () => {
  const [modalId, setModalId] = useState<string>("");

  const localeOptions: string[] = ["Bokmål", "Nynorsk", "English", "España"];
  const modeOptions: string[] = ["Auto", "Lys", "Mørk"];

  const { settings, onChange } = useSettings({
    locale: localeOptions[0],
    mode: modeOptions[0],
    email: "E-post",
    phone: "SMS",
  });

  const onClose = () => {
    setModalId("");
  };

  return (
    <>
      <SettingsModal
        open={modalId === "mode"}
        onClose={onClose}
        icon={SunIcon}
        title="Endre modus"
      >
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
      </SettingsModal>
      <SettingsModal
        open={modalId === "locale"}
        onClose={onClose}
        icon={GlobeIcon}
        title="Endre språk/language"
      >
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
      </SettingsModal>
      <List size="sm">
        <SettingsItem
          icon={GlobeIcon}
          title="Språk/language"
          value={settings?.locale}
          linkIcon
          as="button"
          onClick={() => setModalId("locale")}
        />
        <Divider as="li" />
        <SettingsItem
          icon={SunIcon}
          title="Modus"
          value={settings.mode}
          linkIcon
          as="button"
          onClick={() => setModalId("mode")}
        />
      </List>
    </>
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
