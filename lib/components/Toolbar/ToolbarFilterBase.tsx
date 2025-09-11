import cx from 'classnames';
import type { ReactNode } from 'react';
import styles from './toolbarFilterBase.module.css';
export interface ToolbarFilterBaseProps {
  children?: ReactNode;
  expanded?: boolean;
  onBlurCapture?: React.FocusEventHandler<HTMLDivElement>;
  dataTestId?: string;
}

export const ToolbarFilterBase = ({
  expanded = false,
  children,
  onBlurCapture,
  dataTestId,
}: ToolbarFilterBaseProps) => {
  const filterBaseStyles = cx(styles.base, expanded && styles.expanded);

  return (
    <div onBlurCapture={onBlurCapture} className={filterBaseStyles} data-testid={dataTestId}>
      {children}
    </div>
  );
};
