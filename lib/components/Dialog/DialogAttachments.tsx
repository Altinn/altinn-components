import { type AttachmentLinkProps, AttachmentList, Heading, Section } from '..';

export interface DialogAttachmentsProps {
  title?: string;
  items?: AttachmentLinkProps[];
}

export const DialogAttachments = ({ title = 'Attachments', items }: DialogAttachmentsProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <Section spacing={1}>
      <Heading as="h2" size="xs">
        {title}
      </Heading>
      <AttachmentList size="lg" items={items} />
    </Section>
  );
};
