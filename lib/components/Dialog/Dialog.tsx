import { DialogBase } from "./DialogBase";
import { DialogArticle } from "./DialogArticle";
import {
  DialogHeadings,
  type DialogSenderProps,
  type DialogRecipientProps,
} from "./DialogHeadings";
import { DialogBody } from "./DialogBody";
import { DialogBorder } from "./DialogBorder";
import { DialogHistory } from "./DialogHistory";
import { DialogContact, type ContactLink } from "./DialogContact";
import type { AttachmentProps } from "../Attachments";
import { DialogAttachments } from "./DialogAttachments";

import { DialogDrafts } from "./DialogDrafts";
import { DialogAction, type DialogButtonProps } from "./DialogAction";
import { DialogUpdated } from "./DialogUpdated";
import { DialogNav, type DialogBackButtonProps } from "./DialogNav";
import { MetaBase, MetaItem } from "../Meta";
import { Typography } from "../Typography";
import { HistoryItemProps } from "../History";

export type UpdatedBy = {
  name: string;
};

export interface DialogProps {
  /** Dialog status */
  status?: string;
  /** Updated date time */
  updatedAt?: string;
  /** Latest updated by */
  updatedBy?: UpdatedBy;
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
  /** List of attachments */
  attachments?: AttachmentProps[];
  /** Additional info (supports markdown) */
  additionalInfo?: string;
  /** Dialog is seen by the user */
  seenByUser?: boolean;
  /** Dialog is seen by others (count) */
  seenByOthers?: number;
  /** History */
  history?: HistoryItemProps[];
  /** Contact info (supports markdown) */
  contactInfo?: string;
  /** Contact links */
  contactLinks?: ContactLink[];
  /** Back button */
  backButton?: DialogBackButtonProps;
  //  onBack?: MouseEventHandler<HTMLButtonElement>;
}

/**
 * Full representation of a dialog, including attachments, actions and history,
 */

export const Dialog = ({
  backButton,
  updatedAt,
  updatedBy,
  dueAt,
  status,
  title,
  sender,
  recipient,
  summary = "Summary.",
  body,
  additionalInfo,
  action,
  attachments,
  seenByUser = true,
  history,
  contactInfo,
  contactLinks,
  ...props
}: DialogProps) => {
  return (
    <DialogBase status={status}>
      <DialogNav status={status} dueAt={dueAt} backButton={backButton} />
      <DialogArticle>
        <header className={styles.header}>
          <h1 className={styles.title} data-size="xl">
            {title}
          </h1>
          <DialogHeadings size="lg" sender={sender} recipient={recipient} />
        </header>

        <DialogBody>
          {props?.drafts && <DialogDrafts items={props.drafts} />}

          <DialogBorder status={status} unseen={!seenByUser} size="lg">
            <section>
              <DialogUpdated
                updatedBy={updatedBy}
                updatedAt={updatedAt}
                size="xs"
              />
              <Typography size="lg">
                <p>{summary}</p>
                {body ? <Markdown>{body}</Markdown> : ""}
              </Typography>
            </section>

            <DialogAttachments attachments={attachments} />
            <DialogAction items={action} />

            <MetaBase size="xs">
              <MetaItem size="xs" icon="eye">
                Sett av deg
              </MetaItem>
              <MetaItem size="xs" icon="clock-dashed">
                Aktivitetslogg
              </MetaItem>
            </MetaBase>
          </DialogBorder>

          {additionalInfo ? (
            <Typography size="lg">
              <Markdown>{additionalInfo}</Markdown>
            </Typography>
          ) : (
            ""
          )}
        </DialogBody>

        {history?.length ? (
          <DialogHistory title="Hva har skjedd?" items={history} />
        ) : (
          ""
        )}
        {contactInfo ? (
          <DialogContact title="Kontakt oss" items={contactLinks}>
            {contactInfo}
          </DialogContact>
        ) : (
          ""
        )}
      </DialogArticle>
    </DialogBase>
  );
};
