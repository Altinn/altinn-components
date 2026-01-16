import { XMarkIcon } from '@navikt/aksel-icons';
import cx from 'classnames';
import type { ReactNode } from 'react';
import { Button, Flex, Heading, ModalIcon, type ModalIconProps } from '../';
import styles from './modalHeader.module.css';

export interface ModalHeaderProps {
  title?: string;
  description?: string;
  icon?: ModalIconProps['icon'];
  closeTitle?: string;
  /** Optional: still useful for side effects; dialog close itself is handled by form submit */
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
    <header className={cx(styles.header, sticky && styles.sticky)}>
      <Flex direction="row" justify="between" align="center" spacing={8} style={{ flexGrow: 1 }}>
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

        {(onClose || closeTitle) && (
          <form
            method="dialog"
            onSubmit={() => {
              onClose?.();
            }}
          >
            <Button type="submit" variant="outline" aria-label={closeTitle ?? 'Close'} size="sm">
              <XMarkIcon style={{ fontSize: '1.5em' }} />
            </Button>
          </form>
        )}
      </Flex>
    </header>
  );
};
