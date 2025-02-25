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
  type Color,
  type SvgElement,
} from "../";

export interface DialogActivityBadge {
  label?: string;
  value?: string;
}

export type DialogActivitySize = "sm" | "md";

export interface DialogActivityProps {
  type?: string;
  size?: DialogActivitySize;
  icon?: SvgElement;
  color?: Color;
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
  icon = CircleFillIcon,
  color = "neutral",
  size = "sm",
  //  size = "sm",
  createdBy,
  createdAt,
  createdAtLabel,
  description,
  transmissions,
  children,
}: DialogActivityProps) => {
  //  const applicableSize = type === "information" ? "md" : "sm";

  return (
    <TimelineBase
      color={color}
      icon={icon}
      avatar={size === "md" ? createdBy : undefined}
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
