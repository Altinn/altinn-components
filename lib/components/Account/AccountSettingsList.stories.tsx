import type { Meta, StoryObj } from '@storybook/react-vite';
import type { ChangeEvent } from 'react';
import { Fieldset, Section, type SettingsItemProps, SettingsList, type SettingsListProps, Switch, TextField } from '..';
import { accountSettings, defaultAccounts, useAccountSettings } from '../../../examples';

const meta = {
  title: 'Account/AccountSettingsList',
  component: SettingsList,
  tags: ['autodocs'],
  parameters: {},
  args: accountSettings as SettingsListProps,
} satisfies Meta<typeof SettingsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Controlled = () => {
  const { items, groups } = useAccountSettings({
    accounts: defaultAccounts,
  });

  return <SettingsList groups={groups} items={items as SettingsListProps['items']} />;
};

export const Collapsible = () => {
  const { items, groups, expandedId, onToggle, onSettingsChange } = useAccountSettings({
    accounts: defaultAccounts,
  });

  const collapsibleItems = items?.map((item) => {
    const { id } = item;

    const onChange = (e: ChangeEvent<HTMLInputElement>) => {
      const { type, checked, name, value } = e.target;

      if (type === 'checkbox') {
        onSettingsChange(id, { [name]: checked });
      } else {
        onSettingsChange(id, { [name]: value });
      }
    };

    if (item.id === expandedId) {
      return {
        ...item,
        collapsible: true,
        expanded: true,
        onClick: () => onToggle(item.id),
        children: <AccountDetails {...(item as AccountDetailsProps)} onChange={onChange} />,
      };
    }
    return {
      ...item,
      collapsible: true,
      onClick: () => onToggle(item.id),
    };
  });

  return <SettingsList groups={groups} items={collapsibleItems as SettingsListProps['items']} />;
};

interface AccountDetailsProps extends SettingsItemProps {
  phone?: string;
  email?: string;
  smsAlerts?: boolean;
  emailAlerts?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const AccountDetails = ({ phone, email, smsAlerts = false, emailAlerts = false, onChange }: AccountDetailsProps) => {
  return (
    <Section padding={6} spacing={6}>
      <Fieldset>
        <Switch label="Varsle på SMS" name="smsAlerts" value="SMS" checked={!!smsAlerts} onChange={onChange} />
        {smsAlerts && <TextField name="phone" placeholder="Mobiltelefon" value={phone} onChange={onChange} />}
      </Fieldset>
      <Fieldset>
        <Switch
          label="Varsle på e-post"
          name="emailAlerts"
          value="E-post"
          checked={!!emailAlerts}
          onChange={onChange}
        />
        {emailAlerts && <TextField name="email" placeholder="E-postadresse" value={email} onChange={onChange} />}
      </Fieldset>
    </Section>
  );
};
