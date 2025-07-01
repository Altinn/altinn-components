import { XMarkIcon } from '@navikt/aksel-icons';
import { IconButton, ModalBase, type ModalBaseProps } from '../';
import styles from './modal.module.css';

export interface ModalProps extends ModalBaseProps {
  open: boolean;
  onClose: () => void;
  closeTitle?: string;
  dismissable?: boolean;
}

export const Modal = ({ open, onClose, dismissable, closeTitle, children, ...props }: ModalProps) => {
  return (
    <ModalBase padding={6} spacing={6} {...props} open={open} onClose={onClose}>
      {typeof onClose === 'function' && dismissable && (
        <IconButton
          className={styles.dismiss}
          icon={XMarkIcon}
          variant="outline"
          onClick={onClose}
          iconAltText={closeTitle ?? 'Close'}
          size="sm"
        />
      )}
      {children}
    </ModalBase>
  );
};
