import { XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { ReactNode } from 'react';
import { Flex, Heading, IconButton, Section } from '../';
import styles from './modalHeader.module.css';

export interface ModalHeaderProps {
  title?: string;
  closeTitle?: string;
  onClose?: () => void;
  children?: ReactNode;
  sticky?: boolean;
}

export const ModalHeader = ({ title, onClose, closeTitle, children, sticky = true }: ModalHeaderProps) => {
  return (
    <Section as="header" spacing={2} padding={4} className={cx(styles.header, sticky && styles.sticky)}>
      <Flex direction="row" justify="between" align="center" spacing={8}>
        {children ||
          (title && (
            <Heading as="h2" size="lg">
              {title}
            </Heading>
          ))}
        {typeof onClose === 'function' && (
          <IconButton
            icon={XMarkIcon}
            variant="outline"
            onClick={onClose}
            iconAltText={closeTitle ?? 'Close'}
            size="sm"
          />
        )}
      </Flex>
    </Section>
  );
};
