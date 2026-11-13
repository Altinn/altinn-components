import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './autocompleteBase.module.css';

export interface AutocompleteBaseProps {
  /** @deprecated No effect. */
  id?: string;
  className?: string;
  expanded?: boolean;
  children?: ReactNode;
  ref?: React.Ref<HTMLDivElement>;
}

export const AutocompleteBase = ({ expanded, children, className, ref }: AutocompleteBaseProps) => {
  return (
    <div
      className={cx(styles.autocomplete, className)}
      data-expanded={expanded}
      data-size="sm"
      data-autocomplete="true"
      ref={ref}
    >
      {children}
    </div>
  );
};
