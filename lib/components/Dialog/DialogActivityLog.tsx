import { ActivityLog, type ActivityLogProps, ModalBase, ModalBody, ModalHeader, type ToolbarProps } from '../';

export interface DialogActivityLogProps extends ActivityLogProps {
  title: string;
  toolbar?: ToolbarProps;
  open: boolean;
  onClose: () => void;
}

export const DialogActivityLog = ({ title, items, open, onClose }: DialogActivityLogProps) => {
  return (
    <ModalBase open={open} onClose={onClose} variant="content">
      <ModalHeader title={title} onClose={onClose} />
      <ModalBody>
        <ActivityLog items={items} />
      </ModalBody>
    </ModalBase>
  );
};
