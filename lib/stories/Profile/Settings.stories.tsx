import { useState, type ChangeEvent } from "react";

import {
  BellIcon,
  PaperplaneIcon,
  MobileIcon,
  GlobeIcon,
  HouseHeartIcon,
  PersonRectangleIcon,
  ExternalLinkIcon,
} from "@navikt/aksel-icons";
import type { Meta } from "@storybook/react-vite";
import { useAccountSettings, defaultAccounts } from "../../../examples";
import {
  PageBase,
  Toolbar,
  Divider,
  Fieldset,
  Radio,
  List,
  Heading,
  SettingsSection,
  SettingsList,
  type SettingsListProps,
  SettingsModal,
  type SettingsModalProps,
  Byline,
  Section,
  Typography,
  TextField,
  TextareaField,
  ButtonGroup,
  Button,
  MetaItem,
  AccountNotificationSettings,
  type AccountNotificationSettingsProps,
  type MetaItemProps,
  type AccountListItemProps,
} from "../../components";

const meta = {
  title: "Demo/Profile/Settings",
  tags: ["beta", "autodocs"],
  parameters: {},
  args: {},
} satisfies Meta<typeof SettingsSection>;

export default meta;

interface ContactProfileModalProps extends SettingsModalProps {
  type?: string;
  value?: string;
  readOnly?: boolean;
  items?: AccountListItemProps[];
}

const ContactProfileList = ({ items }: { items?: AccountListItemProps[] }) => {
  const [expanded, setExpanded] = useState<boolean>(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <Section spacing={1}>
      <MetaItem
        as="button"
        onClick={onToggle}
        size="xs"
        icon={items?.length && ({ items } as MetaItemProps["icon"])}
      >
        Brukes av {items?.length} aktører
      </MetaItem>

      {expanded && (
        <>
          <Divider />
          <List size="sm" spacing={1}>
            {items?.map((item, index) => {
              return (
                <>
                  {index > 0 && <Divider as="li" />}
                  <Byline
                    size="sm"
                    avatar={{ name: item.name, type: "company" }}
                  >
                    <strong>{item?.name}</strong>
                  </Byline>
                </>
              );
            })}
          </List>
        </>
      )}
    </Section>
  );
};

export const ContactProfileModal = ({
  title = "Endre varslingsprofil",
  icon = PersonRectangleIcon,
  type,
  value = "93250769",
  readOnly,
  items = [
    { id: "1", type: "person", name: "Alex Valencia" },
    { id: "2", type: "person", name: "Hans Brandthun" },
  ],
  open = true,
  onClose,
}: ContactProfileModalProps) => {
  return (
    <SettingsModal icon={icon} title={title} open={open} onClose={onClose}>
      <TextField
        label={type === "email" ? "E-postadresse" : "Mobiltelefon"}
        value={value}
        readOnly={readOnly}
        size="sm"
      />
      <ContactProfileList items={items} />

      {readOnly ? (
        <>
          {" "}
          <Typography size="sm">
            <p>
              Primære varslingsadresser hentes fra et felles kontaktregisteret
              for stat og kommune. Endre i{" "}
              <a href="#">Kontakt- og reservasjonsregisteret</a>.
            </p>
          </Typography>
          <ButtonGroup size="md">
            <Button variant="outline" icon={ExternalLinkIcon} reverse>
              {type === "email" ? "Endre e-postadresse" : "Endre mobiltelefon"}
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          {" "}
          <Typography size="sm">
            <p>
              Endringen vil oppdatere varslingsadresser på alle aktørene som
              bruker denne adressen.
            </p>
          </Typography>
          <ButtonGroup size="md">
            <Button onClick={onClose}>Lagre og avslutt</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </>
      )}
    </SettingsModal>
  );
};

export const PhoneSettingsModal = ({
  open = true,
  onClose,
}: SettingsModalProps) => {
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
          Altinn bruker kontaktinformasjon fra{" "}
          <a href="#">Kontakt- og reservasjonsregisteret</a>, et felles
          kontaktregister for stat og kommune.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button variant="outline" icon={ExternalLinkIcon} reverse>
          Endre mobiltelefon
        </Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const EmailSettingsModal = ({
  open = true,
  onClose,
}: SettingsModalProps) => {
  const user = defaultAccounts[0];
  return (
    <SettingsModal
      icon={PaperplaneIcon}
      title="Endre e-postadresse"
      open={open}
      onClose={onClose}
    >
      <TextField label="E-postadresse" value={user?.email} size="sm" readOnly />
      <Typography size="sm">
        <p>
          Altinn bruker kontaktinformasjon fra{" "}
          <a href="#">Kontakt- og reservasjonsregisteret</a>, et felles
          kontaktregister for stat og kommune.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button variant="outline" icon={ExternalLinkIcon} reverse>
          Endre e-postadresse
        </Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const AddressSettingsModal = ({
  open = true,
  onClose,
}: SettingsModalProps) => {
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
          Altinn bruker adressen din fra <a href="#">Folkeregisteret</a>.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button variant="outline" icon={ExternalLinkIcon} reverse>
          Endre adresse
        </Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const AlertSettingsModal = ({
  open = true,
  onClose,
}: SettingsModalProps) => {
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

interface LocaleSettingsModal extends SettingsModalProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const LocaleSettingsModal = ({
  open = true,
  onClose,
  value,
  onChange,
}: LocaleSettingsModal) => {
  const localeOptions: string[] = ["Bokmål", "Nynorsk", "English", "España"];
  return (
    <SettingsModal
      open={open}
      onClose={onClose}
      icon={GlobeIcon}
      title="Endre språk/language"
    >
      <Fieldset>
        {localeOptions.map((v) => (
          <Radio
            key={v}
            name="locale"
            label={v}
            value={v}
            checked={v === value}
            onChange={onChange}
          />
        ))}
      </Fieldset>
    </SettingsModal>
  );
};

interface SearchSettingsModalProps extends SettingsModalProps {
  id?: string;
  groupId?: string;
  items?: AccountListItemProps[];
  title?: string;
}

const SearchSettingsModal = ({
  id,
  groupId,
  open,
  onClose,
  ...item
}: SearchSettingsModalProps) => {
  switch (groupId) {
    case "profile":
      return <ContactProfileModal open={open} onClose={onClose} />;
    case "alerts":
      return (
        <>
          <ContactProfileModal
            {...item}
            readOnly={true}
            open={open && id === "smsAlerts"}
            onClose={onClose}
          />
          <ContactProfileModal
            {...item}
            readOnly={true}
            open={open && id === "emailAlerts"}
            onClose={onClose}
          />
        </>
      );
    case "contact":
      return (
        <>
          <PhoneSettingsModal
            {...item}
            open={open && id === "phone"}
            onClose={onClose}
          />
          <EmailSettingsModal
            {...item}
            open={open && id === "email"}
            onClose={onClose}
          />
          <AddressSettingsModal
            {...item}
            open={open && id === "address"}
            onClose={onClose}
          />
        </>
      );
    case "other":
      return (
        <>
          <LocaleSettingsModal {...item} open={open} onClose={onClose} />
        </>
      );
  }

  return (
    <SettingsModal
      {...(item as SettingsModalProps)}
      open={!!id}
      onClose={onClose}
    >
      <AccountNotificationSettings
        {...(item as AccountNotificationSettingsProps)}
      />
    </SettingsModal>
  );
};

interface SearchSettingsProps {
  title?: string;
  groups?: SettingsListProps["groups"];
}

export const SearchSettings = ({ title, groups }: SearchSettingsProps) => {
  const { items, onSettingsChange, ...settings } = useAccountSettings({
    accounts: defaultAccounts,
  });

  const [id, setId] = useState<string>("");

  const onClose = () => {
    setId("");
  };

  const searchGroups = groups || settings?.groups;
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
      <SearchSettingsModal
        {...(item as SearchSettingsModalProps)}
        title={item?.title as string}
        description={item?.description as string}
        open={!!id}
        onClose={onClose}
      />
    </PageBase>
  );
};

export const AlertSettings = () => {
  return (
    <SearchSettings
      title="Mine varslinger"
      groups={{
        alerts: {
          title: "Varslingsinnstillinger",
        },
        profile: {
          title: "Varslingsprofiler",
        },
        person: {
          title: "Personer",
        },
        company: {
          title: "Virksomheter",
        },
      }}
    />
  );
};

export const AllSettings = () => {
  return (
    <SearchSettings
      title="Innstillinger"
      groups={{
        contact: {
          title: "Kontaktinformasjon",
        },
        other: {
          title: "Flere innstillinger",
        },
      }}
    />
  );
};

export const DashboardSettings = () => {
  return (
    <SearchSettings
      groups={{
        contact: {
          title: "",
        },
      }}
    />
  );
};
