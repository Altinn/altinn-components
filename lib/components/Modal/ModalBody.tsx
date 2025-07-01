import type { ReactNode } from 'react';
import { Section, type SectionProps } from '../';
import styles from './modalBody.module.css';

export interface ModalBodyProps extends SectionProps {
  children?: ReactNode;
}

export const ModalBody = ({ children, ...props }: ModalBodyProps) => {
  return (
    <Section spacing={6} padding={6} {...props} className={styles.body}>
      {children}
    </Section>
  );
};
