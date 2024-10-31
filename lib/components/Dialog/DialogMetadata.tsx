import { DialogStatus, type DialogStatusProps } from "./DialogStatus";
import { DialogUpdated } from "./DialogUpdated";
import { DialogDue } from "./DialogDue";
import { DialogSeenBy } from "./DialogSeenBy";
import {
  DialogActivityLog,
  type DialogActivityLogProps,
} from "./DialogActivityLog";
import { MetaBase, MetaItem } from "../Meta";

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
  seenByEndUser?: boolean;
  /** Number of other users that have seen the dialog */
  seenByOthersCount?: number;
  /** Number of attachments */
  attachmentsCount?: number;
  /** ActivityLog */
  activityLog?: DialogActivityLogProps;
};

/**
 * Metadata for a dialog in list view.
 */

export const DialogMetadata = ({
  status,
  updatedAt,
  updatedByName,
  dueAt,
  seenByEndUser = false,
  seenByOthersCount = 0,
  attachmentsCount,
  activityLog,
}: DialogMetadataProps) => {
  return (
    <MetaBase size="xs">
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
      {seenByEndUser ||
        (seenByOthersCount > 0 && (
          <DialogSeenBy
            size="xs"
            seenByEndUser={seenByEndUser}
            seenByOthersCount={seenByOthersCount}
          />
        ))}
      {attachmentsCount ? (
        <MetaItem size="xs" icon="paperclip">
          {attachmentsCount}
        </MetaItem>
      ) : (
        ""
      )}
      {activityLog ? <DialogActivityLog {...activityLog} size="xs" /> : ""}
    </MetaBase>
  );
};
