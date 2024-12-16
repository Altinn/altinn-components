import { type AttachmentLinkProps, AttachmentList } from '../Attachment';
import { Heading } from '../Typography';

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
      <Heading as="h2" size="xs">
        {title}
      </Heading>
      <AttachmentList size="lg" items={items} />
    </section>
  );
};
