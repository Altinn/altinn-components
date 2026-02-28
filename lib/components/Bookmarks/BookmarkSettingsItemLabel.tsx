import { Heading, type QueryItemProps, QueryLabel } from '..';

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
    <>
      {title && (
        <Heading size="sm" loading={loading} highlightWords={highlightWords}>
          {title}
        </Heading>
      )}
      <QueryLabel params={params} size={title ? 'xs' : 'sm'} variant={title ? 'subtle' : 'default'} />
    </>
  );
};
