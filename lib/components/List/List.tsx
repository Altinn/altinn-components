import cn from 'classnames';
import type { ReactNode } from 'react';
import React from 'react';

import classes from './List.module.css';

interface ListProps extends React.HTMLAttributes<HTMLElement> {
  /** children element(s) to be listed */
  children: React.ReactNode | React.ReactNode[];
  /** The heading to go above the list */
  heading?: ReactNode;
  /** Enable spacing between list items */
  spacing?: "none" | "sm" | "md" | "lg";
  /** className for styling the list */
  className?: string;
}

export const List = ({
  children,
  heading,
  spacing = "md",
  className,
  ...props
}: ListProps) => {
  return (
    <>
      <ul
        data-spacing={spacing}
        className={cn(
          classes.list,
          className,
        )}
        {...props}
      >
        {children}
      </ul>
    </>
  );
};
