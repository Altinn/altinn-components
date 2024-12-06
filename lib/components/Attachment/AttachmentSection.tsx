import { type AttachmentLinkProps, AttachmentList } from '../Attachment';
import { Heading } from '../Typography';

export interface AttachmentSectionProps {
  title?: string;
  items?: AttachmentLinkProps[];
}

export const AttachmentSection = ({ title = 'Attachments', items }: AttachmentSectionProps) => {
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
