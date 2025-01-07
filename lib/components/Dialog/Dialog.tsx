import type { ReactNode } from 'react';
import {
  Article,
  type AvatarProps,
  type BackButtonProps,
  type ContextMenuProps,
  type DialogActionButtonProps,
  DialogActions,
  type DialogActivityLogProps,
  DialogAttachments,
  type DialogAttachmentsProps,
  DialogByline,
  DialogContent,
  DialogHistory,
  type DialogHistoryProps,
  DialogMetadata,
  DialogSection,
  type DialogSectionProps,
  type DialogSeenByProps,
  type DialogStatusProps,
  DialogTimeline,
  type DialogTimelineProps,
  Heading,
  PageBase,
  PageNav,
  Typography,
} from '..';

export interface DialogProps {
  /** Dialog id */
  id: string;
  /** Title */
  title: string;
  /** Sender */
  sender: AvatarProps;
  /** Recipient  */
  recipient?: AvatarProps;
  /** Back button */
  backButton?: BackButtonProps;
  /** Context menu */
  menu?: ContextMenuProps;
  /** Dialog status */
  status?: DialogStatusProps;
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
  /** Summary */
  summary?: string;
  /** Body (should be an output markdown/html rendered to React / HTML) */
  body?: ReactNode;
  /** List of action (buttons) */
  actions?: DialogActionButtonProps[];
  /** Dialog is seen by the end user or others */
  seenBy?: DialogSeenByProps;
  /** Activity Log */
  activityLog?: DialogActivityLogProps;
  /** Dialog attachments */
  attachments?: DialogAttachmentsProps;
  /** Dialog history */
  history?: DialogHistoryProps;
  /** Dialog timeline */
  timeline?: DialogTimelineProps;
  /** More information about the dialog, process, etc. */
  additionalInfo?: DialogSectionProps;
  /** Contact information. */
  contactInfo?: DialogSectionProps;
}

/**
 * Full representation of a dialog, including attachments, actions and history,
 */

export const Dialog = ({
  backButton,
  menu,
  updatedAt,
  updatedAtLabel,
  dueAt,
  dueAtLabel,
  status,
  title,
  sender,
  recipient,
  recipientLabel = 'to',
  recipientGroup,
  summary = 'Summary.',
  body,
  actions = [],
  attachments,
  seenBy,
  activityLog,
  history,
  timeline,
  additionalInfo,
  contactInfo,
}: DialogProps) => {
  return (
    <PageBase bg="default" shadow="xs">
      <PageNav padding="sm" backButton={backButton} menu={menu}>
        <DialogMetadata status={status} dueAt={dueAt} dueAtLabel={dueAtLabel} />
      </PageNav>
      <Article padding="xl" spacing="xl">
        <Heading size="xl">{title}</Heading>
        {history && <DialogHistory {...history} collapsible={true} />}

        <DialogByline
          size="lg"
          sender={sender}
          recipient={recipient}
          recipientLabel={recipientLabel}
          recipientGroup={recipientGroup}
        />

        <DialogContent updatedAt={updatedAt} updatedAtLabel={updatedAtLabel} seenBy={seenBy} activityLog={activityLog}>
          <p>{summary}</p>
          {body}
          {attachments && <DialogAttachments {...attachments} />}
          {actions?.length > 0 && <DialogActions items={actions} />}
        </DialogContent>

        {timeline && <DialogTimeline {...timeline} />}

        {additionalInfo && (
          <DialogSection title={additionalInfo?.title}>
            <Typography size="md">{additionalInfo?.children}</Typography>
          </DialogSection>
        )}

        {contactInfo && (
          <DialogSection title={contactInfo?.title}>
            <Typography size="md">{contactInfo?.children}</Typography>
          </DialogSection>
        )}
      </Article>
    </PageBase>
  );
};
