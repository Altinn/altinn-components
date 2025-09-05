import { XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { ReactNode } from 'react';
import { Flex, Heading, IconButton, ModalIcon, type ModalIconProps, Section } from '../';
import styles from './modalHeader.module.css';

export interface ModalHeaderProps {
  title?: string;
  description?: string;
  icon?: ModalIconProps['icon'];
  closeTitle?: string;
  onClose?: () => void;
  children?: ReactNode;
  sticky?: boolean;
}

export const ModalHeader = ({
  title,
  description,
  icon,
  onClose,
  closeTitle,
  children,
  sticky = true,
}: ModalHeaderProps) => {
  return (
    <Section as="header" spacing={2} padding={4} className={cx(styles.header, sticky && styles.sticky)}>
      <Flex direction="row" justify="between" align="center" spacing={8}>
        {children || (
          <Flex direction="row" align="center" spacing={3}>
            {icon && <ModalIcon icon={icon} />}
            <Flex direction="col" spacing={0}>
              {title && (
                <Heading as="h2" size={description ? 'md' : 'lg'}>
                  {title}
                </Heading>
              )}
              {description && (
                <Heading as="h3" size="xs" weight="normal">
                  {description}
                </Heading>
              )}
            </Flex>
          </Flex>
        )}
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
