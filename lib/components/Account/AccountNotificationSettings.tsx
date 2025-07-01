import type { ChangeEvent } from 'react';
import { Fieldset, Switch, TextField } from '..';

export interface AccountNotificationSettingsProps {
  phone?: string;
  phoneLabel?: string;
  email?: string;
  emailLabel?: string;
  smsAlerts?: boolean;
  emailAlerts?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const AccountNotificationSettings = ({
  phone,
  phoneLabel = 'Varsle på SMS',
  email,
  emailLabel = 'Varsle på e-post',
  smsAlerts = false,
  emailAlerts = false,
  onChange,
}: AccountNotificationSettingsProps) => {
  return (
    <Fieldset size="sm">
      <Switch label={phoneLabel} name="smsAlerts" value="SMS" checked={!!smsAlerts} onChange={onChange} />
      {smsAlerts && <TextField name="phone" placeholder="Mobiltelefon" value={phone} onChange={onChange} />}
      <Switch label={emailLabel} name="emailAlerts" value="E-post" checked={!!emailAlerts} onChange={onChange} />
      {emailAlerts && <TextField name="email" placeholder="E-postadresse" value={email} onChange={onChange} />}
    </Fieldset>
  );
};
