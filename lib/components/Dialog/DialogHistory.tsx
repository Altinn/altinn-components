'use client';
import { ArrowDownIcon, ArrowUpIcon } from '@navikt/aksel-icons';
import { type ReactNode, useState } from 'react';
import { ButtonBase, DialogActivity, type DialogActivityProps, Icon, Timeline, TimelineSection } from '..';

import styles from './dialogHistory.module.css';

export interface DialogHistoryProps {
  items?: DialogActivityProps[];
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
      <Icon svgElement={expanded ? ArrowUpIcon : ArrowDownIcon} size="sm" />
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
      <Timeline>
        {items.map((item, index) => {
          return <DialogActivity {...item} key={index} />;
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
    <TimelineSection border="dashed">
      <ToggleButton onClick={onToggle}>{expandLabel}</ToggleButton>
    </TimelineSection>
  );
};
