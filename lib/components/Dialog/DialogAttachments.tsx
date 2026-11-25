import { AttachmentList, type AttachmentListProps, Heading, Section } from '..';

export interface DialogAttachmentsProps extends Partial<AttachmentListProps> {
  title?: string;
}

export const DialogAttachments = ({ title = 'Attachments', items = [], ...attachmentList }: DialogAttachmentsProps) => {
  if (!items.length && !attachmentList.hiddenItemsLabel) {
    return null;
  }

  return (
    <Section spacing={1}>
      <Heading as="h2" size="xs" weight="normal" variant="subtle">
        {title}
      </Heading>
      <AttachmentList items={items} {...attachmentList} />
    </Section>
  );
};
