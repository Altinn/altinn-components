import type { ReactNode } from 'react';
import { Avatar, Flex, Icon, Skeleton } from '..';
import type { AvatarProps, Color, FlexProps, SvgElement, Theme } from '..';
import styles from './timelineBase.module.css';

export type TimelineTheme = 'base' | 'surface';
export type TimelineBorder = 'strong' | 'solid' | 'dashed' | 'hidden';
export type TimelineBorderWidth = 1 | 2;

export interface TimelineBaseProps {
  as?: FlexProps['as'];
  loading?: boolean;
  border?: TimelineBorder;
  color?: Color;
  theme?: Theme;
  icon?: SvgElement;
  iconColor?: Color;
  avatar?: AvatarProps;
  children?: ReactNode;
}

export const TimelineBase = ({
  as = 'section',
  loading,
  border = 'solid',
  color,
  icon,
  iconColor,
  avatar,
  children,
}: TimelineBaseProps) => {
  return (
    <Flex as={as} className={styles.section} color={color}>
      <aside className={styles.sidebar}>
        {(avatar && <Avatar {...avatar} size="sm" />) ||
          (icon && (
            <Skeleton loading={loading} variant="circle">
              <span data-color={iconColor} className={styles.icon}>
                <Icon svgElement={icon} size="sm" />
              </span>
            </Skeleton>
          ))}
        <div className={styles.border} data-loading={loading} data-variant={border} data-color={color} />
      </aside>
      <div className={styles.content}>{children}</div>
    </Flex>
  );
};
