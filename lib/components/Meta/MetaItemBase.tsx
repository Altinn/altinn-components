import type { ElementType, ReactNode } from "react";
import styles from "./metaItem.module.css";
import cx from "classnames";

export type MetaItemSize = "xs" | "sm" | "md";

export interface MetaItemBaseProps {
  as?: ElementType;
  size?: MetaItemSize;
  dateTime?: string;
  className?: string;
  children?: ReactNode;
}

export const MetaItemBase = ({
  as,
  size,
  className,
  children,
  ...rest
}: MetaItemBaseProps) => {
  const Component = as || "span";

  return (
    <Component
      data-size={size}
      className={cx(styles?.item, className)}
      {...rest}
    >
      {children}
    </Component>
  );
};
