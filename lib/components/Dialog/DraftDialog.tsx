import {
  Article,
  Avatar,
  Byline,
  DialogActions,
  DialogAttachments,
  DialogMetadata,
  type DialogProps,
  DialogSection,
  Flex,
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
    <PageBase theme="default" shadow="xs">
      <PageNav backButton={backButton} menu={menu} padding={2}>
        <DialogMetadata status={status} dueAt={dueAt} dueAtLabel={dueAtLabel} />
      </PageNav>
      <Article padding="page" spacing={6}>
        <Section as="header" spacing={3}>
          <Flex align="center" spacing={3}>
            <Avatar size="xl" {...sender} />
            <Heading size="xl">{title}</Heading>
          </Flex>
          <Byline size="md" datetime={updatedAt}>
            <strong>{recipient?.name}</strong>
            {recipientLabel + ' ' + sender?.name + ', '}
            {updatedAtLabel}
          </Byline>
        </Section>
        <Section padding={6} spacing={4} style={{ border: '1px solid', borderStyle: 'dashed' }}>
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
