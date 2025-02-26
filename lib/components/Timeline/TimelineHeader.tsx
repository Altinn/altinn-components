import type { ReactNode } from 'react';
import type { FlexProps, Color, AvatarProps, AvatarGroupProps, SvgElement } from '..';
import { Flex, TimelineIcon } from '..';
import { CircleFillIcon } from '@navikt/aksel-icons';
import styles from './timelineHeader.module.css';

export interface TimelineHeaderProps {
  as?: FlexProps['as'];
  color?: Color;
  avatar?: AvatarProps;
  avatarGroup?: AvatarGroupProps;
  icon?: SvgElement;
  children?: ReactNode;
}

export const TimelineHeader = ({
  as = 'header',
  color = 'neutral',
  icon = CircleFillIcon,
  avatar,
  avatarGroup,
  children,
}: TimelineHeaderProps) => {
  return (
    <Flex as={as} className={styles.header} color={color}>
      <aside className={styles.sidebar}>
        {(icon || avatar || avatarGroup) && <TimelineIcon icon={icon} avatar={avatar} avatarGroup={avatarGroup} />}
      </aside>
      <div className={styles.content}>{children}</div>
    </Flex>
  );
};
