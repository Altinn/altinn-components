import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import { Heading, Typography } from '../Typography';
import styles from './fieldBase.module.css';

export type FieldSize = 'xs' | 'sm' | 'md' | 'lg' | 'custom';

export interface FieldBaseProps {
  as?: ElementType;
  classname?: string;
  size?: FieldSize;
  label?: string;
  helperText?: string;
  children?: ReactNode;
}

export const FieldBase = ({ as, size, classname, label, helperText, children }: FieldBaseProps) => {
  const Component = as || 'label';
  return (
    <Component className={cx(styles.field, classname)} data-size={size}>
      {label && (
        <Heading size="xs" className={styles.label}>
          {label}
        </Heading>
      )}
      {children}
      {helperText && (
        <Typography className={styles.helperText} size="xs">
          {helperText}
        </Typography>
      )}
    </Component>
  );
};
