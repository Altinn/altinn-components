import {
  Button,
  ButtonGroup,
  ButtonIcon,
  ButtonLabel,
  type ButtonProps,
  ModalBase,
  type ModalBaseProps,
  ModalBody,
  ModalHeader,
  type ModalHeaderProps,
} from '..';

export interface SettingsModalButtonProps extends ButtonProps {
  label: string;
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
            {buttons?.map((button, index) => {
              const { icon, label, ...buttonProps } = button;
              return (
                <Button
                  {...buttonProps}
                  key={index}
                  onClick={(e) => {
                    button?.onClick?.(e);
                    button?.close && onClose?.();
                  }}
                >
                  {icon && <ButtonIcon icon={icon} />}
                  <ButtonLabel>{label}</ButtonLabel>
                </Button>
              );
            })}
          </ButtonGroup>
        )}
      </ModalBody>
    </ModalBase>
  );
};
