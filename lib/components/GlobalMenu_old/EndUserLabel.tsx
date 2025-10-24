import { PersonCircleIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import styles from './endUserLabel.module.css';

export interface EndUserLabelProps {
  children: ReactNode;
}

export const EndUserLabel = ({ children }: EndUserLabelProps) => {
  return (
    <p className={styles.text}>
      <PersonCircleIcon className={styles.icon} aria-hidden />
      <span className={styles.label}>{children}</span>
    </p>
  );
};
