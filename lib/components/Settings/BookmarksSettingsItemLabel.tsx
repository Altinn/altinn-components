import { Heading, type QueryItemProps, QueryLabel } from '..';

export interface BookmarksSettingsItemLabelProps {
  /** Optional title */
  title?: string;
  /** Query params */
  params?: QueryItemProps[];
  /** Loading */
  loading?: boolean;
  /** Highlight words */
  highlightWords?: string[];
}

export const BookmarksSettingsItemLabel = ({
  loading,
  title,
  params,
  highlightWords,
}: BookmarksSettingsItemLabelProps) => {
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
