import type { ReactNode } from 'react';
import styles from './dialogBody.module.css';

import {
  Avatar,
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
        <span className={styles.byline}>
          <strong className={styles.senderName}>{sender?.name}</strong>
          {recipient && (
            <span className={styles.recipient}>
              {recipientLabel}
              <span className={styles.recipient}>
                <Avatar {...recipient} className={styles.recipientAvatar} />
                <span className={styles.recipientName}>{recipient?.name}</span>
              </span>
            </span>
          )}
        </span>
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
