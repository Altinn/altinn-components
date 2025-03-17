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
      <Heading as="h2" size="xs" weight="normal" theme="subtle">
        {title}
      </Heading>
      <AttachmentList items={items} />
    </Section>
  );
};
