import type { ReactNode } from 'react';

import {
  type AvatarProps,
  type DialogActivityLogProps,
  DialogByline,
  DialogMetadata,
  type DialogSeenByProps,
  Section,
  Skeleton,
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
  /** Group sender and recipient */
  grouped?: boolean;
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
  seenBy?: DialogSeenByProps;
  /** Activity Log */
  activityLog?: DialogActivityLogProps;
  /** Content */
  children?: ReactNode;
}

/** DialogBody represents the body, or main part of a dialog, including sender and recipient.  */

export const DialogBody = ({
  loading,
  loadingText = 'Loading ...',
  grouped,
  sender,
  recipient,
  recipientLabel,
  updatedAt,
  updatedAtLabel,
  children,
  seenBy,
  activityLog,
}: DialogBodyProps) => {
  return (
    <Section spacing={6}>
      <DialogByline
        size="lg"
        sender={sender}
        recipient={recipient}
        recipientLabel={recipientLabel}
        grouped={grouped}
        loading={loading}
      />

      <TimelineSection isSeenByEndUser={seenBy?.seenByEndUser}>
        <Section spacing={4} margin="section">
          <div>
            <DialogMetadata loading={loading} updatedAt={updatedAt} updatedAtLabel={updatedAtLabel} />
            <Typography loading={loading} size="md">
              {(loading && (
                <p>
                  <Skeleton loading={loading}>{loadingText}</Skeleton>
                </p>
              )) ||
                children}
            </Typography>
          </div>
          <DialogMetadata loading={loading} seenBy={seenBy} activityLog={activityLog} />
        </Section>
      </TimelineSection>
    </Section>
  );
};
