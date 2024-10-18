import { ChangeEvent } from 'react';
import { MenuItemBase, MenuItemSize } from './MenuItemBase';
import { MenuItemLabel } from './MenuItemLabel';
import { CheckboxIcon } from '../Icon';
import styles from './menuOption.module.css';

export interface MenuOptionProps {
  type?: 'checkbox' | 'radio';
  size?: MenuItemSize;
  name?: string;
  value?: string | number;
  label?: string;
  title?: string;
  description?: string;
  selected?: boolean;
  disabled?: boolean;
  onChange?: ChangeEvent;
}

export const MenuOption = ({
  type = 'checkbox',
  size = 'sm',
  name,
  value,
  label,
  title,
  description,
  selected,
  disabled,
  onChange,
}) => {
  return (
    <MenuItemBase className={styles?.label} disabled={disabled} selected={selected} size={size} as="label">
      <input
        className={styles?.input}
        name={name}
        value={value}
        type={type}
        checked={selected}
        onChange={onChange}
      ></input>
      <CheckboxIcon checked={selected} className={styles.icon} />
      <MenuItemLabel title={title} description={description} size={size}>
        {label}
      </MenuItemLabel>
    </MenuItemBase>
  );
};
