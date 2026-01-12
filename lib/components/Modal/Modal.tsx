import { XMarkIcon } from '@navikt/aksel-icons';
import { Button, ModalBase, type ModalBaseProps } from '../';
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
        <Button
          className={styles.dismiss}
          variant="outline"
          onClick={onClose}
          aria-label={closeTitle ?? 'Close'}
          size="sm"
        >
          <XMarkIcon style={{ fontSize: '1.5em' }} />
        </Button>
      )}
      {children}
    </ModalBase>
  );
};
