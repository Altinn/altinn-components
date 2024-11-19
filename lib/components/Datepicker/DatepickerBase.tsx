import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './datepickerBase.module.css';

export interface DatepickerBaseProps {
  className?: string;
  children?: ReactNode;
}

export const DatepickerBase = ({ className, children }: DatepickerBaseProps) => {
  return <div className={cx(styles.datepicker, className)}>{children}</div>;
};
