import type { ReactNode } from "react";
import type { Color } from "..";

import styles from "./timelineGroup.module.css";

export interface TimelineGroupProps {
  loading?: boolean;
  color?: Color;
  icon?: ReactNode;
  children?: ReactNode;
}

export const TimelineGroup = ({
  color,
  icon,
  children,
}: TimelineGroupProps) => {
  return (
    <section className={styles.section} data-color={color}>
      <aside className={styles.sidebar}>
        {icon && <div className={styles.icon}>{icon}</div>}
        <div className={styles.border} />
      </aside>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
