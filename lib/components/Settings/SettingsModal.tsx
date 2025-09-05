import { ModalBase, type ModalBaseProps, ModalBody, ModalHeader, type ModalHeaderProps } from '..';

export interface SettingsModalProps extends ModalBaseProps {
  icon?: ModalHeaderProps['icon'];
  title?: ModalHeaderProps['title'];
}

export const SettingsModal = ({ icon, title, open, onClose, children, ...args }: SettingsModalProps) => {
  return (
    <ModalBase {...args} open={open} onClose={onClose}>
      <ModalHeader icon={icon} title={title} onClose={onClose} />
      <ModalBody>{children}</ModalBody>
    </ModalBase>
  );
};
