import { PersonRectangleIcon } from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react-vite';
import { useState } from 'react';
import {
  type BadgeProps,
  Button,
  ButtonGroup,
  SettingsModal,
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
    onClose: () => {
      return;
    },
  },
} satisfies Meta<typeof SettingsModal>;

export default meta;

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
] as UsedByLogProps['items'];

const defaultVerifiedEmails = ['mathias@hotmail.com', 'mathias@fotball.no'];

interface TemplateProps {
  defaultValue: string;
  defaultState?: string;
}

const Template = ({ defaultState, defaultValue = '' }: TemplateProps) => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(defaultValue);
  const [state, setState] = useState(defaultState);
  const [code, setCode] = useState('');
  const [verifiedEmails, setVerifiedEmails] = useState(defaultVerifiedEmails);
  const verified = verifiedEmails?.includes(value);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCode(e.target.value);
  };

  const onVerifyCode = () => {
    if (code === '123456') {
      setVerifiedEmails((prev) => [...prev, value]);
      setState('');
    }
  };

  const onSendCode = () => {
    setState('codeSent');
  };

  return (
    <SettingsModal
      open={open}
      onClose={() => setOpen(true)}
      icon={PersonRectangleIcon}
      title={verified ? 'Endre varslingsadresse' : 'Verifiser e-postadresse'}
    >
      <TextField readOnly={state === 'codeSent'} label="E-postadresse" size="sm" value={value} onChange={onChange} />

      <UsedByLog
        endUserLabel="Deg"
        items={defaultUsedByItems}
        title={'Brukes av ' + defaultUsedByItems?.length + ' aktører'}
      />

      {verified ? (
        <>
          {/** Adressen er verfisert */}
          <Typography size="sm">
            <p>E-postadressen er verifisert.</p>
          </Typography>
          <ButtonGroup size="md">
            <Button>Lagre</Button>
            <Button variant="outline">Avbryt</Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          {state === 'codeSent' ? (
            <>
              {/** Code sent */}
              <Typography size="sm">
                <p>Oppgi koden du fikk på e-post for å verifisere. </p>
              </Typography>
              <TextField
                autoComplete="none"
                placeholder="6-sifret kode"
                size="sm"
                value={code}
                maxLength={6}
                onChange={onCodeChange}
              />

              <ButtonGroup size="md">
                <Button onClick={onVerifyCode} disabled={code.length !== 6}>
                  Verifiser kode
                </Button>
                <Button variant="outline">Avbryt</Button>
                <Button variant="text" onClick={onSendCode}>
                  <span data-size="sm">Send ny kode</span>
                </Button>
              </ButtonGroup>
            </>
          ) : (
            <>
              {/** Send verification code */}
              <Typography size="sm">
                <p>Du må verifisere e-postadressen.</p>
              </Typography>
              <ButtonGroup size="md">
                <Button onClick={onSendCode}>Send kode</Button>
                <Button variant="outline">Avbryt</Button>
              </ButtonGroup>
            </>
          )}
        </>
      )}
    </SettingsModal>
  );
};

export const Verified = () => {
  return <Template defaultValue="mathias@hotmail.com" />;
};

export const Unverified = () => {
  return <Template defaultValue="mathias@nav.no" />;
};

export const VerificationCodeSent = () => {
  return <Template defaultValue="mathias@nav.no" defaultState="codeSent" />;
};
