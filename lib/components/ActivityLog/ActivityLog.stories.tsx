import { ActivityLog, ModalBase, ModalBody, ModalHeader, Section, Toolbar } from '..';
import { useActivityLog } from '../../../examples';

const meta = {
  title: 'ActivityLog',
  tags: ['beta'],
  parameters: {},
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

export const Modal = () => {
  const { toolbar, items } = useActivityLog();

  const onClose = () => {
    alert('Close modal');
  };

  return (
    <ModalBase open={true} onClose={onClose} variant="content">
      <ModalHeader title="Aktivitetslogg for dialog" onClose={onClose} />
      <ModalBody style={{ position: 'sticky', top: 0, zIndex: 1 }}>
        <Toolbar {...toolbar} />
      </ModalBody>
      <ModalBody>
        <ActivityLog items={items} />
      </ModalBody>
    </ModalBase>
  );
};
