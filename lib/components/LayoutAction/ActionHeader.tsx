import styles from './actionHeader.module.css';

import { IconButton } from '../Button';

export interface ActionHeaderProps {
  title: string;
  hidden?: boolean;
  dismissable?: boolean;
  onDismiss?: () => void;
}

export const ActionHeader = ({ hidden = false, title, dismissable = true, onDismiss }: ActionHeaderProps) => {
  return (
    <header className={styles.header} aria-hidden={hidden} data-theme="global-dark">
      <h2 className={styles.title}>{title}</h2>
      {dismissable && <IconButton icon="x-mark" onClick={onDismiss} className={styles.dismiss} />}
    </header>
  );
};
