import type { ReactNode } from 'react';
import { AttachmentSection, type AttachmentSectionProps } from '../Attachment';
import type { ContextMenuProps } from '../ContextMenu/';
import { MetaBase } from '../Meta';
import { TransmissionSection, type TransmissionSectionProps } from '../Transmission';
import { type DialogActionButtonProps, DialogActions } from './DialogActions.tsx';
import { DialogActivityLog, type DialogActivityLogProps } from './DialogActivityLog';
import { DialogArticleBase } from './DialogArticleBase';
import { DialogBase } from './DialogBase';
import { DialogBodyBase } from './DialogBodyBase';
import { DialogContent } from './DialogContent';
import { DialogFooter } from './DialogFooter';
import { DialogHeader } from './DialogHeader';
import type { DialogRecipientProps, DialogSenderProps } from './DialogHeadings.tsx';
import { DialogHistory, type DialogHistoryProps } from './DialogHistory';
import { type DialogBackButtonProps, DialogNav } from './DialogNav';
import { DialogSeenBy, type DialogSeenByProps } from './DialogSeenBy';
import type { DialogStatusProps } from './DialogStatus';

export interface DialogProps {
  /** Dialog id */
  id: string;
  /** Title */
  title: string;
  /** Back button */
  backButton?: DialogBackButtonProps;
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
  /** Sender */
  sender?: DialogSenderProps;
  /** Recipient  */
  recipient?: DialogRecipientProps;
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
  /** More information about the dialog, process, etc. */
  additionalInfo?: ReactNode;
  /** Dialog attachments */
  attachments?: AttachmentSectionProps;
  /** Dialog transmissions */
  transmissions?: TransmissionSectionProps;
  /** History */
  history?: DialogHistoryProps;
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
  summary = 'Summary.',
  body,
  actions = [],
  attachments,
  history,
  seenBy,
  activityLog,
  additionalInfo,
  transmissions,
}: DialogProps) => {
  return (
    <DialogBase>
      <DialogNav status={status} dueAt={dueAt} dueAtLabel={dueAtLabel} backButton={backButton} menu={menu} />
      <DialogArticleBase>
        <DialogHeader title={title} sender={sender} recipient={recipient} seen={false} variant="neutral" />
        <DialogBodyBase>
          <DialogContent updatedAt={updatedAt} updatedAtLabel={updatedAtLabel} summary={summary} body={body} />
          {attachments && <AttachmentSection {...attachments} />}
          {actions?.length > 0 && <DialogActions items={actions} />}
          {transmissions && <TransmissionSection {...transmissions} />}
          <MetaBase>
            {seenBy && <DialogSeenBy {...seenBy} />}
            {activityLog && <DialogActivityLog {...activityLog} />}
          </MetaBase>
        </DialogBodyBase>
        {additionalInfo && <DialogFooter additionalInfo={additionalInfo} />}
        {history && <DialogHistory {...history} />}
      </DialogArticleBase>
    </DialogBase>
  );
};
