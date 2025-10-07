import { Input, type InputProps, SettingsItemBase, type SettingsItemBaseProps, SettingsModal } from '..';

import { type ReactNode, useState } from 'react';

export type SettingsItemVariant = 'default' | 'modal' | 'switch';

export interface SettingsItemProps extends SettingsItemBaseProps {
  variant?: SettingsItemVariant;
  id: string;
  title?: string;
  value?: string;
  description?: string;
  name?: InputProps['name'];
  checked?: InputProps['checked'];
  onChange?: InputProps['onChange'];
  children?: ReactNode;
}

export const SettingsItem = ({
  loading,
  variant = 'default',
  id = 'settings',
  name,
  checked,
  onChange,
  children,
  ...props
}: SettingsItemProps) => {
  const [open, setOpen] = useState(false);

  if (loading) {
    return <SettingsItemBase icon={props?.icon} title={props?.title} loading />;
  }

  switch (variant) {
    case 'switch':
      return (
        <SettingsItemBase
          {...props}
          title={[props?.title, props?.value].join(': ')}
          value={undefined}
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
        <SettingsItemBase {...props} as="button" linkIcon={true} onClick={() => setOpen(true)} expanded={open}>
          {open && (
            <SettingsModal icon={props?.icon} title={props?.title} open={open} onClose={() => setOpen(false)}>
              {children}
            </SettingsModal>
          )}
        </SettingsItemBase>
      );

    default:
      return <SettingsItemBase {...props} />;
  }
};
