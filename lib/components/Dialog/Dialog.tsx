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

import { DialogAttachments } from "./DialogAttachments";
import type { AttachmentLinkProps } from "../Attachment";

import { DialogHistory } from "./DialogHistory";
import type { HistoryItemProps } from "../History";

import { DialogAction, type DialogButtonProps } from "./DialogAction";
import { DialogUpdated } from "./DialogUpdated";
import { DialogNav, type DialogBackButtonProps } from "./DialogNav";
import { MetaListBase, MetaItem } from "../Meta";
import { Typography, Markdown } from "../Typography";
import { DialogStatusProps } from "./DialogStatus";

export interface DialogProps {
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
  seenByOthers?: number;
  /** Back button */
  backButton?: DialogBackButtonProps;
  /** History */
  history?: HistoryItemProps[];
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
  seenByUser = true,
  history,
}: DialogProps) => {
  return (
    <DialogBase status={status}>
      <DialogNav status={status} dueAt={dueAt} backButton={backButton} />
      <DialogArticle>
        <DialogHeader>
          <DialogTitle size="xl">{title}</DialogTitle>
          <DialogHeadings size="lg" sender={sender} recipient={recipient} />
        </DialogHeader>
        <DialogBody>
          <section>
            <DialogUpdated
              updatedByName={updatedByName}
              updatedAt={updatedAt}
              size="xs"
            />
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

          <MetaListBase size="xs">
            <MetaItem size="xs" icon="eye">
              Sett av deg
            </MetaItem>
            <MetaItem size="xs" icon="clock-dashed">
              Aktivitetslogg
            </MetaItem>
          </MetaListBase>
        </DialogBody>

        {history && <DialogHistory title={"Hva har skjedd?"} items={history} />}
      </DialogArticle>
    </DialogBase>
  );
};
