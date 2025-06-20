import type { ChangeEventHandler } from 'react';
import { Input } from '..';
import type { BadgeProps } from '../Badge';
import { MenuItemBase, type MenuItemBaseProps, type MenuItemSize } from './MenuItemBase';
import { MenuItemLabel } from './MenuItemLabel';

export type MenuOptionType = 'checkbox' | 'radio';

export interface MenuOptionProps extends MenuItemBaseProps {
  value: string | number;
  label: string;
  groupId?: string;
  size?: MenuItemSize;
  name?: string;
  title?: string;
  description?: string;
  badge?: BadgeProps | undefined;
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
  type?: MenuOptionType;
}

export const MenuOption = ({
  size = 'md',
  type,
  name,
  value,
  label,
  title,
  description,
  badge,
  checked = false,
  disabled,
  onChange,
  ...rest
}: MenuOptionProps) => {
  return (
    <MenuItemBase disabled={disabled} selected={checked} size={size} as="label" {...rest}>
      <Input size="xs" name={name} value={value} type={type} checked={checked} onChange={onChange} />
      <MenuItemLabel title={label} description={description} size={size} badge={badge} />
    </MenuItemBase>
  );
};
