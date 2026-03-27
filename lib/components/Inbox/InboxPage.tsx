import type { ReactNode } from 'react';
import { Heading, ItemControls, Toolbar, type ToolbarProps } from '..';
import styles from './inboxPage.module.css';

export interface InboxPageProps {
  title?: string;
  toolbar?: ToolbarProps;
  sticky?: boolean;
  controls?: ReactNode;
  children: ReactNode;
}

export const InboxPage = ({ title, toolbar, sticky = false, controls, children }: InboxPageProps) => {
  return (
    <div className={styles.page}>
      {title && (
        <Heading size="xl" className={styles.title}>
          {title}
        </Heading>
      )}
      <div className={styles.nav} data-sticky={sticky}>
        {toolbar && <Toolbar {...toolbar} />}
        <ItemControls>{controls}</ItemControls>
      </div>
      <div className={styles.body}>{children}</div>
    </div>
  );
};
