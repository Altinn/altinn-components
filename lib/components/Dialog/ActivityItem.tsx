import type { ReactNode } from "react";
import {
  type AvatarProps,
  type DialogAttachmentsProps,
  type DialogTransmissionsProps,
  TimelineItem,
  Typography,
} from "../";

// import { ActivityItemDetails } from "./ActivityItemDetails";

export type ActivityItemType = "information" | "created" | "closed" | "opened";

export interface ActivityItemProps {
  type?: ActivityItemType;
  size?: TimelineItemSize;
  createdAt?: string;
  createdAtLabel?: string;
  createdBy?: AvatarProps;
  description?: string | ReactNode;
  attachments?: DialogAttachmentsProps;
  transmissions?: DialogTransmissionsProps;
  collapsed?: boolean;
  children?: ReactNode;
}

const typeToSize: Record<ActivityItemType, TimelineItemSize> = {
  information: "sm",
  created: "xs",
  closed: "xs",
  opened: "xs",
};

export const ActivityItem = ({
  type,
  size = "sm",
  createdBy,
  createdAt,
  createdAtLabel,
  description,
  children,
}: ActivityItemProps) => {
  const applicableSize = (type && typeToSize[type]) || size;

  return (
    <TimelineItem
      color="neutral"
      size={applicableSize}
      datetime={createdAt}
      dateline={createdAtLabel}
      byline={createdBy?.name}
      avatar={applicableSize !== "xs" ? createdBy : undefined}
    >
      <Typography
        variant={applicableSize === "xs" ? "subtle" : "default"}
        size={applicableSize === "xs" ? "sm" : "md"}
      >
        {children || description}
      </Typography>
    </TimelineItem>
  );
};
