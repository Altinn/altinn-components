import {
  Button,
  ButtonGroup,
  type ButtonProps,
  ModalBase,
  type ModalBaseProps,
  ModalBody,
  ModalHeader,
  type ModalHeaderProps,
} from '..';

export interface SettingsModalButtonProps extends ButtonProps {
  close?: boolean;
}

export interface SettingsModalProps extends ModalBaseProps {
  icon?: ModalHeaderProps['icon'];
  title?: ModalHeaderProps['title'];
  description?: ModalHeaderProps['description'];
  buttons?: SettingsModalButtonProps[];
}

export const SettingsModal = ({
  icon,
  title,
  description,
  open,
  onClose,
  buttons,
  children,
  ...args
}: SettingsModalProps) => {
  return (
    <ModalBase {...args} open={open} onClose={onClose}>
      <ModalHeader icon={icon} title={title} description={description} onClose={onClose} />
      <ModalBody>
        {children}

        {buttons?.length && (
          <ButtonGroup>
            {buttons?.map((button, index) => (
              <Button
                {...button}
                key={index}
                onClick={(e) => {
                  button?.onClick?.(e);
                  button?.close && onClose?.();
                }}
              />
            ))}
          </ButtonGroup>
        )}
      </ModalBody>
    </ModalBase>
  );
};
