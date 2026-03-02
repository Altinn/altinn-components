import { PersonRectangleIcon, SealCheckmarkIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { type ReactNode, useState } from 'react';
import {
  Badge,
  type BadgeProps,
  Button,
  ButtonGroup,
  Field,
  Fieldset,
  Input,
  type InputProps,
  Label,
  Select,
  type SelectProps,
  SettingsModal,
  Switch,
  TextField,
  Typography,
  UsedByLog,
  type UsedByLogProps,
} from '..';

const meta = {
  title: 'Settings/VerifySettingsModal',
  component: SettingsModal,
  tags: ['beta'],
  parameters: {},
  args: {
    open: true,
  },
} satisfies Meta<typeof SettingsModal>;

export default meta;

const defaultUsedByItems: UsedByLogProps['items'] = [
  {
    id: 'mathias',
    name: 'Mathias Dyngeland',
    badge: { label: 'deg', color: 'person' as BadgeProps['color'] },
    type: 'person',
  },
  {
    id: 'brann',
    name: 'Sportsklubben Brann',
    type: 'company',
  },
  {
    id: 'brann-2',
    name: 'Brann 2',
    type: 'company',
  },
];

const defaultVerifiedEmails = ['mathias@hotmail.com', 'mathias@fotball.no', 'mathias@brann.no'];

interface TemplateProps {
  selectable?: boolean;
  accountId?: string;
  disabled?: boolean;
  defaultSms?: string;
  defaultValue: string;
  defaultState?: string;
  verifyCode?: string;
  defaultCodeSent?: boolean;
  readOnly?: boolean;
}

interface VerifyFieldProps extends InputProps {
  children?: ReactNode;
  verified?: boolean;
  label?: string;
}

const VerifyField = ({ children, label, value, verified = false, ...props }: VerifyFieldProps) => (
  <Field>
    <Label size="sm">{label}</Label>
    <div style={{ position: 'relative' }}>
      {children ? (
        children
      ) : (
        <Input placeholder="Ny e-postadresse" value={value} {...props} autoComplete="off" data-1p-ignore />
      )}
      {value && (
        <span data-size="sm" style={{ position: 'absolute', right: 0, top: 0, margin: '.5em' }}>
          <Badge color={verified ? 'success' : 'company'}>{verified ? 'Verifisert' : 'Ny adresse'}</Badge>
        </span>
      )}
    </div>
  </Field>
);

interface VerifySelectFieldProps extends SelectProps {
  options?: string[];
}

const VerifySelectField = ({ options, value, onChange }: VerifySelectFieldProps) => {
  return (
    <Select size="sm" name="verify" value={value} onChange={onChange}>
      <optgroup label="Verifiserte adresser">
        {options?.map((option) => {
          return (
            <option key={option} value={option}>
              {option}
            </option>
          );
        })}
      </optgroup>
      <option value="new">Ny adresse ...</option>
    </Select>
  );
};

interface VerifyFooterProps {
  validEmail?: boolean;
  verified?: boolean;
  code?: string;
  codeSent?: boolean;
  onSendCode?: () => void;
  onVerifyCode?: () => void;
  onCancel?: () => void;
}

const VerifyFooter = ({
  verified,
  validEmail,
  code,
  codeSent,
  onVerifyCode,
  onSendCode,
  onCancel,
}: VerifyFooterProps) => {
  return (
    <footer>
      {codeSent ? (
        <ButtonGroup size="md">
          <Button onClick={onVerifyCode} disabled={code?.length !== 6}>
            Verifiser kode
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Avbryt
          </Button>
          <Button variant="ghost" onClick={onSendCode}>
            <span data-size="sm">Send ny kode</span>
          </Button>
        </ButtonGroup>
      ) : (
        <>
          {!verified ? (
            <ButtonGroup size="md">
              <Button variant="tinted" disabled={!validEmail} onClick={onSendCode}>
                Send kode
              </Button>
              <Button variant="outline">Avbryt</Button>
              <Button variant="ghost">
                <span data-size="sm">Lagre uten å verifisere</span>
              </Button>
            </ButtonGroup>
          ) : (
            <ButtonGroup size="md">
              <Button>Lagre</Button>
              <Button variant="outline">Avbryt</Button>
            </ButtonGroup>
          )}
        </>
      )}
    </footer>
  );
};

const Template = ({
  selectable,
  accountId,
  readOnly,
  defaultSms = '99009900',
  defaultState,
  defaultValue = '',
  defaultCodeSent,
}: TemplateProps) => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(defaultValue);
  const [codeSent, setCodeSent] = useState(defaultCodeSent);
  const [code, setCode] = useState('');
  const [verifiedEmails, setVerifiedEmails] = useState(defaultVerifiedEmails);
  const [verifiedSms, setVerifiedSms] = useState(['99009900']);
  const [smsSent, setSmsSent] = useState(false);

  const state = defaultState;
  const verified = verifiedEmails.includes(value);
  const smsVerified = verifiedSms.includes(value);

  const [emailAlerts, setEmailAlerts] = useState(true);
  const [smsAlerts, setSmsAlerts] = useState(true);
  const [smsValue, setSmsValue] = useState(defaultSms);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);
  const onSmsChange = (e: React.ChangeEvent<HTMLInputElement>) => setSmsValue(e.target.value);

  const [selectNew, setSelectNew] = useState(false);

  const onSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    if (value === 'new') {
      setSelectNew(true);
      setValue('');
    } else {
      setValue(e.target.value);
    }
  };

  const validEmail = value?.includes('@') && value?.includes('.');

  const onToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'smsAlerts') setSmsAlerts(e.target.checked);
    else setEmailAlerts(e.target.checked);
  };

  const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => setCode(e.target.value);

  const onSendCode = () => {
    setCodeSent(true);
  };

  const onCancel = () => {
    setCodeSent(false);
  };

  const onVerifyCode = () => {
    if (!verified) {
      setVerifiedEmails((prev) => [...prev, value]);
      setCodeSent(false);
    }

    if (!smsVerified && !smsSent) {
      setSmsSent(true);
    } else if (!smsVerified) {
      setVerifiedSms((prev) => [...prev, defaultSms]);
      setSmsSent(false);
    }
  };

  // Branch 1: Verification View

  if (codeSent) {
    return (
      <SettingsModal
        open={open}
        onClose={() => setOpen(false)}
        icon={SealCheckmarkIcon}
        title={'Verifiser e-postadresse'}
      >
        <TextField readOnly={true} label="E-postadresse" size="sm" value={value} onChange={onChange} />

        <TextField
          label="Kode (6 siffer)"
          autoComplete="off"
          placeholder="6-sifret kode"
          size="sm"
          value={code}
          maxLength={6}
          onChange={onCodeChange}
        />

        <Typography size="sm">
          <p>Oppgi koden du fikk på e-post for å verifisere addressen.</p>
        </Typography>

        <VerifyFooter
          verified={verified}
          code={code}
          codeSent={true}
          onSendCode={onSendCode}
          onVerifyCode={onVerifyCode}
          onCancel={onCancel}
        />
      </SettingsModal>
    );
  }

  // verify mobile

  if (smsSent) {
    return (
      <SettingsModal
        open={open}
        onClose={() => setOpen(false)}
        icon={SealCheckmarkIcon}
        title={'Verifiser mobiltelefon'}
      >
        <TextField readOnly={true} label="Mobiltelefon" size="sm" value={defaultSms} />

        <TextField
          label="Kode (6 siffer)"
          autoComplete="off"
          placeholder="6-sifret kode"
          size="sm"
          value={code}
          maxLength={6}
          onChange={onCodeChange}
        />

        <Typography size="sm">
          <p>Oppgi koden du fikk på SMS for å verifisere mobiltelefon.</p>
        </Typography>

        <VerifyFooter
          verified={verified}
          code={code}
          codeSent={true}
          onSendCode={onSendCode}
          onVerifyCode={onVerifyCode}
          onCancel={onCancel}
        />
      </SettingsModal>
    );
  }

  // Branch 2: Account View
  if (accountId && state === 'account') {
    const account = defaultUsedByItems?.find((item) => item.id === accountId);

    return (
      <SettingsModal
        open={open}
        onClose={() => setOpen(false)}
        icon={account}
        title={account?.name}
        description="Org nr. XXX XXX XXX"
      >
        <Fieldset size="sm">
          <Switch label="Varslinger på SMS" name="smsAlerts" checked={smsAlerts} onChange={onToggle} />
          {smsAlerts && (
            <VerifyField
              verified={smsVerified}
              name="phone"
              placeholder="Mobiltelefon"
              value={smsValue}
              onChange={onSmsChange}
            />
          )}

          <Switch label="Varslinger på e-post" name="emailAlerts" checked={emailAlerts} onChange={onToggle} />
          {emailAlerts && (
            <VerifyField
              verified={verified}
              name="email"
              placeholder="E-postadresse"
              value={value}
              onChange={onChange}
            />
          )}
        </Fieldset>

        <Typography size="sm">
          {!verified ? (
            <p>Nye adresser må verifiseres før du kan motta varslinger.</p>
          ) : (
            <p>
              Dette er dine personlige varslinger, ikke virksomhetens lovpålagte varslingsadresser.{' '}
              <a href="/?path=/story/settings-settingsmodal--single-service-settings-modal">
                Sett opp varsling for enkelttjenester.
              </a>
            </p>
          )}
        </Typography>

        <VerifyFooter validEmail={validEmail} verified={verified} onSendCode={onSendCode} />
      </SettingsModal>
    );
  }

  // Profile View

  return (
    <SettingsModal open={open} onClose={() => setOpen(false)} icon={PersonRectangleIcon} title="Endre varslingsadresse">
      <VerifyField
        verified={verified}
        readOnly={readOnly}
        label="E-postadresse"
        size="sm"
        value={value}
        onChange={onChange}
      >
        {selectable && !selectNew ? (
          <VerifySelectField options={verifiedEmails} value={value} onChange={onSelect} />
        ) : (
          ''
        )}
      </VerifyField>

      <UsedByLog
        endUserLabel="Deg"
        items={defaultUsedByItems}
        title={`Brukes av ${defaultUsedByItems.length} aktører`}
      />

      <Typography size="sm">
        {!verified ? (
          <p>Endringer må verifiseres før du kan motta varslinger.</p>
        ) : (
          <p>Vi bruker adressen til å sende deg varslinger fra det offentlige.</p>
        )}
      </Typography>

      <VerifyFooter validEmail={validEmail} verified={verified} onSendCode={onSendCode} />
    </SettingsModal>
  );
};

// Stories
export const ProfileReadOnly = () => <Template readOnly={true} defaultValue="mathias@brann.no" />;
export const ProfileInput = () => <Template defaultValue="mathias@new-domain.com" />;
export const ProfileSelect = () => <Template selectable={true} defaultValue="mathias@brann.no" />;

export const AccountVerified = () => (
  <Template defaultState="account" accountId="brann" defaultValue="mathias@brann.no" />
);
export const AccountNewEmail = () => (
  <Template defaultState="account" accountId="brann" defaultValue="mathias@new-domain.no" />
);

export const AccountNewEmailAndSms = () => (
  <Template defaultState="account" accountId="brann" defaultValue="mathias@new-domain.no" defaultSms="97077666" />
);

export const VerificationCodeSent = () => <Template defaultValue="mathias@nav.no" defaultCodeSent={true} />;
