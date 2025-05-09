import type { ReactNode } from 'react';
import { ListItem, type ListItemProps } from '..';

export interface SettingsItemProps extends ListItemProps {
  id?: string;
  title?: string | ReactNode;
  description?: string | ReactNode;
  value?: string | number | ReactNode;
}

export const SettingsItem = ({ title, description, value, ...item }: SettingsItemProps) => {
  return (
    <ListItem
      {...item}
      variant="inline"
      title={
        description
          ? {
              weight: 'normal',
              children: title,
            }
          : value
            ? {
                size: 'xs',
                weight: 'normal',
                variant: 'subtle',
                children: title,
              }
            : { children: title, weight: 'normal' }
      }
      description={
        description
          ? { children: description }
          : {
              size: 'sm',
              weight: 'normal',
              variant: 'default',
              children: value,
            }
      }
      linkIcon
    />
  );
};
