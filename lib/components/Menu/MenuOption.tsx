import { CheckmarkIcon } from '@navikt/aksel-icons';
import { MenuItem, type MenuItemProps } from '..';
import type { MenuItemBaseProps, MenuItemSize } from './MenuItemBase';

import styles from './menuOption.module.css';

export type MenuOptionType = 'checkbox' | 'radio';

export interface MenuOptionProps extends MenuItemBaseProps {
  value: string | number;
  label: string;
  icon?: MenuItemProps['icon'];
  title?: MenuItemProps['title'];
  description?: MenuItemProps['description'];
  groupId?: string;
  size?: MenuItemSize;
  name?: string;
  count?: number;
  checked?: boolean;
  disabled?: boolean;
  type?: MenuOptionType;
  hidden?: boolean;
  role?: string;
}

export const MenuOption = ({
  size = 'md',
  type,
  name,
  active,
  value,
  label,
  title,
  description,
  icon,
  count = 0,
  checked = false,
  disabled,
  onMouseEnter,
  onClick,
  role,
  ...rest
}: MenuOptionProps) => {
  const Label = () => {
    switch (type) {
      case 'checkbox':
        return (
          <span className={styles.label}>
            <span className={styles.checkbox} data-checked={checked}>
              <CheckmarkIcon className={styles.icon} aria-hidden />
            </span>
            <span className={styles.title}>{label}</span>
            {count > 0 && <span className={styles.count}>{count}</span>}
          </span>
        );
      case 'radio':
        return (
          <span className={styles.label}>
            <span className={styles.radio} data-checked={checked}>
              <CheckmarkIcon className={styles.icon} aria-hidden />
            </span>
            <span className={styles.title}>{label}</span>
            {count > 0 && <span className={styles.count}>{count}</span>}
          </span>
        );
    }
  };

  if (label) {
    return (
      <MenuItem
        disabled={disabled}
        selected={checked}
        size={size}
        as="div"
        active={active}
        tabIndex={-1}
        onClick={onClick}
        role={role}
        label={<Label />}
        {...rest}
      />
    );
  }

  return (
    <MenuItem
      disabled={disabled}
      selected={checked}
      size={size}
      as="div"
      active={active}
      tabIndex={-1}
      onClick={onClick}
      role={role}
      icon={icon}
      title={title}
      description={description}
      {...rest}
    />
  );
};
