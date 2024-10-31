import { DialogBase } from "./DialogBase";
import { DialogArticleBase } from "./DialogArticleBase";
import { DialogHeader } from "./DialogHeader";
import { DialogContent } from "./DialogContent";
import { DialogFooter } from "./DialogFooter";
import { DialogBodyBase } from "./DialogBodyBase";
import { MetaBase } from "../Meta";
import {
  DialogAttachments,
  type DialogAttachmentsProps,
} from "./DialogAttachments";
import { DialogSeenBy, type DialogSeenByProps } from "./DialogSeenBy";
import {
  DialogActivityLog,
  type DialogActivityLogProps,
} from "./DialogActivityLog";

import { DialogHistory, type DialogHistoryProps } from "./DialogHistory";
import { DialogAction, type DialogButtonProps } from "./DialogAction";
import { DialogNav, type DialogBackButtonProps } from "./DialogNav";
import { DialogStatusProps } from "./DialogStatus";

export interface DialogProps {
  /** Back button */
  backButton?: DialogBackButtonProps;
  /** Dialog status */
  status?: DialogStatusProps;
  /** Updated date time */
  updatedAt?: string;
  /** Latest updated by name */
  updatedByName?: string;
  /** Due date */
  dueAt?: string;
  /** Sender */
  sender?: DialogSenderProps;
  /** Recipient  */
  recipient?: DialogRecipientProps;
  /** Title */
  title?: string;
  /** Summary */
  summary?: string;
  /** Body (supports markdown) */
  body?: string;
  /** List of action (buttons) */
  action?: DialogButtonProps[];
  /** Dialog attachments */
  attachments?: DialogAttachmentsProps;
  /** Dialog is seen by the end user or others */
  seenBy?: DialogSeenByProps;
  /** Activity Log */
  activityLog?: DialogActivityLogProps;
  /** More information about the dialog, process, etc. */
  additionalInfo?: string;
  /** History */
  history?: DialogHistoryProps;
}

/**
 * Full representation of a dialog, including attachments, actions and history,
 */

export const Dialog = ({
  backButton,
  updatedAt,
  updatedByName,
  dueAt,
  status,
  title,
  sender,
  recipient,
  summary = "Summary.",
  body,
  action,
  attachments,
  history,
  seenBy,
  activityLog,
  additionalInfo,
}: DialogProps) => {
  return (
    <DialogBase>
      <DialogNav status={status} dueAt={dueAt} backButton={backButton} />
      <DialogArticleBase>
        <DialogHeader title={title} sender={sender} recipient={recipient} />
        <DialogBodyBase>
          <DialogContent
            updatedAt={updatedAt}
            updatedByName={updatedByName}
            summary={summary}
            body={body}
          />
          {attachments && <DialogAttachments {...attachments} />}
          {action && <DialogAction items={action} />}

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
