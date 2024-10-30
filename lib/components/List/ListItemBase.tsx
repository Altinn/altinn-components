import { ReactNode, ElementType } from "react";
import { Icon, type IconName } from "../Icon";
import { Badge } from "../Badge";
import styles from "./listItem.module.css";
import cx from "classnames";

export type ListItemSize = "xs" | "sm" | "md" | "lg" | "xl";

interface ListItemBaseProps {
  as?: ElementType;
  size?: ListItemSize;
  icon?: IconName;
  badge?: string;
  color?: string;
  href?: string;
  className?: string;
  collapsible?: boolean;
  expanded?: boolean;
  children?: ReactNode;
}

export const ListItemBase = ({
  as,
  children,
  className,
  href,
  size,
  color,
  collapsible,
  expanded,
  icon,
  badge,
  ...rest
}: ListItemBaseProps) => {
  const Component = as || "a";

  const applicableIcon =
    collapsible && expanded
      ? "chevron-up"
      : collapsible
      ? "chevron-down"
      : icon
      ? "chevron-right"
      : icon;

  return (
    <Component
      className={cx(styles?.item, className)}
      data-color={color}
      data-size={size}
      aria-expanded={expanded}
      href={href}
      {...rest}
    >
      <div className={styles.content} data-size={size}>
        {children}
      </div>
      <div className={styles?.action}>
        {badge ? <Badge>{badge}</Badge> : ""}
        {applicableIcon ? (
          <Icon name={applicableIcon} className={styles?.actionIcon} />
        ) : (
          ""
        )}
      </div>
    </Component>
  );
};
