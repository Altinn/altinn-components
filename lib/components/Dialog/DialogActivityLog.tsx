import { ActivityLog, type ActivityLogProps, ModalBase, ModalHeader, Section, Toolbar, type ToolbarProps } from '../';

export interface DialogActivityLogProps extends ActivityLogProps {
  title: string;
  toolbar?: ToolbarProps;
  open: boolean;
  onClose: () => void;
}

export const DialogActivityLog = ({ title, toolbar, items, open, onClose }: DialogActivityLogProps) => {
  return (
    <ModalBase open={open} onClose={onClose} variant="content">
      <div style={{ position: 'sticky', top: 0, zIndex: 1 }}>
        <ModalHeader title={title} onClose={onClose}>
          {toolbar && <Toolbar {...toolbar} />}
        </ModalHeader>
      </div>
      <Section padding={4} spacing={6}>
        <ActivityLog items={items} />
      </Section>
    </ModalBase>
  );
};
