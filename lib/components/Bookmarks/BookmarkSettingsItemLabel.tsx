import { Heading, type QueryItemProps, QueryLabel } from '..';
import styles from './bookmarkSettingsItemLabel.module.css';

export interface BookmarkSettingsItemLabelProps {
  /** Optional title */
  title?: string;
  /** Query params */
  params?: QueryItemProps[];
  /** Loading */
  loading?: boolean;
  /** Highlight words */
  highlightWords?: string[];
}

export const BookmarkSettingsItemLabel = ({
  loading,
  title,
  params,
  highlightWords,
}: BookmarkSettingsItemLabelProps) => {
  return (
    <span className={styles.label}>
      {title && (
        <Heading size="xs" loading={loading} highlightWords={highlightWords}>
          {title}
        </Heading>
      )}
      <QueryLabel params={params} size="xxs" variant={title ? 'subtle' : 'default'} />
    </span>
  );
};
