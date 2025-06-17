import type { ReactNode } from 'react';

import {
  type AvatarProps,
  type DialogActivityLogProps,
  SeenByLog,
  type SeenByLogProps,
  Timeline,
  TimelineHeader,
  TimelineSection,
  Typography,
} from '..';

export interface DialogBodyProps {
  /** Sender */
  sender: AvatarProps;
  /** Recipient  */
  recipient?: AvatarProps;
  /** Loading */
  loading?: boolean;
  /** Loading text */
  loadingText?: string;
  /** Updated date time */
  updatedAt?: string;
  /** Updated label */
  updatedAtLabel?: string;
  /** Due date */
  dueAt?: string;
  /** Due at label */
  dueAtLabel?: string;
  /** Recipient label (prefix) */
  recipientLabel?: string;
  /** Group recipient, show both sender and recipient avatars */
  recipientGroup?: boolean;
  /** Dialog is seen by the end user or others */
  seenByLog?: SeenByLogProps;
  /** Activity Log */
  activityLog?: DialogActivityLogProps;
  /** Content */
  children?: ReactNode;
}

/** DialogBody represents the body, or main part of a dialog, including sender and recipient.  */

export const DialogBody = ({
  loading,
  sender,
  recipient,
  recipientLabel,
  updatedAt,
  updatedAtLabel,
  children,
  seenByLog,
}: DialogBodyProps) => {
  return (
    <Timeline>
      <TimelineHeader loading={loading} icon={sender}>
        <strong>{sender.name}</strong>
        {recipientLabel + ' ' + recipient?.name}
      </TimelineHeader>
      <TimelineSection
        loading={loading}
        datetime={updatedAt}
        byline={updatedAtLabel}
        spacing={4}
        color={loading ? 'neutral' : undefined}
      >
        {!loading && (
          <>
            <Typography maxWidth="60ch" style={{ marginTop: '0.5em' }}>
              {children}
            </Typography>
            {seenByLog && <SeenByLog {...seenByLog} />}
          </>
        )}
      </TimelineSection>
    </Timeline>
  );
};
