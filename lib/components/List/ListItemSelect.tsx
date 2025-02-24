import cx from 'classnames';
import type { ChangeEventHandler } from 'react';
import { CheckboxIcon } from '../Icon/';
import type { ListItemSize } from './ListItemBase';
import styles from './listItemSelect.module.css';

export type ListItemSelectProps = {
  size?: ListItemSize;
  checked?: boolean;
  onChange?: ChangeEventHandler;
  className?: string;
};

/**
 * Dialog checkbox
 */

export const ListItemSelect = ({ size, checked = false, onChange, className }: ListItemSelectProps) => {
  return (
    <label className={cx(styles.label, className)} data-size={size}>
      <input type="checkbox" checked={checked} onChange={onChange} className={styles.input} />
      <CheckboxIcon hover={true} checked={checked} className={styles.icon} />
    </label>
  );
};
