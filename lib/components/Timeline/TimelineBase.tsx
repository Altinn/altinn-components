import type { ReactNode } from 'react';
import { TimelineBorder, type TimelineBorderVariant, TimelineIcon, Byline, Section } from '..';
import type { Color, Theme, AvatarProps, AvatarGroupProps, SvgElement, SectionProps } from '..';
import styles from './timelineBase.module.css';

export interface TimelineBaseProps {
  loading?: boolean;
  border?: TimelineBorderVariant;
  borderHidden?: boolean;
  color?: Color;
  theme?: Theme;
  icon?: SvgElement;
  iconColor?: Color;
  iconTheme?: Theme;
  datetime?: string;
  dateline?: ReactNode;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  margin?: SectionProps['margin'];
  children?: ReactNode;
}

export const TimelineBase = ({
  border = 'solid',
  borderHidden,
  datetime,
  dateline,
  margin = 0,
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
            <TimelineIcon icon={icon} avatar={avatar} avatarGroup={avatarGroup} />
          </span>
        )}
        {!borderHidden && <TimelineBorder variant={border} />}
      </aside>
      <div className={styles.content}>
        {dateline && <Byline datetime={datetime}>{dateline}</Byline>}
        <Section margin={margin}>{children}</Section>
      </div>
    </section>
  );
};
