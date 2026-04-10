import {
  Input,
  type InputProps,
  SettingsItemBase,
  type SettingsItemBaseProps,
  SettingsModal,
  type SettingsModalProps,
} from '..';

import { type ReactNode, useState } from 'react';

export type SettingsItemVariant = 'default' | 'link' | 'modal' | 'switch';

export interface SettingsItemModalProps {
  icon?: SettingsModalProps['icon'];
  title?: SettingsModalProps['title'];
  description?: SettingsModalProps['description'];
  buttons?: SettingsModalProps['buttons'];
}

export interface SettingsItemProps extends SettingsItemBaseProps {
  variant?: SettingsItemVariant;
  id: string;
  title?: string;
  value?: string;
  description?: string;
  name?: InputProps['name'];
  checked?: InputProps['checked'];
  onChange?: InputProps['onChange'];
  modalProps?: SettingsItemModalProps;
  children?: ReactNode;
}

export const SettingsItem = ({
  loading,
  variant = 'default',
  id = 'settings',
  name,
  title,
  value,
  description,
  checked,
  onChange,
  modalProps,
  children,
  ...props
}: SettingsItemProps) => {
  const [open, setOpen] = useState(false);

  if (loading) {
    return <SettingsItemBase icon={props?.icon} titleProps={{ children: title }} loading />;
  }

  switch (variant) {
    case 'link':
      return (
        <SettingsItemBase
          {...props}
          titleProps={{
            children: title,
          }}
          descriptionProps={{
            size: 'xs',
            weight: 'normal',
            variant: 'subtle',
            children: description,
          }}
        />
      );
    case 'switch':
      return (
        <SettingsItemBase
          {...props}
          as="div"
          titleProps={{
            children: title,
          }}
          descriptionProps={{
            size: 'xs',
            weight: 'normal',
            variant: 'subtle',
            children: description,
          }}
          controls={
            <Input
              type="checkbox"
              role="switch"
              aria-labelledby={id}
              name={name}
              value={value as string}
              checked={checked}
              onChange={onChange}
              style={{ marginRight: '0.5em' }}
            />
          }
        />
      );

    case 'modal':
      return (
        <SettingsItemBase
          {...props}
          titleProps={{
            size: value ? 'xs' : 'sm',
            variant: 'subtle',
            weight: 'normal',
            children: title,
          }}
          descriptionProps={{
            size: 'sm',
            variant: 'default',
            children: description || value,
          }}
          as="button"
          linkIcon={true}
          onClick={() => setOpen(true)}
          expanded={open}
        >
          {open && (
            <SettingsModal
              {...modalProps}
              icon={modalProps?.icon || props?.icon}
              title={modalProps?.title || title}
              open={open}
              onClose={() => setOpen(false)}
            >
              {children}
            </SettingsModal>
          )}
        </SettingsItemBase>
      );

    default:
      return (
        <SettingsItemBase
          {...props}
          titleProps={{
            size: value ? 'xs' : 'sm',
            variant: 'subtle',
            weight: 'normal',
            children: title,
          }}
          descriptionProps={{
            size: 'sm',
            variant: 'default',
            children: description || value,
          }}
        />
      );
  }
};
