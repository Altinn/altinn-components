import { XMarkIcon } from '@navikt/aksel-icons';
import type { ReactNode } from 'react';
import { Flex, Heading, IconButton, Section } from '../';

export interface ModalHeaderProps {
  title: string;
  closeTitle?: string;
  onClose?: () => void;
  children?: ReactNode;
  sticky?: boolean;
}

export const ModalHeader = ({ title, onClose, closeTitle, children }: ModalHeaderProps) => {
  return (
    <Section as="header" spacing={2} padding={4}>
      <Flex direction="row" justify="between" align="center" spacing={8}>
        <Heading as="h2" size="lg">
          {title}
        </Heading>
        {typeof onClose === 'function' && (
          <IconButton
            icon={XMarkIcon}
            variant="outline"
            onClick={onClose}
            iconAltText={closeTitle ?? 'close'}
            size="sm"
          />
        )}
      </Flex>
      {children}
    </Section>
  );
};
