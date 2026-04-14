import type { ReactNode } from 'react';
import { Heading, Typography } from '..';
import styles from './dialogSection.module.css';

export interface DialogSectionProps {
  title?: string;
  children?: ReactNode;
}

export const DialogSection = ({ title, children }: DialogSectionProps) => {
  if (!children) {
    return null;
  }

  return (
    <section className={styles.section}>
      {title && <Heading size="lg">{title}</Heading>}
      <Typography size="sm">{children}</Typography>
    </section>
  );
};
