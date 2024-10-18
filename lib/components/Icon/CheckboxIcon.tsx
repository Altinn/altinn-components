import cx from 'classnames';
import styles from './checkboxIcon.module.css';

export type CheckboxIconProps = {
  checked: boolean;
  title?: string;
  className?: string;
};

/**
 * Checkbox for lists and list items
 */
export const CheckboxIcon = ({ checked, title, className }: CheckboxIconProps) => {
  return (
    <div data-checked={checked} className={cx(styles.checkbox, className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className={styles.icon}
      >
        <title>{title}</title>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    </div>
  );
};
