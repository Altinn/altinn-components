import { DialogStatus, type DialogStatusProps } from "./DialogStatus";
import { DialogUpdated } from "./DialogUpdated";
import { DialogDue } from "./DialogDue";
import { DialogSeenBy } from "./DialogSeenBy";
import { MetaListBase, MetaItem } from "../Meta";

export type DialogMetadataProps = {
  /** Dialog status */
  status?: DialogStatusProps;
  /** Updated datetime */
  updatedAt?: string;
  /** Updated by name */
  updatedByName?: string;
  /** Dialog due date */
  dueAt?: string;
  /** Dialog is seen by the user */
  seenByUser?: boolean;
  /** Number of other users that have seen the dialog */
  seenByOthersCount?: number;
  /** Number of attachments */
  attachmentsCount?: number;
};

/**
 * Metadata for a dialog in list view.
 */

export const DialogMetadata = ({
  status,
  updatedAt,
  updatedByName,
  dueAt,
  seenByUser = false,
  seenByOthersCount = 0,
  attachmentsCount,
}: DialogMetadataProps) => {
  return (
    <MetaListBase size="xs">
      {status ? (
        <DialogStatus
          size="xs"
          value={status?.value}
          label={status?.label || status?.value}
        />
      ) : (
        ""
      )}
      {updatedAt ? (
        <DialogUpdated
          updatedAt={updatedAt}
          updatedByName={updatedByName}
          size="xs"
        />
      ) : (
        ""
      )}
      {dueAt ? <DialogDue dueAt={dueAt} size="xs" /> : ""}
      {seenByUser || seenByOthersCount ? (
        <DialogSeenBy
          size="xs"
          seenByUser={seenByUser}
          seenByOthersCount={seenByOthersCount}
        />
      ) : (
        ""
      )}
      {attachmentsCount ? (
        <MetaItem size="xs" icon="paperclip">
          {attachmentsCount}
        </MetaItem>
      ) : (
        ""
      )}
    </MetaListBase>
  );
};
