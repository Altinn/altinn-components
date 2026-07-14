import { ModalBase, ModalBody, ModalHeader, SeenByLog, type SeenByLogProps } from '../';

export interface DialogSeenByLogProps extends SeenByLogProps {
  title: string;
  open: boolean;
  onClose: () => void;
}

export const DialogSeenByLog = ({ title, items, endUserLabel, open, onClose }: DialogSeenByLogProps) => {
  return (
    <ModalBase open={open} onClose={onClose} variant="content">
      <ModalHeader title={title} onClose={onClose} />
      <ModalBody>
        <SeenByLog items={items} size="md" endUserLabel={endUserLabel} />
      </ModalBody>
    </ModalBase>
  );
};
