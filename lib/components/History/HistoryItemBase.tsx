import type { ReactNode } from 'react';
import type { AvatarProps } from '../Avatar/';
import type { IconName } from '../Icon/';
import { MetaTimestamp } from '../Meta/';
import { HistoryBorder } from './HistoryBorder';
import { HistoryItemMedia } from './HistoryItemMedia';
import { Typography, type TypographySize } from '../Typography';
import styles from './historyItemBase.module.css';

export interface HistoryItemBaseProps {
  loading?: boolean;
  size?: TypographySize;
  icon?: IconName;
  /** Keep ISO 8601 format for consistency */
  createdBy?: AvatarProps;
  createdAt: string;
  createdAtLabel: string;
  children: ReactNode;
}

export const HistoryItemBase = ({
  loading,
  size = 'lg',
  icon,
  createdBy,
  createdAt,
  createdAtLabel,
  children,
}: HistoryItemBaseProps) => {
  const avatar = size === 'lg' && createdBy;

  return (
    <section className={styles.item}>
      <aside className={styles.sidebar}>
        <HistoryItemMedia loading={loading} icon={icon} avatar={avatar} />
        <HistoryBorder className={styles.border} />
      </aside>
      <article className={styles.content}>
        <MetaTimestamp datetime={createdAt} size="xs">
          {avatar && <strong>{avatar?.name + ', '}</strong>}
          {createdAtLabel}
        </MetaTimestamp>
        <Typography size="lg" className={styles.body}>
          {children}
        </Typography>
      </article>
    </section>
  );
};
