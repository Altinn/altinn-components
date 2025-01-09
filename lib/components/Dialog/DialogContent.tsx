import type { ReactNode } from 'react';
import {
  Byline,
  DialogActivityLog,
  type DialogActivityLogProps,
  DialogSeenBy,
  type DialogSeenByProps,
  MetaBase,
  Section,
  TimelineSection,
  Typography,
} from '..';

export interface DialogContentProps {
  updatedAt?: string;
  updatedAtLabel?: string;
  seenBy?: DialogSeenByProps;
  activityLog?: DialogActivityLogProps;
  children?: ReactNode;
}

/** Main content of a dialog */

export const DialogContent = ({ updatedAt, updatedAtLabel, seenBy, activityLog, children }: DialogContentProps) => {
  return (
    <TimelineSection>
      <Section spacing={4} margin="section">
        <div>
          <Byline datetime={updatedAt}>{updatedAtLabel}</Byline>
          <Typography size="md">{children}</Typography>
        </div>
        <MetaBase>
          {seenBy && <DialogSeenBy {...seenBy} />}
          {activityLog && <DialogActivityLog {...activityLog} />}
        </MetaBase>
      </Section>
    </TimelineSection>
  );
};
