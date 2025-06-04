import {
  BellDotIcon,
  BellIcon,
  Buildings2Icon,
  GlobeIcon,
  HandshakeIcon,
  HouseHeartIcon,
  MobileIcon,
  PaperplaneIcon,
  PersonIcon,
  PersonRectangleIcon,
  SunIcon,
} from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Divider, Fieldset, List, Radio, Section, SettingsItem, Switch, TextField, Typography } from '..';

import { useSettings } from '../../../examples';

const meta = {
  title: 'Settings/Settings',
  tags: ['beta', 'autodocs'],
  parameters: {},
  args: {},
} satisfies Meta;

export default meta;

export const SettingsList = () => {
  return (
    <List size="sm">
      <SettingsItem icon={PersonRectangleIcon} title="Kontaktprofiler" badge={{ label: '3 profiler' }} linkIcon />
      <Divider as="li" />
      <SettingsItem icon={SunIcon} title="Modus: Lys" linkIcon />
      <Divider />
      <SettingsItem icon={GlobeIcon} title="Språk/language: Bokmål" linkIcon />
    </List>
  );
};

export const CollapsibleList = () => {
  const [expandedId, setExpandedId] = useState<string | null>('locale');

  const localeOptions: string[] = ['Bokmål', 'Nynorsk', 'English', 'España'];
  const modeOptions: string[] = ['Auto', 'Lys', 'Mørk'];

  const { settings, onChange } = useSettings({
    locale: localeOptions[0],
    mode: modeOptions[0],
    email: 'E-post',
    phone: 'SMS',
  });

  const badgeLabel =
    (settings.email && settings.phone && 'E-post og SMS') || (settings.email && 'E-post') || (settings.phone && 'SMS');

  const badge = badgeLabel && { label: badgeLabel };

  const onToggle = (id: string) => {
    setExpandedId((prevState) => (prevState === id ? null : id));
  };

  return (
    <List size="sm">
      <SettingsItem
        icon={BellIcon}
        title={badge ? 'Varslinger er på' : 'Varslinger er skrudd av'}
        collapsible
        expanded={expandedId === '1'}
        onClick={() => onToggle('1')}
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
            <Switch label="Varsle på SMS" name="phone" value="SMS" checked={!!settings.phone} onChange={onChange} />
            {settings.phone && <TextField placeholder="Mobiltelefon" />}
          </Fieldset>
        </Section>
      </SettingsItem>
      <Divider as="li" />
      <SettingsItem
        collapsible
        expanded={expandedId === '2'}
        icon={SunIcon}
        title={'Modus: ' + settings.mode}
        linkIcon
        onClick={() => onToggle('2')}
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
        expanded={expandedId === 'locale'}
        icon={GlobeIcon}
        title={'Språk/language: ' + settings.locale}
        linkIcon
        onClick={() => onToggle('locale')}
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
    <List size="sm">
      <SettingsItem icon={Buildings2Icon} title="Organisasjonsnummer" value="928914038" linkIcon />
      <Divider as="li" />
      <SettingsItem icon={HandshakeIcon} title="Rolle og rettigheter" value="Daglig leder" linkIcon />
      <Divider as="li" />
      <SettingsItem
        color="neutral"
        icon={BellIcon}
        title="Ingen varslinger"
        badge={<Typography size="xs">Sett opp varsling</Typography>}
        linkIcon
      />
    </List>
  );
};

export const PersonSettings = () => {
  return (
    <List size="sm">
      <SettingsItem icon={PersonIcon} title="Fødselsnummer" value="180505 XXXXXX" linkIcon />
      <Divider />
      <SettingsItem icon={HandshakeIcon} title="Rolle og rettigheter" value="Daglig leder" linkIcon />
      <Divider />
      <SettingsItem icon={BellIcon} title="Varslinger: På" badge={{ label: 'E-post og SMS' }} linkIcon />
    </List>
  );
};

export const ContactSettings = () => {
  return (
    <List size="sm">
      <SettingsItem icon={PaperplaneIcon} title="Primær varslingsadresse" value="928914038" linkIcon />
      <Divider />
      <SettingsItem icon={MobileIcon} title="SMS-varslinger" value="99055456" linkIcon />
      <Divider />
      <SettingsItem
        icon={HouseHeartIcon}
        title="Postadresse"
        value="Idrettsveien 1, 5052 Bergen"
        badge={<Typography size="xs">Sett opp varsling</Typography>}
        linkIcon
      />
    </List>
  );
};

export const NotificationSettings = () => {
  const { settings, onChange } = useSettings({
    alerts: 'on',
    mobile: 'on',
    email: 'on',
  });
  return (
    <List size="sm">
      <SettingsItem
        icon={settings.alerts ? BellDotIcon : BellIcon}
        title={settings.alerts ? 'Varslinger er på' : 'Ingen varslinger'}
        controls={
          <Switch
            name="alerts"
            onChange={onChange}
            checked={!!settings?.alerts}
            reverse
            size="sm"
            label={<span data-size="xs">{settings.alerts ? 'Skru av ' : 'Skru på '}</span>}
          />
        }
      />
      {settings.alerts && (
        <>
          <Divider as="li" />
          <SettingsItem
            icon={{ svgElement: PaperplaneIcon, theme: 'default' }}
            title="Varslingsadresse for e-post"
            value="mathias.dyngeland@gmail.com"
            badge={{ label: 'Endre epost', variant: 'text' }}
            linkIcon
          />
          <Divider as="li" />
          <SettingsItem
            icon={{ svgElement: MobileIcon, theme: 'default' }}
            title="SMS-varslinger"
            value="99009900"
            badge={{ label: 'Endre mobilnummer', variant: 'text' }}
            linkIcon
          />
        </>
      )}
    </List>
  );
};
