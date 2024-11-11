import { Avatar } from '../Avatar/';
import { MetaBase, MetaTimestamp } from '../Meta/';
import { Typography } from '../Typography';
import { HistoryAttachments, type HistoryAttachmentsProps } from './HistoryAttachments';
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
  createdAtLabel?: string;
  summary?: string;
  attachments?: HistoryAttachmentsProps;
}

export const HistoryItem = ({
  createdBy = {
    type: 'person',
  },
  createdAt,
  createdAtLabel,
  summary,
  attachments,
}: HistoryItemProps) => {
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
              {[createdBy?.name, createdAtLabel].join(', ')}
            </MetaTimestamp>
          </MetaBase>
          <Typography size="lg">
            <p>{summary}</p>
            {attachments && <HistoryAttachments {...attachments} />}
          </Typography>
        </article>
      </HistoryBorder>
    </section>
  );
};
