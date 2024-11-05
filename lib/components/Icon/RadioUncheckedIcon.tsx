export type RadioUncheckedIconProps = {
  title?: string;
  className?: string;
  hover?: boolean;
};

/**
 * Radio for lists and list items
 */
export const RadioUncheckedIcon = ({ title = 'Radio', className, hover = false }: RadioUncheckedIconProps) => {
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
        d="M12 21.5C17.2467 21.5 21.5 17.2467 21.5 12C21.5 6.75329 17.2467 2.5 12 2.5C6.75329 2.5 2.5 6.75329 2.5 12C2.5 17.2467 6.75329 21.5 12 21.5ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
        fill="black"
      />
      {hover && <circle data-hover={true} cx="12" cy="12" r="5" fill="black" />}
    </svg>
  );
};
