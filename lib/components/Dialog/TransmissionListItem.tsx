import { useState, type ReactNode } from "react";
import {
  MetaBase,
  MetaItem,
  TimelineGroup,
  TimelineDot,
  Flex,
  Transmission,
  TransmissionList,
  type TransmissionProps,
  Byline,
  type ListItemSize,
  type ListItemColor,
  type ListItemTheme,
} from "..";

export interface TransmissionListItemProps extends TransmissionProps {
  defaultItemSize?: ListItemSize;
  defaultItemColor?: ListItemColor;
  defaultItemTheme?: ListItemTheme;
  collapseLabel?: string;
  expandLabel?: string;
  level?: number;
  items?: TransmissionListItemProps[];
}

interface ToggleButtonProps {
  expanded: boolean;
  children: ReactNode;
  onClick: () => void;
}

const ToggleButton = ({ expanded, children, onClick }: ToggleButtonProps) => {
  return (
    <MetaBase>
      <MetaItem
        as="button"
        icon={expanded ? "arrow-up" : "arrow-down"}
        reverse
        size="xs"
        onClick={onClick}
      >
        {children}
      </MetaItem>
    </MetaBase>
  );
};

export const TransmissionListItem = ({
  expandLabel = "Expand",
  collapseLabel = "Collapse",
  defaultItemSize,
  defaultItemColor,
  defaultItemTheme,
  level = 0,
  items,
  ...item
}: TransmissionListItemProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  const icon = level < 1 && <TimelineDot />;

  const { createdAt, createdAtLabel } = item;

  return (
    <TimelineGroup icon={icon}>
      <Flex direction="col" spacing={3}>
        <Flex direction="col" spacing={2}>
          <Byline datetime={createdAt}>{createdAtLabel}</Byline>
          <Transmission
            {...item}
            size={item.size || defaultItemSize}
            color={item.color || defaultItemColor}
            theme={item.theme || defaultItemTheme}
          />
        </Flex>
        {items && expanded && (
          <>
            <TransmissionList
              expanded={expanded}
              level={level + 1}
              items={items}
              defaultItemSize={defaultItemSize}
              defaultItemColor={defaultItemColor}
              defaultItemTheme={defaultItemTheme}
            />

            <ToggleButton expanded={expanded} onClick={onToggle}>
              {collapseLabel}
            </ToggleButton>
          </>
        )}

        {items && !expanded && (
          <TimelineGroup>
            <ToggleButton expanded={expanded} onClick={onToggle}>
              {expandLabel.replace("{count}", items.length)}
            </ToggleButton>
          </TimelineGroup>
        )}
      </Flex>
    </TimelineGroup>
  );
};
