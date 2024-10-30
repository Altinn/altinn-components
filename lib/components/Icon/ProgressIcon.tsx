import cx from "classnames";
import styles from "./progressIcon.module.css";
export interface ProgressIconsProps {
  value?: number;
  total?: number;
  className?: string;
}

export const ProgressIcon = ({
  value = 0,
  total = 100,
  className,
}: ProgressIconsProps) => {
  const percentage = Math.round((value / total) * 100);

  if (value === total) {
    return (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.complete}
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM11.1751 5.11246C11.3892 4.87167 11.7579 4.84998 11.9987 5.06402C12.2395 5.27805 12.2612 5.64676 12.0471 5.88755L7.60268 10.8876C7.49595 11.0076 7.34442 11.0784 7.18383 11.0831C7.02324 11.0878 6.86782 11.0261 6.75421 10.9125L3.97644 8.13471C3.74863 7.9069 3.74863 7.53756 3.97644 7.30975C4.20424 7.08194 4.57359 7.08194 4.80139 7.30975L7.14172 9.65007L11.1751 5.11246Z"
        />
      </svg>
    );
  }

  const progressStyle = {
    "--progress": percentage + "%",
  };

  return (
    <div
      className={cx(styles.progress, className)}
      style={progressStyle}
      data-value={`${percentage}%`}
    />
  );
};
