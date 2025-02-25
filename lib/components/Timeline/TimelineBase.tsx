import type { ReactNode } from "react";
import { TimelineBorder, TimelineIcon } from "..";
import type {
  Color,
  Theme,
  AvatarProps,
  AvatarGroupProps,
  SvgElement,
} from "..";
import styles from "./timelineBase.module.css";

export interface TimelineBaseProps {
  loading?: boolean;
  border?: boolean;
  color?: Color;
  theme?: Theme;
  icon?: SvgElement;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

export const TimelineBase = ({
  color,
  icon,
  avatar,
  avatarGroup,
  children,
}: TimelineBaseProps) => {
  return (
    <section className={styles.section} data-color={color}>
      <aside className={styles.sidebar}>
        {(icon || avatar || avatarGroup) && (
          <TimelineIcon icon={icon} avatar={avatar} avatarGroup={avatarGroup} />
        )}
        <TimelineBorder />
      </aside>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
