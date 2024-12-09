import type { ReactNode } from 'react';
import type { AvatarProps } from '../Avatar/';
import type { IconName } from '../Icon/';
import { MetaTimestamp } from '../Meta/';
import { Typography } from '../Typography';
import { HistoryBorder } from './HistoryBorder';
import { HistoryItemMedia } from './HistoryItemMedia';
import styles from './historyItemBase.module.css';

export interface HistoryItemBaseProps {
  loading?: boolean;
  /** Keep ISO 8601 format for consistency */
  createdAt: string;
  createdAtLabel?: string;
  createdBy?: AvatarProps;
  icon?: IconName;
  children: ReactNode;
}

export const HistoryItemBase = ({
  loading,
  icon,
  createdAt,
  createdAtLabel,
  createdBy,
  children,
}: HistoryItemBaseProps) => {
  return (
    <section className={styles.item}>
      <aside className={styles.sidebar}>
        <HistoryItemMedia loading={loading} icon={icon} avatar={createdBy} />
        <HistoryBorder className={styles.border} />
      </aside>
      <article className={styles.content}>
        <MetaTimestamp datetime={createdAt} size="xs">
          {createdBy && <strong>{createdBy.name + ', '}</strong>}
          {createdAtLabel}
        </MetaTimestamp>
        <Typography size="lg" className={styles.body}>
          {children}
        </Typography>
      </article>
    </section>
  );
};
