'use client';
import { useState } from 'react';
import { AttachmentSection, type AttachmentSectionProps } from '../Attachment';
import type { AvatarProps } from '../Avatar/';
import { TransmissionSection, type TransmissionSectionProps } from '../Transmission';
import type { TypographySize } from '../Typography';
import { HistoryItemBase } from './HistoryItemBase';
import { HistoryMetadata } from './HistoryMetadata';

export interface HistoryItemProps {
  size?: TypographySize;
  createdBy?: AvatarProps;
  createdAt: string;
  createdAtLabel?: string;
  summary?: string;
  attachments?: AttachmentSectionProps;
  transmissions?: TransmissionSectionProps;
}

export const HistoryItem = ({
  createdBy,
  createdAt,
  createdAtLabel,
  summary,
  attachments,
  transmissions,
}: HistoryItemProps) => {
  const attachmentsLabel = attachments?.title;
  const transmissionsLabel = transmissions?.title;

  const [expanded, setExpanded] = useState(false);

  const onExpand = () => {
    setExpanded(true);
  };

  return (
    <HistoryItemBase createdBy={createdBy} createdAt={createdAt} createdAtLabel={createdAtLabel}>
      {summary && <p>{summary}</p>}
      {expanded ? (
        <>
          {attachments && <AttachmentSection {...attachments} />}
          {transmissions && <TransmissionSection {...transmissions} />}
        </>
      ) : (
        <HistoryMetadata
          attachmentsLabel={attachmentsLabel}
          transmissionsLabel={transmissionsLabel}
          onClick={onExpand}
        />
      )}
    </HistoryItemBase>
  );
};
