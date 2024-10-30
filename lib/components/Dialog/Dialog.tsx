import { DialogBase } from "./DialogBase";
import { DialogArticle } from "./DialogArticle";
import { DialogHeader } from "./DialogHeader";
import { DialogBody } from "./DialogBody";
import {
  DialogHeadings,
  type DialogSenderProps,
  type DialogRecipientProps,
} from "./DialogHeadings";
import { DialogTitle } from "./DialogTitle";
import { DialogMetadata } from "./DialogMetadata";
import type { DialogActivityLogProps } from "./DialogActivityLog";

import { DialogAttachments } from "./DialogAttachments";
import type { AttachmentLinkProps } from "../Attachment";

import { DialogHistory } from "./DialogHistory";
import type { HistoryItemProps } from "../History/HistoryItem";

import { DialogAction, type DialogButtonProps } from "./DialogAction";
import { DialogNav, type DialogBackButtonProps } from "./DialogNav";
import { Typography, Markdown } from "../Typography";
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
  attachments?: AttachmentLinkProps[];
  /** Dialog is seen by the user */
  seenByUser?: boolean;
  /** Dialog is seen by others (count) */
  seenByOthersCount?: number;
  /** History */
  history?: HistoryItemProps[];
  /** Activity Log */
  activityLog?: DialogActivityLogProps[];
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
  seenByUser = true,
  seenByOthersCount,
  activityLog = {
    label: "Aktivitetslogg",
  },
}: DialogProps) => {
  return (
    <DialogBase>
      <DialogNav status={status} dueAt={dueAt} backButton={backButton} />
      <DialogArticle>
        <DialogHeader>
          <DialogTitle size="xl">{title}</DialogTitle>
          <DialogHeadings size="lg" sender={sender} recipient={recipient} />
        </DialogHeader>
        <DialogBody>
          <section>
            <DialogMetadata
              updatedByName={updatedByName}
              updatedAt={updatedAt}
            ></DialogMetadata>

            <Typography size="lg">
              <p>{summary}</p>
              {body ? <Markdown>{body}</Markdown> : ""}
            </Typography>
          </section>

          {attachments && (
            <DialogAttachments
              title={attachments?.length + " vedlegg"}
              items={attachments}
            />
          )}
          {action && <DialogAction items={action} />}

          <DialogMetadata
            seenByUser={seenByUser}
            seenByOthersCount={seenByOthersCount}
            activityLog={activityLog}
          ></DialogMetadata>
        </DialogBody>

        {history && <DialogHistory title={"Hva har skjedd?"} items={history} />}
      </DialogArticle>
    </DialogBase>
  );
};
