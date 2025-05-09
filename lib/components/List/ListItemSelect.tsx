import cx from 'classnames';
import { type CheckboxProps, Input, Label } from '..';
import styles from './listItemSelect.module.css';

export type ListItemSelectProps = CheckboxProps;

/**
 * List item checkbox
 */

export const ListItemSelect = ({ className, ...props }: CheckboxProps) => {
  return (
    <Label className={cx(styles.select, className)}>
      <Input type="checkbox" {...props} className={styles.checkbox} />
      <span style={{ position: 'absolute', opacity: 0, pointerEvents: 'none' }}>Select</span>
    </Label>
  );
};
