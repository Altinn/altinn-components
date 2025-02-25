import type { ReactNode } from "react";
import { TimelineBorder, type TimelineBorderVariant, TimelineIcon } from "..";
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
  border?: TimelineBorderVariant;
  borderHidden?: boolean;
  color?: Color;
  theme?: Theme;
  icon?: SvgElement;
  iconColor?: Color;
  iconTheme?: Theme;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  children?: ReactNode;
}

export const TimelineBase = ({
  border = "solid",
  borderHidden,
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
          <span className={styles.icon}>
            <TimelineIcon
              icon={icon}
              avatar={avatar}
              avatarGroup={avatarGroup}
            />
          </span>
        )}
        {!borderHidden && <TimelineBorder variant={border} />}
      </aside>
      <div className={styles.content}>{children}</div>
    </section>
  );
};
