import { Byline, Typography, TimelineBase, type TimelineBaseProps } from "..";

export interface TimelineItemProps extends TimelineBaseProps {
  size?: "sm" | "md";
  datetime?: string;
  byline?: string;
}

export const TimelineItem = ({
  size,
  datetime,
  byline,
  children,
  ...props
}: TimelineItemProps) => {
  return (
    <TimelineBase {...props}>
      {byline && <Byline datetime={datetime}>{byline}</Byline>}
      {children && <Typography size={size}>{children}</Typography>}
    </TimelineBase>
  );
};
