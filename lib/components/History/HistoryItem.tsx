import { type AttachmentLinkProps, AttachmentList } from '../Attachment';
import { Avatar } from '../Avatar/';
import { MetaBase, MetaItem, MetaTimestamp } from '../Meta/';
import { Typography } from '../Typography';
import { HistoryBorder } from './HistoryBorder';
import styles from './historyItem.module.css';

export interface CreatedByProps {
  type?: 'company' | 'person';
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
    type: 'person',
  },
  createdAt,
  summary,
  attachments,
}: HistoryItemProps) => {
  const title = attachments?.length + ' vedlegg';

  return (
    <section className={styles.item}>
      <header className={styles.header}>
        <Avatar
          type={createdBy.type || 'person'}
          imageUrl={createdBy?.imageUrl}
          name={createdBy.name || 'Unknown name'}
          size="sm"
        />
      </header>
      <HistoryBorder className={styles.border}>
        <article className={styles.body}>
          <MetaBase>
            <MetaTimestamp datetime={createdAt} size="xs">
              {createdBy?.name + ', '}
              {createdAt}
            </MetaTimestamp>
          </MetaBase>
          <Typography size="lg">
            <p>{summary}</p>
            {attachments ? (
              <section>
                <MetaItem size="xs">{title}</MetaItem>
                <AttachmentList items={attachments} />
              </section>
            ) : (
              ''
            )}
          </Typography>
        </article>
      </HistoryBorder>
    </section>
  );
};
