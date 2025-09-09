import { ModalBase, type ModalBaseProps, ModalBody, ModalHeader, type ModalHeaderProps } from '..';

export interface SettingsModalProps extends ModalBaseProps {
  icon?: ModalHeaderProps['icon'];
  title?: ModalHeaderProps['title'];
  description?: ModalHeaderProps['description'];
}

export const SettingsModal = ({ icon, title, description, open, onClose, children, ...args }: SettingsModalProps) => {
  return (
    <ModalBase {...args} open={open} onClose={onClose}>
      <ModalHeader icon={icon} title={title} description={description} onClose={onClose} />
      <ModalBody>{children}</ModalBody>
    </ModalBase>
  );
};
