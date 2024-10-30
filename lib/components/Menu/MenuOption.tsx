import type { ChangeEventHandler } from 'react';
import { CheckboxIcon, RadioIcon } from '../Icon';
import { MenuItemBase, type MenuItemSize } from './MenuItemBase';
import { MenuItemLabel } from './MenuItemLabel';
import styles from './menuOption.module.css';

export type MenuOptionType = 'checkbox' | 'radio';

export interface MenuOptionProps {
  value: string | number;
  label: string;
  group?: string;
  size?: MenuItemSize;
  name?: string;
  title?: string;
  description?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler;
  type?: MenuOptionType;
}

export const MenuOption = ({
  size = 'sm',
  type,
  name,
  value,
  label,
  title,
  description,
  checked = false,
  disabled,
  onChange,
}: MenuOptionProps) => {
  return (
    <MenuItemBase className={styles?.label} disabled={disabled} selected={checked} size={size} as="label">
      <input className={styles?.input} name={name} value={value} type={type} checked={checked} onChange={onChange} />
      {type === 'checkbox' && <CheckboxIcon checked={checked} className={styles.icon} />}
      {type === 'radio' && <RadioIcon checked={checked} className={styles.icon} />}
      <MenuItemLabel title={title} description={description} size={size}>
        {label}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
