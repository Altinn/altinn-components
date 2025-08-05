import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './searchbarBase.module.css';

export interface SearchbarBaseProps {
  className?: string;
  children: ReactNode;
  expanded?: boolean;
  autocomplete?: boolean;
  onBlurCapture?: React.FocusEventHandler<HTMLDivElement>;
}

export const SearchbarBase = ({
  className,
  children,
  expanded = false,
  onBlurCapture,
  autocomplete = false,
}: SearchbarBaseProps) => {
  const searchBaseStyles = cx(styles.searchbar, className, expanded && styles.searchbarExpanded);
  return (
    <div
      className={searchBaseStyles}
      data-autocomplete={autocomplete}
      data-color="neutral"
      onBlurCapture={onBlurCapture}
    >
      {children}
    </div>
  );
};
