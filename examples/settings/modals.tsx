import type { ChangeEvent } from 'react';
import { Fieldset, Switch, TextField, Typography } from '../../lib';

export interface AltSettingsDetailsProps {
  phone?: string;
  phoneLabel?: string;
  email?: string;
  emailLabel?: string;
  smsAlerts?: boolean;
  emailAlerts?: boolean;
  readOnly?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AlertSettingsDetails = ({
  phone,
  phoneLabel = 'Varsle på SMS',
  email,
  emailLabel = 'Varsle på e-post',
  smsAlerts = false,
  emailAlerts = false,
  readOnly,
  onChange,
}: AltSettingsDetailsProps) => {
  return (
    <>
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
        </>
      ) : (
        <>
          <Typography size="sm">
            <p>
              Dette er dine personlige varslingsinnstillinger, ikke virksomhetens lovpålagte varslingsadresser. Disse
              finner du under "Fullmakter".
            </p>
          </Typography>
        </>
      )}
    </>
  );
};
