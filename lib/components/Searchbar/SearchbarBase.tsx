import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './searchbarBase.module.css';

export interface SearchbarBaseProps {
  className?: string;
  children: ReactNode;
  expanded?: boolean;
  autocomplete?: boolean;
  onBlurCapture?: React.FocusEventHandler<HTMLDivElement>;
  useGlobalHeader?: boolean;
}

export const SearchbarBase = ({
  className,
  children,
  expanded = false,
  onBlurCapture,
  autocomplete = false,
  useGlobalHeader = false,
}: SearchbarBaseProps) => {
  const searchBaseStyles = cx(
    styles.searchbar,
    className,
    expanded && styles.searchbarExpanded,
    useGlobalHeader && styles.searchbarLocal,
  );
  return (
    <div className={searchBaseStyles} data-autocomplete={autocomplete} onBlurCapture={onBlurCapture}>
      {children}
    </div>
  );
};
