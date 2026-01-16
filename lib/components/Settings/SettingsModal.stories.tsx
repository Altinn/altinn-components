import {
  BellIcon,
  ExternalLinkIcon,
  GlobeIcon,
  HouseHeartIcon,
  MinusIcon,
  MobileIcon,
  PaperplaneIcon,
  PersonRectangleIcon,
  PlusIcon,
} from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { type ChangeEvent, Fragment, useState } from 'react';
import {
  type AccountListItemProps,
  type BadgeProps,
  Button,
  ButtonGroup,
  Divider,
  Fieldset,
  IconButton,
  Legend,
  List,
  Radio,
  SettingsItem,
  SettingsModal,
  type SettingsModalProps,
  Switch,
  TextField,
  TextareaField,
  Typography,
  UsedByLog,
  type UsedByLogItemProps,
  type UsedByLogProps,
} from '..';
import { brreg } from '../../../examples/avatar';

const meta = {
  title: 'Settings/SettingsModal',
  component: SettingsModal,
  tags: ['beta'],
  parameters: {},
  args: {
    open: true,
    onClose: () => {
      return;
    },
  },
} satisfies Meta<typeof SettingsModal>;

export default meta;

interface ContactProfileModalProps extends SettingsModalProps {
  type?: 'email' | 'phone' | 'address';
  value?: string;
  readOnly?: boolean;
  usedByItems?: UsedByLogProps['items'];
}

const defaultUsedByItems = [
  {
    id: 'mathias',
    name: 'Mathias Dyngeland',
    badge: { label: 'deg', color: 'person' as BadgeProps['color'] },
    type: 'person',
  },
  {
    id: 'brann2',
    name: 'Brann 2',
    avatar: {
      variant: 'outline',
    },
    type: 'company',
  },
];

export const ContactProfileModal = ({
  icon = PersonRectangleIcon,
  title = 'Endre varslingsadresse',
  type = 'email',
  value = 'mathias@hotmail.com',
  readOnly = false,
  usedByItems,
  ...args
}: ContactProfileModalProps) => {
  const applcableUsedbyItems: UsedByLogItemProps[] = usedByItems || (defaultUsedByItems as UsedByLogItemProps[]);
  return (
    <SettingsModal {...args} icon={icon} title={title}>
      {type === 'phone' && <TextField label="Mobiltelefon" value={value} size="sm" readOnly={readOnly} />}
      {type === 'email' && <TextField label="E-postadresse" value={value} size="sm" readOnly={readOnly} />}
      {type === 'address' && (
        <TextareaField label="Adresse" value="Idrettsveien 1, 5000 Bergen" size="sm" readOnly={readOnly} />
      )}

      {usedByItems && (
        <UsedByLog
          endUserLabel="Deg"
          items={applcableUsedbyItems}
          title={'Brukes av ' + usedByItems?.length + ' aktører'}
        />
      )}

      {readOnly ? (
        <>
          <Typography size="sm">
            <p>
              Altinn bruker kontaktinformasjon fra <a href="https://digdir.no/">Kontakt- og reservasjonsregisteret</a>,
              et felles kontaktregister for stat og kommune.
            </p>
          </Typography>
          <ButtonGroup size="md">
            <Button variant="outline">
              <span>Endre kontaktinformasjon</span>
              <ExternalLinkIcon />
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          <Typography size="sm">
            <p>Endringen vil oppdatere adressen på alle aktørene som bruker denne adressen.</p>
          </Typography>
          <ButtonGroup size="md">
            <Button>Lagre og avslutt</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </>
      )}
    </SettingsModal>
  );
};

export const PhoneSettingsModal = ({ usedByItems, ...args }: ContactProfileModalProps) => {
  return (
    <ContactProfileModal
      {...args}
      icon={MobileIcon}
      title="Endre mobiltelefon"
      type="phone"
      value="99000000"
      usedByItems={
        usedByItems || [
          { id: '1', name: 'Bergen Bar', type: 'company' },
          { id: '2', name: 'Stavangerkameratene', type: 'company' },
        ]
      }
      readOnly
    />
  );
};

export const EmailSettingsModal = ({ usedByItems, ...args }: ContactProfileModalProps) => {
  return (
    <ContactProfileModal
      {...args}
      icon={PaperplaneIcon}
      title="Endre e-postadresse"
      type="email"
      value="mathias@brann.no"
      usedByItems={
        usedByItems || [
          {
            id: '1',
            name: 'Mathias Dyngeland',
            isEndUser: true,
          },
          { id: '2', name: 'Bergen Bar', type: 'company' },
          { id: '3', name: 'Stavangerkameratene', type: 'company' },
        ]
      }
      readOnly
    />
  );
};

export const AddressSettingsModal = (args: SettingsModalProps) => {
  return (
    <SettingsModal {...args} icon={HouseHeartIcon} title="Endre adresse">
      <TextareaField label="Adresse" value="Idrettsveien 1, 5000 Bergen" size="sm" readOnly />
      <Typography size="sm">
        <p>
          Altinn bruker adressen din fra <a href="https://skatteetaten.no/">Folkeregisteret</a>.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button variant="outline">
          <span>Endre adresse</span>
          <ExternalLinkIcon />
        </Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export interface AccountAlertsModalProps extends SettingsModalProps {
  phone?: string;
  phoneLabel?: string;
  email?: string;
  emailLabel?: string;
  smsAlerts?: boolean;
  emailAlerts?: boolean;
  readOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AccountAlertsModal = ({
  open = true,
  onClose,
  icon = {
    name: 'Bergen Bar',
    type: 'company',
  },
  title = 'Bergen Bar',
  description = 'Org nr. XXX XXX XXX',
  phone,
  phoneLabel = 'Varsle på SMS',
  email,
  emailLabel = 'Varsle på e-post',
  smsAlerts = false,
  emailAlerts = false,
  readOnly,
  onChange,
}: AccountAlertsModalProps) => {
  return (
    <SettingsModal icon={icon} title={title} description={description} open={open} onClose={onClose}>
      <Fieldset size="sm">
        {readOnly ? (
          <>
            <TextField readOnly name="phone" label="Varslinger på SMS" placeholder="Mobiltelefon" value={phone} />
            <TextField readOnly name="email" label="Varslinger på e-post" placeholder="E-postadresse" value={email} />
          </>
        ) : (
          <>
            <Switch label={phoneLabel} name="smsAlerts" value="SMS" checked={!!smsAlerts} onChange={onChange} />
            {smsAlerts && <TextField name="phone" placeholder="Mobiltelefon" value={phone} onChange={onChange} />}
            <Switch label={emailLabel} name="emailAlerts" value="E-post" checked={!!emailAlerts} onChange={onChange} />
            {emailAlerts && <TextField name="email" placeholder="E-postadresse" value={email} onChange={onChange} />}
          </>
        )}
      </Fieldset>
      {readOnly ? (
        <>
          <Typography size="sm">
            <p>
              Altinn bruker kontaktinformasjon fra <a href="https://digdir.no/">Kontakt- og reservasjonsregisteret</a>,
              et felles kontaktregister for stat og kommune.
            </p>
          </Typography>
          <ButtonGroup size="md">
            <Button variant="outline">
              <span>Endre varslingsadresser</span>
              <ExternalLinkIcon />
            </Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          <Typography size="sm">
            <p>
              Dette er dine personlige varslingsinnstillinger, ikke virksomhetens lovpålagte varslingsadresser. Disse
              finner du under "Fullmakter".
            </p>
          </Typography>
          <ButtonGroup size="md">
            <Button>Lagre</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </>
      )}
    </SettingsModal>
  );
};

export const UserAccountAlertsModal = ({
  open = true,
  onClose = () => alert('close'),
  phone = '99000000',
  email = 'mathias@hotmail.com',
  ...props
}) => {
  return <AccountAlertsModal {...props} open={open} onClose={onClose} phone={phone} email={email} readOnly={true} />;
};

interface AccountGroupsModalProps extends SettingsModalProps {
  items?: AccountListItemProps[];
}

export const AccountGroupsModal = ({
  open = true,
  onClose,
  icon = {
    name: 'Bergen Bar',
    type: 'company',
  },
  title = 'Bergen Bar',
  description = 'Org nr. XXX XXX XXX',
  items = [
    {
      id: 'g1',
      type: 'group',
      name: 'Gruppe 1',
      selected: true,
      icon: {
        items: [
          {
            type: 'company',
            name: 'Koko',
          },
          {
            name: 'Bergen Bar',
            type: 'company',
          },
        ],
      },
    },
    {
      id: 'g2',
      type: 'group',
      name: 'Gruppe 2',
      icon: {
        items: [
          {
            type: 'company',
            name: 'Poko',
          },
          {
            type: 'company',
            name: 'Loko',
          },
          {
            type: 'company',
            name: 'Doko',
          },
        ],
      },
    },
    {
      id: 'g3',
      type: 'group',
      name: 'Gruppe 3',
      icon: {
        items: [
          {
            type: 'person',
            name: 'Poko',
          },
          {
            type: 'person',
            name: 'Loko',
          },
          {
            type: 'person',
            name: 'Doko',
          },
        ],
      },
    },
  ],
}: AccountGroupsModalProps) => {
  return (
    <SettingsModal icon={icon} title={title} description={description} open={open} onClose={onClose}>
      <List size="sm" spacing={0}>
        {items?.map((item, index) => {
          return (
            <Fragment key={item.title}>
              {index > 0 && <Divider />}
              <SettingsItem
                id={item.id}
                icon={item.icon}
                title={item.name}
                controls={
                  <IconButton size="xs" variant={item?.selected ? 'outline' : 'solid'} label="Legg til">
                    {item?.selected ? <MinusIcon /> : <PlusIcon />}
                  </IconButton>
                }
              />
            </Fragment>
          );
        })}
      </List>
      <Button variant="outline" icon={PlusIcon}>
        Ny gruppe
      </Button>
    </SettingsModal>
  );
};

interface CompanyAlertsModalProps extends SettingsModalProps {
  type?: 'email' | 'phone';
  value?: string;
  readOnly?: boolean;
}

export const CompanyAlertsModal = ({
  type = 'email',
  title = 'Varslinger på e-post',
  icon = BellIcon,
  value = '',
  open = true,
  onClose,
}: CompanyAlertsModalProps) => {
  const initialItems = value?.split(',') || [];
  const [items, setItems] = useState<string[]>(initialItems);

  const onAdd = (item: string) => {
    setItems((prevState) => {
      return [...prevState, item];
    });
  };

  const legend = type === 'email' ? 'Virksomhetens e-postadresser' : 'Virksomhetens mobilnummer';
  const placeholder = type === 'email' ? 'E-postadresse' : 'Mobilnummer';

  return (
    <SettingsModal icon={icon} title={title} open={open} onClose={onClose}>
      <Fieldset size="sm">
        <Legend>{legend}</Legend>
        {items?.map((value, index) => {
          return <TextField placeholder={placeholder} value={value} size="sm" key={index} />;
        })}
      </Fieldset>
      <Button size="sm" variant="outline" icon={PlusIcon} onClick={() => onAdd('')}>
        Legg til
      </Button>

      <Typography size="sm">
        <p>Altinn bruker adressene til å varsle virksomheten om nytt innhold.</p>
      </Typography>
      <ButtonGroup size="md">
        <Button>Lagre og avslutt</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

export const CompanyEmailModal = (args: CompanyAlertsModalProps) => {
  return (
    <CompanyAlertsModal
      {...args}
      title="Varslinger på e-post"
      type="email"
      value="post@diasporabergensis.no, kontakt@diasporabergensis.no"
    />
  );
};

export const CompanyPhoneModal = (args: CompanyAlertsModalProps) => {
  return <CompanyAlertsModal {...args} title="Varslinger på SMS" type="phone" value="+47 909 00 000" />;
};

export const CompanyInfoModal = (args: SettingsModalProps) => {
  return (
    <SettingsModal {...args} icon={brreg} title="Endre opplysninger for virksomheten">
      <Typography size="sm">
        <p>
          Hvis det har skjedd endringer i informasjonen som er registrert på selskapet, må du melde fra om dette i
          Samordnet registermelding.
        </p>
        <p>
          Samordet registermelding finner du på <a href="https://brreg.no/">brreg.no</a>.
        </p>
      </Typography>
      <ButtonGroup size="md">
        <Button variant="outline">
          <span>Samordnet registermelding</span>
          <ExternalLinkIcon />
        </Button>
      </ButtonGroup>
    </SettingsModal>
  );
};

interface LocaleSettingsModal extends SettingsModalProps {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export const LocaleSettingsModal = ({ open = true, onClose, value, onChange }: LocaleSettingsModal) => {
  const localeOptions: string[] = ['Bokmål', 'Nynorsk', 'English', 'España'];
  return (
    <SettingsModal open={open} onClose={onClose} icon={GlobeIcon} title="Endre språk/language">
      <Fieldset size="sm">
        {localeOptions.map((v) => (
          <Radio key={v} name="locale" label={v} value={v} checked={v === value} onChange={onChange} />
        ))}
      </Fieldset>
      <ButtonGroup size="md">
        <Button>Lagre og avslutt</Button>
        <Button variant="outline">Avbryt</Button>
      </ButtonGroup>
    </SettingsModal>
  );
};
