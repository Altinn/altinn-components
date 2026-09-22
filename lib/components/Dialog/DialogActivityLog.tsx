import { ActivityLog, type ActivityLogProps, ModalBase, ModalBody, ModalHeader, Toolbar, type ToolbarProps } from '../';

export interface DialogActivityLogProps extends ActivityLogProps {
  title: string;
  /** Rendered above the log, for a filter and a search over it. */
  toolbar?: ToolbarProps;
  open: boolean;
  onClose: () => void;
}

export const DialogActivityLog = ({ title, toolbar, open, onClose, ...activityLog }: DialogActivityLogProps) => {
  return (
    <ModalBase open={open} onClose={onClose} variant="content">
      <ModalHeader title={title} onClose={onClose} />
      <ModalBody>
        {toolbar && <Toolbar {...toolbar} />}
        <ActivityLog {...activityLog} />
      </ModalBody>
    </ModalBase>
  );
};
