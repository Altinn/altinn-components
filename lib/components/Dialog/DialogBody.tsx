import type { ReactNode } from 'react';

import {
  type AvatarProps,
  type DialogActivityLogProps,
  DialogMetadata,
  type DialogSeenByProps,
  Timeline,
  TimelineHeader,
  TimelineSection,
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
    <Timeline>
      <TimelineHeader loading={loading} avatar={sender}>
        <strong>{sender.name}</strong>
        {recipientLabel + ' ' + recipient?.name}
      </TimelineHeader>
      <TimelineSection
        loading={loading}
        footer={<DialogMetadata loading={loading} seenBy={seenBy} activityLog={activityLog} />}
        datetime={updatedAt}
        byline={updatedAtLabel}
        spacing={4}
        color={loading ? 'neutral' : undefined}
      >
        {children || loadingText}
      </TimelineSection>
    </Timeline>
  );
};
