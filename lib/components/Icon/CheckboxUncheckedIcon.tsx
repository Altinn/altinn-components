export type CheckboxUncheckedIconProps = {
  title?: string;
  className?: string;
  hover?: boolean;
};

/**
 * Checkbox for lists and list items
 */
export const CheckboxUncheckedIcon = ({ title = 'Checkbox', className, hover = false }: CheckboxUncheckedIconProps) => {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <title>{title}</title>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.5 2.5H2.5V21.5H21.5V2.5ZM2.5 0C1.11929 0 0 1.11929 0 2.5V21.5C0 22.8807 1.11929 24 2.5 24H21.5C22.8807 24 24 22.8807 24 21.5V2.5C24 1.11929 22.8807 0 21.5 0H2.5Z"
        fill="black"
      />
      {hover && (
        <path
          data-hover={true}
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.5547 5.76815C19.0142 6.07451 19.1384 6.69538 18.8321 7.1549L11.6321 17.9549C11.4659 18.2042 11.1967 18.3658 10.8985 18.3953C10.6004 18.4249 10.3047 18.3192 10.0929 18.1073L5.29289 13.3073C4.90237 12.9168 4.90237 12.2836 5.29289 11.8931C5.68342 11.5026 6.31658 11.5026 6.70711 11.8931L10.6446 15.8306L17.1679 6.0455C17.4743 5.58598 18.0952 5.4618 18.5547 5.76815Z"
          fill="currentColor"
        />
      )}
    </svg>
  );
};
