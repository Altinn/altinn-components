import {
  Article,
  Avatar,
  Byline,
  DialogActions,
  DialogAttachments,
  DialogMetadata,
  type DialogProps,
  DialogSection,
  Heading,
  PageBase,
  PageNav,
  Section,
  Typography,
} from '..';

/**
 * Draft dialog variant,
 */

export const DraftDialog = ({
  backButton,
  menu,
  updatedAt,
  updatedAtLabel,
  dueAt,
  dueAtLabel,
  status,
  title,
  sender,
  recipient,
  recipientLabel = 'to',
  summary = 'Summary.',
  body,
  actions = [],
  attachments,
  additionalInfo,
  contactInfo,
}: DialogProps) => {
  return (
    <PageBase color="neutral" shadow="xs">
      <PageNav backButton={backButton} menu={menu}>
        <DialogMetadata status={status} dueAt={dueAt} dueAtLabel={dueAtLabel} />
      </PageNav>
      <Article padding="xl" spacing="xl">
        <Section as="header" spacing="md">
          <Section align="center" spacing="md">
            <Avatar size="lg" {...sender} />
            <Heading size="lg">{title}</Heading>
          </Section>
          <Byline size="md" datetime={updatedAt}>
            <strong>{recipient?.name}</strong>
            {recipientLabel + ' ' + sender?.name + ', '}
            {updatedAtLabel}
          </Byline>
        </Section>
        <Section padding="xl" spacing="lg" style={{ border: '1px solid', borderStyle: 'dashed' }}>
          <Typography size="lg">
            <p>{summary}</p>
            {body}
            {attachments && <DialogAttachments {...attachments} />}
            {actions?.length > 0 && <DialogActions items={actions} />}
          </Typography>
        </Section>
        {additionalInfo && (
          <DialogSection title={additionalInfo?.title}>
            <Typography size="md">{additionalInfo?.children}</Typography>
          </DialogSection>
        )}

        {contactInfo && (
          <DialogSection title={contactInfo?.title}>
            <Typography size="md">{contactInfo?.children}</Typography>
          </DialogSection>
        )}
      </Article>
    </PageBase>
  );
};
