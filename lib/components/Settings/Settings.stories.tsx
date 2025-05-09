import {
  BellIcon,
  Buildings2Icon,
  GlobeIcon,
  HandshakeIcon,
  PersonIcon,
  PersonRectangleIcon,
  SunIcon,
} from '@navikt/aksel-icons';
import type { Meta } from '@storybook/react';
import { useState } from 'react';
import { Divider, Fieldset, Radio, RadioOptions, Section, SettingsItem, Switch, TextField, Typography } from '..';
const meta = {
  title: 'Settings',
  tags: ['beta', 'autodocs'],
  parameters: {},
  args: {},
} satisfies Meta;

export default meta;

export const ListOfSettings = () => {
  return (
    <Section>
      <SettingsItem icon={BellIcon} title="Varslinger: På" linkIcon />
      <Divider />
      <SettingsItem icon={PersonRectangleIcon} title="Kontaktprofiler" badge={{ label: '3 profiler' }} linkIcon />
      <Divider />
      <SettingsItem icon={SunIcon} title="Modus: Lys" linkIcon />
      <Divider />
      <SettingsItem icon={GlobeIcon} title="Språk/language: Bokmål" linkIcon />
    </Section>
  );
};

export const CollapsibleSettings = () => {
  const [expandedId, setExpandedId] = useState<string | null>('locale');
  const [locale, setLocale] = useState<string | null>('Bokmål');

  const localeOptions: string[] = ['Bokmål', 'Nynorsk', 'English', 'España'];

  const onToggle = (id: string) => {
    setExpandedId((prevState) => (prevState === id ? null : id));
  };

  return (
    <Section>
      <SettingsItem
        icon={BellIcon}
        title="Varslinger: På"
        collapsible
        expanded={expandedId === '1'}
        onClick={() => onToggle('1')}
        linkIcon
      >
        <Section padding={6} spacing={6}>
          <Fieldset size="sm">
            <TextField placeholder="E-postadresse" label="E-postadresse for varslinger" />
          </Fieldset>
          <Fieldset size="sm">
            <Switch label="Varsle på SMS" />
            <TextField placeholder="Mobiltelefon" />
          </Fieldset>
          <Switch label="Skru av alle varslinger" size="sm" />
        </Section>
      </SettingsItem>
      <Divider />
      <SettingsItem
        collapsible
        expanded={expandedId === '2'}
        icon={SunIcon}
        title="Modus: Lys"
        linkIcon
        onClick={() => onToggle('2')}
      >
        <Section padding={6} spacing={6}>
          <RadioOptions
            size="sm"
            name="mode"
            options={[
              { label: 'Lys', value: 'Lys', checked: true },
              { label: 'Mørk', value: 'Mørk' },
            ]}
          />
        </Section>
      </SettingsItem>
      <Divider />
      <SettingsItem
        collapsible
        expanded={expandedId === 'locale'}
        icon={GlobeIcon}
        title={'Språk/language: ' + locale}
        linkIcon
        onClick={() => onToggle('locale')}
      >
        <Section padding={6} spacing={6}>
          <Fieldset size="sm">
            {localeOptions.map((value) => (
              <Radio
                key={value}
                name="locale"
                label={value}
                value={value}
                checked={locale === value}
                onChange={(e) => setLocale(e.target.value)}
              />
            ))}
          </Fieldset>
        </Section>
      </SettingsItem>
    </Section>
  );
};

export const CompanySettings = () => {
  return (
    <Section color="company">
      <SettingsItem
        icon={{ svgElement: Buildings2Icon, theme: 'tinted' }}
        variant="inline"
        title="Organisasjonsnummer"
        value="928914038"
        linkIcon
      />
      <Divider />
      <SettingsItem
        icon={{ svgElement: HandshakeIcon, theme: 'tinted' }}
        variant="inline"
        title="Rolle og rettigheter"
        value="Daglig leder"
        linkIcon
      />
      <Divider />
      <SettingsItem
        color="neutral"
        icon={{ svgElement: BellIcon, theme: 'default' }}
        title="Ingen varslinger"
        badge={<Typography size="xs">Sett opp varsling</Typography>}
        linkIcon
      />
    </Section>
  );
};

export const PersonSettings = () => {
  return (
    <Section color="person">
      <SettingsItem
        icon={{ svgElement: PersonIcon, theme: 'tinted' }}
        variant="inline"
        title="Fødselsnummer"
        value="180505 XXXXXX"
        linkIcon
      />
      <Divider />
      <SettingsItem
        icon={{ svgElement: HandshakeIcon, theme: 'tinted' }}
        variant="inline"
        title="Rolle og rettigheter"
        value="Daglig leder"
        linkIcon
      />
      <Divider />
      <SettingsItem
        icon={{ svgElement: BellIcon, theme: 'tinted' }}
        title="Varslinger: På"
        badge={{ label: 'E-post og SMS' }}
        linkIcon
      />
    </Section>
  );
};
