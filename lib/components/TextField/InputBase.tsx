import cx from 'classnames';
import type { ChangeEventHandler, FocusEventHandler, HTMLInputTypeAttribute } from 'react';
import styles from './inputBase.module.css';
export type InputSize = 'xs' | 'sm' | 'md' | 'lg' | 'custom';

export interface InputBaseProps {
  type?: HTMLInputTypeAttribute;
  name?: string;
  value?: string;
  placeholder?: string;
  onFocus?: FocusEventHandler;
  onBlur?: FocusEventHandler;
  onChange?: ChangeEventHandler;
  className?: string;
  size?: InputSize;
}

export const InputBase = ({
  type = 'text',
  name,
  value,
  placeholder,
  onChange,
  onFocus,
  onBlur,
  size,
  className,
  ...rest
}: InputBaseProps) => {
  return (
    <input
      className={cx(styles.input, className)}
      data-size={size}
      type={type}
      name={name}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
      onFocus={onFocus}
      onBlur={onBlur}
      {...rest}
    />
  );
};
