import type { ReactNode } from 'react';

import {
  type AvatarProps,
  SeenByLog,
  type SeenByLogProps,
  Timeline,
  TimelineHeader,
  TimelineSection,
  Typography,
} from '..';

export interface DialogBodyProps {
  /** Loading */
  loading?: boolean;
  /** Unread */
  unread?: boolean;
  /** Sender */
  sender?: AvatarProps;
  /** Recipient  */
  recipient?: AvatarProps;
  /** Recipient label (prefix) */
  recipientLabel?: string;
  /** Group recipient, show both sender and recipient avatars */
  recipientGroup?: boolean;
  /** Dialog is seen by the end user or others */
  seenByLog?: SeenByLogProps;
  /** Content */
  children?: ReactNode;
}

/** DialogBody represents the body, or main part of a dialog, including sender and recipient.  */

export const DialogBody = ({
  loading = false,
  unread,
  sender,
  recipient,
  recipientLabel = 'to',
  children,
  seenByLog,
}: DialogBodyProps) => {
  return (
    <Timeline>
      <TimelineHeader loading={loading} icon={sender}>
        <strong>{sender?.name}</strong>
        {recipientLabel + ' ' + recipient?.name}
      </TimelineHeader>
      <TimelineSection unread={unread} loading={loading} spacing={4} color={loading ? 'neutral' : undefined}>
        {!loading && (
          <>
            <Typography maxWidth="60ch" style={{ marginTop: '0.5em' }}>
              {children}
            </Typography>
            {seenByLog && <SeenByLog {...seenByLog} collapsible={true} />}
          </>
        )}
      </TimelineSection>
    </Timeline>
  );
};
