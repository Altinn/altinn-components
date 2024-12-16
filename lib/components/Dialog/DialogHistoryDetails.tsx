'use client';
import { useState } from 'react';
import {
  DialogAttachments,
  type DialogAttachmentsProps,
  DialogMetadata,
  DialogTransmissions,
  type DialogTransmissionsProps,
} from '../';

export interface DialogHistoryDetailsProps {
  attachments?: DialogAttachmentsProps;
  transmissions?: DialogTransmissionsProps;
}

export const DialogHistoryDetails = ({ attachments, transmissions }: DialogHistoryDetailsProps) => {
  const attachmentsLabel = attachments?.title;
  const transmissionsLabel = transmissions?.title;

  const [expanded, setExpanded] = useState(false);

  const onExpand = () => {
    setExpanded(true);
  };

  if (!attachments && !transmissions) {
    return false;
  }

  if (expanded) {
    return (
      <>
        {attachments && <DialogAttachments {...attachments} />}
        {transmissions && <DialogTransmissions {...transmissions} />}
      </>
    );
  }

  return (
    <DialogMetadata attachmentsLabel={attachmentsLabel} transmissionsLabel={transmissionsLabel} onClick={onExpand} />
  );
};
