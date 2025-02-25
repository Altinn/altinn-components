import { Byline, Typography, TimelineBase, type TimelineBaseProps } from "..";
import { CircleFillIcon } from "@navikt/aksel-icons";

export interface TimelineItemProps extends TimelineBaseProps {
  datetime?: string;
  byline?: string;
}

export const TimelineItem = ({
  icon = CircleFillIcon,
  datetime,
  byline,
  children,
  ...props
}: TimelineItemProps) => {
  return (
    <TimelineBase {...props} icon={icon}>
      <Byline datetime={datetime}>{byline}</Byline>
      <Typography size="md">
        <p>{children}</p>
      </Typography>
    </TimelineBase>
  );
};
