import cx from 'classnames';
import type { ChangeEventHandler } from 'react';
import { CheckboxIcon } from '../Icon/';
import styles from './dialogSelect.module.css';

export type DialogSelectProps = {
  checked?: boolean;
  onChange?: ChangeEventHandler;
  className?: string;
};

/**
 * Dialog checkbox
 */

export const DialogSelect = ({ checked = false, onChange, className }: DialogSelectProps) => {
  return (
    <label className={cx(styles.label, className)}>
      <input type="checkbox" checked={checked} onChange={onChange} className={styles.input} />
      <div className={styles.checkbox}>
        <CheckboxIcon checked={checked} />
      </div>
    </label>
  );
};
