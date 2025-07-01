import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { ChangeEvent } from 'react';
import {
  AccountNotificationSettings,
  type AccountNotificationSettingsProps,
  Button,
  ButtonGroup,
  List,
  ModalBase,
  ModalBody,
  ModalHeader,
  SettingsItem,
} from '../';

const meta = {
  title: 'Account/AccountNotificationSettings',
  component: AccountNotificationSettings,
  tags: ['autodocs'],
  parameters: {},
} satisfies Meta<typeof AccountNotificationSettings>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Controlled = (args: AccountNotificationSettingsProps) => {
  const [formData, setFormData] = useState({ ...args });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, checked, name, value } = e.target;

    if (type === 'checkbox') {
      setFormData((prevState) => {
        return {
          ...prevState,
          [name]: checked,
        };
      });
    } else {
      setFormData((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  return <AccountNotificationSettings {...args} {...formData} onChange={onChange} />;
};

export const SmsAlerts = () => {
  return <Controlled smsAlerts={true} phone="99005566" />;
};

export const SmsAndEmailAlerts = () => {
  return <Controlled smsAlerts={true} phone="99005566" emailAlerts={true} email="mathias@brann.no" />;
};

export const AccountNotificationsModal = ({ title = 'Aktør' }) => {
  const [open, setOpen] = useState<boolean>(false);
  const onToggle = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <>
      <Button onClick={onToggle}>Åpne modal</Button>
      <ModalBase open={open} onClose={onToggle}>
        <ModalHeader title={title}>
          <List>
            <SettingsItem
              interactive={false}
              icon={{ name: 'Bergen Bar', type: 'company' }}
              title="Bergen Bar"
              description="Org. nr. XXX XXX XXX"
            />
          </List>
        </ModalHeader>
        <ModalBody>
          <SmsAndEmailAlerts />
          <ButtonGroup>
            <Button onClick={onToggle}>Lagre og avslutt</Button>
            <Button onClick={onToggle} variant="outline">
              Avbryt
            </Button>
          </ButtonGroup>
        </ModalBody>
      </ModalBase>
    </>
  );
};
