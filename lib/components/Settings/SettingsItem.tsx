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
  checked,
  onChange,
  modalProps,
  children,
  ...props
}: SettingsItemProps) => {
  const [open, setOpen] = useState(false);

  if (loading) {
    return <SettingsItemBase icon={props?.icon} title={props?.title} loading />;
  }

  switch (variant) {
    case 'link':
      return (
        <SettingsItemBase
          {...props}
          title={{
            children: props?.title,
          }}
          description={props?.description}
          value={undefined}
        />
      );
    case 'switch':
      return (
        <SettingsItemBase
          {...props}
          title={{
            size: 'xs',
            variant: 'subtle',
            weight: 'normal',
            children: props?.title,
          }}
          description={{
            size: 'sm',
            variant: 'default',
            children: props?.description || props?.value,
          }}
          interactive={false}
          controls={
            <Input
              type="checkbox"
              role="switch"
              aria-labelledby={id}
              name={name}
              value={props?.value as string}
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
          title={{
            size: props?.value ? 'xs' : 'sm',
            variant: 'subtle',
            weight: 'normal',
            children: props?.title,
          }}
          description={{
            size: 'sm',
            variant: 'default',
            children: props?.description || props?.value,
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
              title={modalProps?.title || props?.title}
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
          title={{
            size: props?.value ? 'xs' : 'sm',
            variant: 'subtle',
            weight: 'normal',
            children: props?.title,
          }}
          description={{
            size: 'sm',
            variant: 'default',
            children: props?.description || props?.value,
          }}
        />
      );
  }
};
