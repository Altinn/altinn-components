import cx from 'classnames';
import type { ElementType, ReactNode } from 'react';
import styles from './BreadcrumbsLink.module.css';

export interface BreadcrumbsLinkProps extends React.HTMLAttributes<HTMLButtonElement> {
  as?: ElementType;
  selected?: boolean;
  disabled?: boolean;
  href?: string;
  label?: ReactNode | string;
  className?: string;
  children?: ReactNode;
}

export const BreadcrumbsLink = ({
  as,
  className,
  disabled = false,
  selected,
  tabIndex = 0,
  label,
  children,
  ...rest
}: BreadcrumbsLinkProps) => {
  const Component = as || 'a';
  return (
    <Component
      tabIndex={tabIndex}
      aria-selected={selected}
      aria-disabled={disabled}
      disabled={disabled}
      className={cx(styles.link, className)}
      {...rest}
    >
      {children || label}
    </Component>
  );
};
