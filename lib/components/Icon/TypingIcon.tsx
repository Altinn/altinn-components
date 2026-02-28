import cx from 'classnames';
import type { ComponentPropsWithoutRef } from 'react';
import styles from './typingIcon.module.css';

export type TypingIconProps = {
  /**
   * Accessibile label
   */
  'aria-label'?: string;
  /**
   * Spinner size
   */
  'data-size'?: '2xs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
} & ComponentPropsWithoutRef<'svg'> &
  ({ 'aria-label': string } | { 'aria-label'?: string; 'aria-hidden': true | 'true' });

export const TypingIcon = ({ 'aria-label': ariaLabel, className, ...rest }: TypingIconProps) => {
  return (
    <svg
      aria-label={ariaLabel}
      className={cx(styles.typingIcon, className)}
      width="40"
      height="20"
      role="img"
      viewBox="0 0 40 20"
      {...rest}
    >
      <circle cx="8" cy="10" r="3">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1s" begin="0s" repeatCount="indefinite" />
      </circle>
      <circle cx="20" cy="10" r="3">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1s" begin="0.2s" repeatCount="indefinite" />
      </circle>
      <circle cx="32" cy="10" r="3">
        <animate attributeName="opacity" values="0.25;1;0.25" dur="1s" begin="0.4s" repeatCount="indefinite" />
      </circle>
    </svg>
  );
};
