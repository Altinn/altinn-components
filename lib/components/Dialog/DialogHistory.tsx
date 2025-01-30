'use client';
import { type ReactNode, useState } from 'react';
import { ActivityItem, type ActivityItemProps, ButtonBase, Icon, TimelineBase, TimelineSection } from '..';

import styles from './dialogHistory.module.css';

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
      style={{ display: 'inline-flex', alignItems: 'center' }}
    >
      {children}
      <Icon name={expanded ? 'arrow-up' : 'arrow-down'} size="sm" />
    </ButtonBase>
  );
};

export const DialogHistory = ({
  items,
  collapsible = false,
  expandLabel = 'Expand history',
  collapseLabel = 'Collapse history',
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
      <TimelineBase>
        {items.map((item, index) => {
          return <ActivityItem {...item} key={index} />;
        })}

        {collapsible && (
          <ToggleButton expanded={true} onClick={onToggle}>
            {collapseLabel}
          </ToggleButton>
        )}
      </TimelineBase>
    );
  }

  return (
    <TimelineBase>
      <TimelineSection color="neutral">
        <ToggleButton onClick={onToggle}>{expandLabel}</ToggleButton>
      </TimelineSection>
    </TimelineBase>
  );
};
