import { MetaBase, MetaItem } from '../Meta';

export type HistoryMetadataProps = {
  /** Metadata is loading */
  loading?: boolean;
  transmissionsLabel?: string;
  attachmentsLabel?: string;
  onClick: () => void;
};

/**
 * Metadata for a history items.
 */

export const HistoryMetadata = ({ loading, transmissionsLabel, attachmentsLabel, onClick }: HistoryMetadataProps) => {
  if (!transmissionsLabel && !attachmentsLabel) {
    return null;
  }

  return (
    <MetaBase size="xs">
      {attachmentsLabel && (
        <MetaItem
          as={typeof onClick === 'function' ? 'button' : undefined}
          onClick={onClick}
          loading={loading}
          size="xs"
          icon="paperclip"
        >
          {attachmentsLabel}
        </MetaItem>
      )}
      {transmissionsLabel && (
        <MetaItem
          as={typeof onClick === 'function' ? 'button' : undefined}
          onClick={onClick}
          loading={loading}
          size="xs"
          icon="files"
        >
          {transmissionsLabel}
        </MetaItem>
      )}
    </MetaBase>
  );
};
