import { type AttachmentLinkProps, AttachmentList } from '../Attachment';
import { MetaItem } from '../Meta';

export interface HistoryAttachmentsProps {
  title?: string;
  items?: AttachmentLinkProps[];
}

export const HistoryAttachments = ({ title = 'Attachments', items }: HistoryAttachmentsProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <section>
      <MetaItem as="h2" size="xs">
        {title}
      </MetaItem>
      <AttachmentList size="lg" items={items} />
    </section>
  );
};
