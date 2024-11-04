import { type AttachmentLinkProps, AttachmentList } from '../Attachment';
import { MetaItem } from '../Meta';
import { Typography } from '../Typography';

export interface DialogAttachmentsProps {
  title?: string;
  items?: AttachmentLinkProps[];
}

export const DialogAttachments = ({ title = 'Attachments', items }: DialogAttachmentsProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <MetaItem as="h2" size="xs">
        {title}
      </MetaItem>
      <Typography size="lg">
        <AttachmentList size="lg" items={items} />
      </Typography>
    </section>
  );
};
