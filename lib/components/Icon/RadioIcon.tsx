import cx from "classnames";
import styles from "./radioIcon.module.css";

export type RadioIconProps = {
  checked: boolean;
  title?: string;
  className?: string;
};

/**
 * Radio icon for lists and list items
 */
export const RadioIcon = ({ checked, title, className }: RadioIconProps) => {
  return (
    <div data-checked={checked} className={cx(styles.radio, className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className={styles.icon}
      >
        <title>{title}</title>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </div>
  );
};
