import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import type { ChangeEvent, ReactNode } from 'react';
import {
  AccountNotificationSettings,
  type AccountNotificationSettingsProps,
  Button,
  ButtonGroup,
  ModalBase,
  ModalBody,
  ModalHeader,
  type SettingsItemProps,
  SettingsList,
  type SettingsListProps,
} from '..';
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
  const { items, groups, onSettingsChange } = useAccountSettings({
    accounts: defaultAccounts,
  });

  const [id, setId] = useState<string>('');

  const onClose = () => {
    setId('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, checked, name, value } = e.target;

    if (type === 'checkbox') {
      onSettingsChange(id, { [name]: checked });
    } else {
      onSettingsChange(id, { [name]: value });
    }
  };

  const item = id && items.find((item) => item.id === id);

  const modalItems = items?.map((item) => {
    const { id } = item;

    return {
      ...item,
      value: null,
      onClick: () => setId(id),
    };
  });

  return (
    <>
      <SettingsList groups={groups} items={modalItems as SettingsListProps['items']} />
      <AccountSettingsModal {...item} open={!!item} onClose={onClose}>
        <AccountNotificationSettings {...(item as AccountNotificationSettingsProps)} onChange={onChange} />
      </AccountSettingsModal>
    </>
  );
};

export const ControlledValue = () => {
  const { items, groups, onSettingsChange } = useAccountSettings({
    accounts: defaultAccounts,
  });

  const [id, setId] = useState<string>('');

  const onClose = () => {
    setId('');
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { type, checked, name, value } = e.target;

    if (type === 'checkbox') {
      onSettingsChange(id, { [name]: checked });
    } else {
      onSettingsChange(id, { [name]: value });
    }
  };

  const item = id && items.find((item) => item.id === id);

  const modalItems = items
    ?.filter((item) => !item.parentId)
    .map((item) => {
      const { id } = item;

      return {
        ...item,
        description: undefined,
        onClick: () => setId(id),
      };
    });

  return (
    <>
      <SettingsList groups={groups} items={modalItems as SettingsListProps['items']} />
      <AccountSettingsModal {...item} open={!!item} onClose={onClose}>
        <AccountNotificationSettings {...(item as AccountNotificationSettingsProps)} onChange={onChange} />
      </AccountSettingsModal>
    </>
  );
};

interface AccountSettingsModalProps {
  title?: SettingsItemProps['title'];
  icon?: SettingsItemProps['icon'];
  description?: SettingsItemProps['description'];
  open: boolean;
  onClose: () => void;
  children?: ReactNode;
}

const AccountSettingsModal = ({
  icon,
  title = 'Navn på aktør',
  description,
  open = false,
  onClose,
  children,
}: AccountSettingsModalProps) => {
  return (
    <ModalBase open={open} onClose={onClose}>
      <ModalHeader icon={icon} title={title as string} description={description as string} onClose={onClose} />
      <ModalBody>
        {children}
        <ButtonGroup>
          <Button onClick={onClose}>Lagre og avslutt</Button>
          <Button variant="outline" onClick={onClose}>
            Avbryt
          </Button>
        </ButtonGroup>
      </ModalBody>
    </ModalBase>
  );
};
