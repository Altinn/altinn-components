import { MenuItem, type MenuItemProps } from './MenuItem';
export type MenuOptionType = 'checkbox' | 'radio';

export interface MenuOptionProps extends MenuItemProps {
  name?: string;
  type?: MenuOptionType;
  value: string | number;
  checked?: boolean;
}

export const MenuOption = ({ name, type, value, checked = false, ...rest }: MenuOptionProps) => {
  return <MenuItem {...rest} name={name} role={type} value={value} checked={checked} />;
};
