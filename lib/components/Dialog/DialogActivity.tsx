import type { ReactNode } from "react";
import { CircleFillIcon } from "@navikt/aksel-icons";
import {
  type AvatarProps,
  TimelineBase,
  Section,
  Byline,
  Typography,
  TransmissionList,
  type TransmissionProps,
  type BadgeProps,
} from "../";

export interface DialogActivityBadge {
  label?: string;
  value?: string;
}

export type DialogActivitySize = "sm" | "md";

export interface DialogActivityProps {
  type?: string;
  size?: DialogActivitySize;
  badge?: BadgeProps;
  createdAt?: string;
  createdAtLabel?: string;
  createdBy?: AvatarProps;
  description?: string | ReactNode;
  transmissions?: TransmissionProps[];
  collapsed?: boolean;
  children?: ReactNode;
}

export const DialogActivity = ({
  type,
  size = "sm",
  createdBy,
  createdAt,
  createdAtLabel,
  description,
  transmissions,
  children,
}: DialogActivityProps) => {
  const applicableSize = type === "information" ? "md" : "sm";

  return (
    <TimelineBase
      color="neutral"
      icon={CircleFillIcon}
      avatar={applicableSize === "md" ? createdBy : undefined}
    >
      <Section style={{ marginBottom: ".5em" }}>
        {createdAtLabel && (
          <Byline datetime={createdAt}>
            <strong>{createdBy?.name}</strong>
            {createdAtLabel}
          </Byline>
        )}
        {description && <Typography>{children || description}</Typography>}
        {transmissions && <TransmissionList items={transmissions} />}
      </Section>
    </TimelineBase>
  );
};
