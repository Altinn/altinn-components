import { XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { MouseEventHandler } from 'react';
import { IconButton } from '../Button';
import styles from './drawerHeader.module.css';

export interface DrawerHeaderProps {
  className?: string;
  title?: string;
  closeIconAltText?: string;
  onClose?: MouseEventHandler;
}

export const DrawerHeader = ({ className, title, onClose, closeIconAltText = 'Close icon' }: DrawerHeaderProps) => {
  return (
    <header className={cx(styles.header, className)}>
      <h2 className={styles.title}>{title}</h2>
      <IconButton
        size="sm"
        icon={XMarkIcon}
        variant="outline"
        onClick={onClose}
        className={styles.close}
        iconAltText={closeIconAltText}
      />
    </header>
  );
};
