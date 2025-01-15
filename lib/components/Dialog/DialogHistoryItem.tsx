'use client';
import type { ReactNode } from 'react';
import {
  type AvatarProps,
  type DialogAttachmentsProps,
  type DialogTransmissionsProps,
  TimelineSection,
  Typography,
} from '../';

import { DialogHistoryDetails } from './DialogHistoryDetails';

export interface DialogHistoryItemProps {
  createdAt?: string;
  createdAtLabel?: string;
  createdBy?: AvatarProps;
  summary?: string;
  attachments?: DialogAttachmentsProps;
  transmissions?: DialogTransmissionsProps;
  collapsed?: boolean;
  children?: ReactNode;
}

export const DialogHistoryItem = ({
  createdBy,
  createdAt,
  createdAtLabel,
  summary,
  attachments,
  transmissions,
  children,
}: DialogHistoryItemProps) => {
  return (
    <TimelineSection
      color="neutral"
      size="xs"
      datetime={createdAt}
      dateline={createdAtLabel}
      byline={createdBy?.name}
      avatar={createdBy}
    >
      <Typography color="article" size="md">
        {summary && <p>{summary}</p>}
        <DialogHistoryDetails attachments={attachments} transmissions={transmissions} />
        {children}
      </Typography>
    </TimelineSection>
  );
};
