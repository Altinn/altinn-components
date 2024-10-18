import styles from "./checkboxIcon.module.css";
import cx from "classnames";

export type CheckboxIconProps = {
  width?: string;
  height?: string;
  checked?: boolean;
  className?: string;
};

/**
 * Checkbox for lists and list items
 */

export const CheckboxIcon = ({
  width = "1em",
  height = "1em",
  checked,
  className,
}: CheckboxIconProps) => {
  return (
    <div data-checked={checked} className={cx(styles.checkbox, className)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2.5}
        stroke="currentColor"
        className={styles.icon}
        width={width}
        height={height}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 12.75l6 6 9-13.5"
        />
      </svg>
    </div>
  );
};
