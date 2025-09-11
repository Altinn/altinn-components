import { CheckmarkIcon } from '@navikt/aksel-icons';
import type { MouseEventHandler } from 'react';
import { Badge, type BadgeProps, MenuItem } from '..';
import type { MenuItemBaseProps, MenuItemSize } from './MenuItemBase';

import styles from './menuOption.module.css';

export type MenuOptionType = 'checkbox' | 'radio';

export interface MenuOptionProps extends MenuItemBaseProps {
  value: string | number;
  label: string;
  groupId?: string;
  size?: MenuItemSize;
  name?: string;
  badge?: BadgeProps | undefined;
  checked?: boolean;
  disabled?: boolean;
  onMouseEnter?: MouseEventHandler;
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
  badge,
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
          </span>
        );
      case 'radio':
        return (
          <span className={styles.label}>
            <span className={styles.radio} data-checked={checked}>
              <CheckmarkIcon className={styles.icon} aria-hidden />
            </span>
            <span className={styles.title}>{label}</span>
          </span>
        );
    }
  };

  return (
    <MenuItem
      disabled={disabled}
      selected={checked}
      size={size}
      as="div"
      active={active}
      tabIndex={-1}
      onMouseEnter={onMouseEnter}
      onClick={onClick}
      role={role}
      label={<Label />}
      controls={badge && <Badge {...badge} />}
      {...rest}
    />
  );
};
