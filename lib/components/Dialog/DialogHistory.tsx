"use client";
import { ArrowDownIcon, ArrowUpIcon } from "@navikt/aksel-icons";
import { type ReactNode, useState } from "react";
import {
  ActivityItem,
  type ActivityItemProps,
  ButtonBase,
  Icon,
  Timeline,
  TimelineBase,
} from "..";

import styles from "./dialogHistory.module.css";

export interface DialogHistoryProps {
  items?: ActivityItemProps[];
  updatedAt?: string;
  updatedAtLabel?: string;
  expandLabel?: string;
  collapseLabel?: string;
  collapsible?: boolean;
}

interface ToggleButtonProps {
  expanded?: boolean;
  children: ReactNode;
  onClick: () => void;
}

const ToggleButton = ({ expanded, children, onClick }: ToggleButtonProps) => {
  return (
    <ButtonBase
      className={styles.toggle}
      size="sm"
      onClick={onClick}
      style={{ display: "inline-flex", alignItems: "center" }}
    >
      {children}
      <Icon svgElement={expanded ? ArrowUpIcon : ArrowDownIcon} size="sm" />
    </ButtonBase>
  );
};

export const DialogHistory = ({
  items,
  collapsible = false,
  expandLabel = "Expand history",
  collapseLabel = "Collapse history",
}: DialogHistoryProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggle = () => {
    setExpanded((prevState) => !prevState);
  };

  if (!items) {
    return null;
  }

  if (expanded || !collapsible) {
    return (
      <Timeline>
        {items.map((item, index) => {
          return <ActivityItem {...item} key={index} />;
        })}

        {collapsible && (
          <ToggleButton expanded={true} onClick={onToggle}>
            {collapseLabel}
          </ToggleButton>
        )}
      </Timeline>
    );
  }

  return (
    <TimelineBase>
      <ToggleButton onClick={onToggle}>{expandLabel}</ToggleButton>
    </TimelineBase>
  );
};
