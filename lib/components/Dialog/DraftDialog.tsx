import {
  Article,
  Byline,
  DialogActions,
  DialogAttachments,
  type DialogProps,
  Flex,
  PageBase,
  PageHeader,
  PageNav,
  Section,
  Typography,
} from '..';

/**
 * Draft dialog variant, work-in-progress.
 */

export const DraftDialog = ({
  backButton,
  updatedAt,
  updatedAtLabel,
  title,
  sender,
  recipient,
  recipientLabel = 'to',
  summary = 'Summary.',
  body,
  actions = [],
  attachments,
}: DialogProps) => {
  return (
    <PageBase spacing={0} theme="default" shadow="xs">
      <PageNav backButton={backButton} padding={2} />
      <Article padding="page" spacing={6}>
        <Flex direction="col" spacing={3}>
          <PageHeader avatar={sender} title={title} />
          <Byline size="md" datetime={updatedAt}>
            <strong>{recipient?.name}</strong>
            {recipientLabel + ' ' + sender?.name + ', '}
            {updatedAtLabel}
          </Byline>
        </Flex>
        <Section padding={6} spacing={4} style={{ border: '1px solid', borderStyle: 'dashed' }}>
          <Typography size="lg">
            <p>{summary}</p>
            {body}
            {attachments && <DialogAttachments {...attachments} />}
            {actions?.length > 0 && <DialogActions items={actions} />}
          </Typography>
        </Section>
      </Article>
    </PageBase>
  );
};
