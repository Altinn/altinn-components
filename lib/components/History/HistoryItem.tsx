import { MetaItem, MetaTimestamp } from "../Meta";
import { Avatar } from "../Avatar/";
import styles from "./historyItem.module.css";
import { AttachmentList, type AttachmentLinkProps } from "../Attachment";
import { Typography } from "../Typography";

export interface CreatedByProps {
  type?: "company" | "person";
  name?: string;
  imageUrl?: string;
}

export interface HistoryItemProps {
  createdBy?: CreatedByProps;
  createdAt?: string;
  summary?: string;
  attachments?: AttachmentLinkProps[];
}

export const HistoryItem = ({
  createdBy = {
    type: "person",
  },
  createdAt,
  summary,
  attachments,
}: HistoryItemProps) => {
  const title = attachments?.length + " vedlegg";

  return (
    <article className={styles.item}>
      <header className={styles?.header}>
        <div className={styles?.createdBy}>
          <Avatar
            type={createdBy.type || "person"}
            imageUrl={createdBy?.imageUrl}
            name={createdBy.name || "Unknown name"}
            size="sm"
          />
          <strong className={styles?.createdByName}>{createdBy?.name}</strong>
        </div>
        <MetaTimestamp datetime={createdAt} size="xs">
          {createdAt}
        </MetaTimestamp>
      </header>
      <Typography size="lg" className={styles.body} data-seen={true}>
        <p>{summary}</p>
        {attachments ? (
          <section>
            <MetaItem size="xs">{title}</MetaItem>
            <AttachmentList items={attachments} />
          </section>
        ) : (
          ""
        )}
      </Typography>
    </article>
  );
};
