import { useState } from 'react';
import {
  ActivityLog,
  Button,
  Heading,
  Layout,
  ModalBase,
  ModalBody,
  ModalHeader,
  PageBase,
  Section,
  Toolbar,
} from '..';
import { useActivityLog, useProfile } from '../../../examples';

const meta = {
  title: 'Timeline/ActivityLog',
  tags: ['beta'],
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
};

export default meta;

export const Default = () => {
  const { items } = useActivityLog();
  return <ActivityLog items={items} />;
};

export const Controlled = () => {
  const { toolbar, items } = useActivityLog();
  return (
    <Section spacing={6}>
      <Toolbar {...toolbar} />
      <ActivityLog items={items} />
    </Section>
  );
};

export const ProfileActivityLog = () => {
  const { layout } = useProfile({
    pageId: 'activity-log',
  });
  return (
    <Layout {...layout}>
      <PageBase>
        <Heading size="xl">Aktivitetslogg</Heading>
        <Controlled />
      </PageBase>
    </Layout>
  );
};

export const ActivityLogModal = () => {
  const { items } = useActivityLog();
  const [open, setOpen] = useState<boolean>(true);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} />
        <ModalBody>
          <ActivityLog items={items} />
        </ModalBody>
      </ModalBase>
    </>
  );
};

export const ActivityLogModalAdvanced = () => {
  const { toolbar, items } = useActivityLog();

  const [open, setOpen] = useState<boolean>(true);

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <ModalBase open={open} onClose={onClose} variant="content">
        <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} sticky={false} />
        <ModalBody>
          <div style={{ position: 'sticky', top: '1.5em', zIndex: 2 }}>
            <Toolbar {...toolbar} />
          </div>
          <ActivityLog items={items} />
        </ModalBody>
      </ModalBase>
    </>
  );
};
