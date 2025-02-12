import type { ChangeEventHandler } from 'react';
import type { BadgeProps } from '../Badge';
import { CheckboxIcon, RadioIcon } from '../Icon';
import { MenuItemBase, type MenuItemBaseProps, type MenuItemSize } from './MenuItemBase';
import { MenuItemLabel } from './MenuItemLabel';
import styles from './menuOption.module.css';

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
    <MenuItemBase
      className={styles.base}
      disabled={disabled}
      selected={checked}
      size={size}
      badge={badge}
      as="label"
      {...rest}
    >
      <input className={styles.input} name={name} value={value} type={type} checked={checked} onChange={onChange} />
      {type === 'checkbox' && <CheckboxIcon checked={checked} hover={true} className={styles.icon} />}
      {type === 'radio' && <RadioIcon checked={checked} hover={true} className={styles.icon} />}
      <MenuItemLabel className={styles.label} title={title} description={description} size={size}>
        {label}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
