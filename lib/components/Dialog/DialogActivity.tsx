import { CircleFillIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import {
  type AvatarProps,
  type BadgeProps,
  Byline,
  type Color,
  Section,
  type SvgElement,
  TimelineBase,
  TransmissionList,
  type TransmissionProps,
  Typography,
} from '..';

export interface DialogActivityBadge {
  label?: string;
  value?: string;
}

export type DialogActivitySize = 'sm' | 'md';

export interface DialogActivityProps {
  type?: string;
  size?: DialogActivitySize;
  icon?: SvgElement;
  color?: Color;
  badge?: BadgeProps;
  createdAt?: string;
  createdAtLabel?: string;
  createdBy?: AvatarProps;
  description?: string | ReactNode;
  transmissions?: TransmissionProps[];
  collapsed?: boolean;
  children?: ReactNode;
}

export const DialogActivity = ({
  icon = CircleFillIcon,
  color = 'neutral',
  size = 'sm',
  createdBy,
  createdAt,
  createdAtLabel,
  description,
  transmissions,
}: DialogActivityProps) => {
  return (
    <TimelineBase color={color} icon={size === 'md' ? createdBy : icon}>
      <Section style={{ marginBottom: '.5em' }}>
        {createdAtLabel && (
          <Byline datetime={createdAt}>
            <strong>{createdBy?.name}</strong>
            {createdAtLabel}
          </Byline>
        )}
        {description && <Typography>{description}</Typography>}
        {transmissions && <TransmissionList items={transmissions} />}
      </Section>
    </TimelineBase>
  );
};
