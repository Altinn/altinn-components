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
  Section,
  SettingsItem,
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
        children: (
          <Section padding={6}>
            <AccountNotificationSettings {...(item as AccountNotificationSettingsProps)} onChange={onChange} />
          </Section>
        ),
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
      <ModalHeader onClose={onClose}>
        <SettingsItem icon={icon} title={title} description={description} interactive={false} />
      </ModalHeader>
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
