import { ReactNode } from 'react';
import styles from './toolbar.module.css';
import cx from 'classnames';
export interface ToolbarBaseProps {
  children?: ReactNode;
  bg?: boolean;
  margin?: boolean;
  className?: string;
}

export const ToolbarBase = ({ bg = false, children, margin }: ToolbarBaseProps) => {
  return (
    <div className={styles.toolbar} data-bg={bg} data-margin={margin}>
      {children}
    </div>
  );
};
