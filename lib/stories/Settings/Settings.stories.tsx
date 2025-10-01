import { useState, type ChangeEvent } from "react";

import {
  BellIcon,
  PaperplaneIcon,
  MobileIcon,
  GlobeIcon,
  HouseHeartIcon,
  PersonRectangleIcon,
  ExternalLinkIcon,
  PlusIcon,
} from "@navikt/aksel-icons";
import type { Meta } from "@storybook/react-vite";
import {
  useSettings,
  useAdmin,
  useSettingsToolbar,
  defaultAccounts,
  type UseSettingsProps,
} from "../../../examples";
import { brreg } from "../../../examples/avatar";
import {
  PageBase,
  Toolbar,
  Divider,
  Fieldset,
  Legend,
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
  title: "Demo/Settings",
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

interface SettingsValueModalProps extends SettingsModalProps {
  value?: string;
}

export const CompanyInfoModal = ({
  open = true,
  onClose,
}: SettingsModalProps) => {
  return (
    <SettingsModal
      icon={brreg}
      title="Endre opplysninger for virksomheten"
      open={open}
      onClose={onClose}
    >
      <Typography size="sm">
        <p>
          Hvis det har skjedd endringer i informasjonen som er registrert på
          selskapet, må du melde fra om dette i Samordnet registermelding.
        </p>
        <p>
          Samordet registermelding finner du på <a href="#">brreg.no</a>.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button variant="outline" icon={ExternalLinkIcon} reverse>
          Samordnet registermelding
        </Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const CompanyEmailSettingsModal = ({
  title = "Varslinger på e-post",
  icon = BellIcon,
  value = "post@diasporabergensis.no",
  open = true,
  onClose,
}: SettingsValueModalProps) => {
  const initialItems = value?.split(",") || [];
  const [items, setItems] = useState<string[]>(initialItems);

  const onAdd = (item: string) => {
    setItems((prevState) => {
      return [...prevState, item];
    });
  };

  return (
    <SettingsModal icon={icon} title={title} open={open} onClose={onClose}>
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
  title = "Varslinger på SMS",
  icon = BellIcon,
  value,
  open = true,
  onClose,
}: SettingsValueModalProps) => {
  const initialItems = value?.split(",") || [""];
  const [items, setItems] = useState<string[]>(initialItems);

  const onAdd = (item: string) => {
    setItems((prevState) => {
      return [...prevState, item];
    });
  };

  return (
    <SettingsModal icon={icon} title={title} open={open} onClose={onClose}>
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

interface AllSettingsModalProps extends SettingsModalProps {
  id?: string;
  groupId?: string;
  items?: AccountListItemProps[];
  title?: string;
}

const AllSettingsModal = ({
  id,
  groupId,
  open,
  onClose,
  ...item
}: AllSettingsModalProps) => {
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
    case "companyInfo":
      return <CompanyInfoModal {...item} open={open} onClose={onClose} />;

    case "companyAlerts":
      return (
        <>
          <CompanyPhoneSettingsModal
            {...item}
            open={open && id === "companyPhone"}
            onClose={onClose}
          />
          <CompanyEmailSettingsModal
            {...item}
            open={open && id === "companyEmail"}
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

export const AllSettings = ({
  query = {},
  groups,
  includeGroups,
  excludeGroups,
}: UseSettingsProps) => {
  const { onSettingsChange, results, ...settings } = useSettings({
    accounts: defaultAccounts,
    query,
    includeGroups,
    excludeGroups,
  });

  const [id, setId] = useState<string>("");

  const onClose = () => {
    setId("");
  };

  const items = settings?.items.map((item) => {
    const { id } = item;

    return {
      ...item,
      description: undefined,
      as: "button",
      onClick: () => id && setId(id),
    };
  });

  const item = (id && items.find((item) => item.id === id)) || {
    title: "",
    description: "",
  };

  const allGroups = {
    ...settings?.groups,
    ...groups,
  };

  return (
    <>
      {query?.q ? (
        <SettingsList
          groups={results?.groups}
          items={results?.items as SettingsListProps["items"]}
        />
      ) : (
        <SettingsList
          groups={allGroups}
          items={items as SettingsListProps["items"]}
        />
      )}
      <AllSettingsModal
        {...(item as AllSettingsModalProps)}
        title={item?.title as string}
        description={item?.description as string}
        open={!!id}
        onClose={onClose}
      />
    </>
  );
};

export const AlertSettings = () => {
  const toolbar = useSettingsToolbar({});

  return (
    <PageBase>
      <Heading size="xl">Mine varslinger</Heading>
      <Toolbar {...toolbar} />
      <AllSettings
        query={{
          q: toolbar?.search?.value,
        }}
        includeGroups={["alerts", "profile", "person", "company"]}
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
    </PageBase>
  );
};

export const AccountSettings = () => {
  const toolbar = useSettingsToolbar({});

  return (
    <PageBase>
      <Heading size="xl">Innstillinger</Heading>
      <Toolbar {...toolbar} />
      <AllSettings
        query={{
          q: toolbar?.search?.value,
        }}
        includeGroups={["contact", "other"]}
        groups={{
          contact: {
            title: "Kontaktinformasjon",
          },
          other: {
            title: "Flere innstillinger",
          },
        }}
      />
    </PageBase>
  );
};

export const PersonSettings = () => {
  const { accountMenu, currentAccount } = useAdmin({
    defaultAccountId: "person",
  });
  const toolbar = useSettingsToolbar({ accountMenu });

  return (
    <PageBase color="person">
      <Heading size="xl">Innstillinger for {currentAccount?.name}</Heading>
      <Toolbar {...toolbar} />
      <AllSettings
        query={{
          q: toolbar?.search?.value,
        }}
        includeGroups={["contact"]}
        groups={{
          contact: {
            title: "Kontaktinformasjon",
          },
        }}
      />
    </PageBase>
  );
};

export const CompanySettings = () => {
  const { accountMenu, currentAccount } = useAdmin({
    defaultAccountId: "diaspora",
  });
  const toolbar = useSettingsToolbar({ accountMenu });

  return (
    <PageBase color="company">
      <Heading size="xl">Innstillinger for {currentAccount?.name}</Heading>
      <Toolbar {...toolbar} />
      <AllSettings
        includeGroups={["companyAlerts", "companyInfo"]}
        query={{
          q: toolbar?.search?.value,
        }}
        groups={{
          companyAlerts: {
            title: "Varslingsadresser for virksomheten",
          },
          companyInfo: {
            title: "Opplysninger om virksomheten",
          },
        }}
      />
    </PageBase>
  );
};

export const AdminSettings = () => {
  const { currentAccount } = useAdmin({ defaultAccountId: "diaspora" });

  if (currentAccount?.type === "person") {
    return <PersonSettings />;
  }

  return <CompanySettings />;
};

export const DashboardSettings = () => {
  return (
    <AllSettings
      includeGroups={["contact"]}
      groups={{
        contact: {
          title: "",
        },
      }}
    />
  );
};
